'use client'

import { useState } from 'react'

import Dashboard from '../../components/dashboard/Dashboard'
import Table from '../../components/table/Table'

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('table')

  return (
    <div className="container mx-auto py-12">
      <div className="flex justify-center mb-6">
        <button
          aria-label='Table tab'
          className={`px-4 py-2 mx-2 ${activeTab === 'table' ? 'bg-teal-700 text-white' : 'bg-gray-300'}`}
          onClick={() => setActiveTab('table')}
        >
          Table
        </button>
        <button
          aria-label='Dashboard tab'
          className={`px-4 py-2 mx-2 ${activeTab === 'dashboard' ? 'bg-teal-700 text-white' : 'bg-gray-300'}`}
          onClick={() => setActiveTab('dashboard')}
        >
          Dashboard
        </button>
      </div>
      <div>
        {activeTab === 'table' ? <Table /> : <Dashboard />}
      </div>
    </div>
  )
}
