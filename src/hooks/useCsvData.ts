// Not used, implemented in mock api endpoint to fetch data from csv file

import { useState, useEffect } from "react";
import Papa from 'papaparse'

import { User } from '../types/User'

export default function useCsvData(url: string): { users: User[] | undefined, error: Error | null } {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        fetch(url)
            .then(response => response.text())
            .then(csv => {
                Papa.parse<User>(csv, {
                    header: true,
                    dynamicTyping: true,
                    complete: (results: any) => {
                        setUsers(results.data);
                    },
                    error: (error: Error) => {
                        setError(error);
                    },
                });
            })
            .catch(err => {
                setError(err);
            });
    }, [url]);

    return { users, error };
}
