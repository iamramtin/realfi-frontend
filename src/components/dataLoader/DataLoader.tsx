import React, { ReactNode } from 'react';

interface DataLoaderProps {
    loading: boolean;
    children: ReactNode;
}

export default function DataLoader({ loading, children }: DataLoaderProps): JSX.Element {
    if (loading) {
        return <div>Fetching data...</div>;
    }

    return <>{children}</>
}
