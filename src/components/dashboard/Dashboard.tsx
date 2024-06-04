'use client'

import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'

import { User } from '../../types/User'
import { calculateAge, calculateAgeGroup, textWaveAnimationVariants } from '../../lib/utils'
import BarChartComponent from '../charts/BarChart'
import PieChartComponent from '../charts/PieChart'
import ScatterChartComponent from '../charts/ScatterChart'
import GenderFilterDropdown from '../common/GenderFilterDropdown'

export default function Dashboard() {
  const [users, setUsers] = useState([] as User[]);
  const [genderFilter, setGenderFilter] = useState<string | null>(null);

  useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch('/api/mock');
          const result = await response.json();
          setUsers(result);
        } catch (error) {
          console.error('Error fetching data:', error);
        } 
      }

      fetchData();
  }, []);

  // Filtered users based on gender
  const filteredUsers = useMemo(() => {
    return genderFilter ? users.filter(user => user.Gender === genderFilter) : users;
  }, [users, genderFilter]);

  // Transform data to group users by age group
  const groupedUserData = useMemo(() => {
    return filteredUsers.reduce((acc, user) => {
      const age = calculateAge(user.BirthDate);
      const ageGroup = calculateAgeGroup(age);
      acc[ageGroup] = acc[ageGroup] || [];
      acc[ageGroup].push(user);
      return acc;
    }, {} as Record<string, User[]>);
  }, [filteredUsers]);
  
  // Sorted age groups
  const ageGroups = useMemo(() => {
    return Object.keys(groupedUserData).sort((a, b) => parseInt(a) - parseInt(b));
  }, [groupedUserData]);

  const pieChartData = ageGroups.map(ageGroup => ({
    name: ageGroup,
    value: groupedUserData?.[ageGroup].length,
  }));

  const scatterChartData = ageGroups.map(ageGroup => ({
    AgeGroup: ageGroup,
    Dependants: groupedUserData?.[ageGroup].reduce((total, user) => total + user.Dependants, 0),
  }));
  
  return (
    <div className="p-8 bg-white shadow rounded-lg">
      <h1 className="text-3xl font-bold mb-4">
        {Array.from('User Overview').map((letter, i) => (
          <motion.span
            key={i}
            custom={i}
            initial="initial"
            animate="animate"
            variants={textWaveAnimationVariants}
            className="inline-block"
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </h1>

      {/* Gender Filter */}
      <GenderFilterDropdown
        value={genderFilter}
        onChange={(value) => setGenderFilter(value)}
      />

      {/* Visualization: Dependents by Country */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Dependents by Country</h2>
        <BarChartComponent
          data={filteredUsers}
          xKey="Country"
          yKey="Dependants"
        />
      </div>

      {/* Visualization: Age Groups */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Age Groups</h2>
        <PieChartComponent
          data={pieChartData}
          dataKey="value"
        />
      </div>

      {/* Visualization: Age vs Dependents */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Age vs Dependents</h2>
        <ScatterChartComponent
          data={scatterChartData}
          xKey="AgeGroup"
          yKey="Dependants"
        />
      </div>
    </div>
  );
}