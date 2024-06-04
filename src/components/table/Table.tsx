'use client'

import { useEffect, useState } from 'react'

import { User } from '../../types/User'
import DataLoader from "../dataLoader/DataLoader"

export default function Table() {
  const [users, setUsers] = useState([] as User[]);
  const [showFullTable, setShowFullTable] = useState(false)

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

  const toggleTable = () => {
    setShowFullTable(!showFullTable)
  }

  return (
    <DataLoader loading={!users}>
      <div className="p-4 bg-white shadow rounded-lg">
        <div className="flex justify-between mb-4">
          <h2 className="text-2xl font-bold">Table</h2>
          <button 
            onClick={toggleTable} 
            className="mb-4 md:block hidden"
          >
            {showFullTable ? 'Show Simple Table' : 'Show Full Table'}
          </button>
        </div>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left">Name</th>
              <th className="py-2 px-4 border-b text-left">Surname</th>
              <th className={`py-2 px-4 border-b text-left ${showFullTable ? 'md:table-cell hidden' : 'hidden'}`}>Number</th>
              <th className={`py-2 px-4 border-b text-left ${showFullTable ? 'md:table-cell hidden' : 'hidden'}`}>Gender</th>
              <th className={`py-2 px-4 border-b text-left ${showFullTable ? 'md:table-cell hidden' : 'hidden'}`}>Country</th>
              <th className={`py-2 px-4 border-b text-left ${showFullTable ? 'md:table-cell hidden' : 'hidden'}`}>Dependants</th>
              <th className={`py-2 px-4 border-b text-left ${showFullTable ? 'md:table-cell hidden' : 'hidden'}`}>BirthDate</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user: User, index: number) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{user.Name}</td>
                <td className="py-2 px-4 border-b">{user.Surname}</td>
                <td className={`py-2 px-4 border-b ${showFullTable ? 'md:table-cell hidden' : 'hidden'}`}>{user.Number}</td>
                <td className={`py-2 px-4 border-b ${showFullTable ? 'md:table-cell hidden' : 'hidden'}`}>{user.Gender}</td>
                <td className={`py-2 px-4 border-b ${showFullTable ? 'md:table-cell hidden' : 'hidden'}`}>{user.Country}</td>
                <td className={`py-2 px-4 border-b ${showFullTable ? 'md:table-cell hidden' : 'hidden'}`}>{user.Dependants}</td>
                <td className={`py-2 px-4 border-b ${showFullTable ? 'md:table-cell hidden' : 'hidden'}`}>{user.BirthDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DataLoader>
  );
}
