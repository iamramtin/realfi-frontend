import React from 'react';

interface GenderFilterDropdownProps {
  value: string | null;
  onChange: (value: string | null) => void;
}

const GenderFilterDropdown: React.FC<GenderFilterDropdownProps> = ({ value, onChange }) => {
  const handleGenderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value !== '' ? e.target.value : null);
  };

  return (
    <div className="mb-4">
      <label htmlFor="genderFilter" className="mr-2">Filter by Gender:</label>
      <select
        id="genderFilter"
        value={value || ''}
        onChange={handleGenderChange}
        className="p-2 border border-gray-300 rounded-md"
        data-testid="select-option"
      >
        <option value="">All</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </div>
  );
};

export default GenderFilterDropdown;
