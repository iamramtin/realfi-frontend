import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface BarChartProps {
    data: any[];
    xKey: string;
    yKey: string;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-300 p-2 rounded-md shadow-md">
        <p>{`${label} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

export default function BarChartComponent({ data, xKey, yKey }: BarChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xKey || ""} />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey={yKey} fill="#0d9488" />
      </BarChart>
    </ResponsiveContainer>
  );
};
