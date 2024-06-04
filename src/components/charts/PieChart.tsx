import React from 'react';
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

interface PieChartProps {
  data: any[];
  dataKey: string;
}

export default function PieChartComponent({ data, dataKey }: PieChartProps) {
  const COLORS = ['#115e59', '#eae37f', '#0d9488', '#008a9f', '#ff8042', '#af19FF', '#ff1919'];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie data={data} dataKey={dataKey} nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#00454f" label>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};
