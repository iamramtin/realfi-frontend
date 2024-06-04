import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip,ResponsiveContainer } from 'recharts';

interface ScatterChartProps {
    data: any[];
    xKey: string;
    yKey: string;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-300 p-2 rounded-md shadow-md">
        <p>{`${payload[1].name}: ${payload[1].value}`}</p>
      </div>
    );
  }

  return null;
};

export default function ScatterChartComponent({ data, xKey, yKey }: ScatterChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <ScatterChart>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xKey || ""} label={{ value: 'AgeGroup', position: 'insideBottom' }} />
        <YAxis type="number" dataKey={yKey} label={{ value: 'Dependants', angle: -90, position: 'insideLeft' }} />
        <Tooltip content={<CustomTooltip />} />
        <Scatter data={data} fill="#0d9488" />
      </ScatterChart>
    </ResponsiveContainer>
  );
};
