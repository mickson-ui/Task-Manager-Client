
import React, { useEffect, useState}  from 'react';
import Column from '../components/Column';

import { fetchColumns } from '../services/api';

import '../styles/Board.css';
import AddTaskForm from './AddTaskForm';

function Board(){
    const [columns, setColumns] = useState([])

    useEffect(() => {
        fetchColumns()
            .then((data) => { 
            console.log('Fetched Columns:', data); // Debug response here
            setColumns(data);    
        })
            .catch((error) => console.error('Error fetching colums:', error))
    }, [])

    return (
        <div className='board'>
            <AddTaskForm columns={columns} />
            {columns && columns.length > 0 ? (
                columns.map((column) => (
                    <Column key={column._id} name={column.name} tasks={column.tasks || []} />
                ))
            ) : (
                <p>Loading columns...</p> // Or a fallback UI
            )}
        </div>
    )
}

export default Board;