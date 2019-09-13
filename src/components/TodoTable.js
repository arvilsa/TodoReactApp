import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import App from '../App';

const TodoTable =(props)=>{
    const columns =[
        {
            Header: 'Date',
            accessor: 'date'
        },
        {
            Header: 'Desc',
            accessor: 'desc'
        },
        {
            filterable: false, 
            sortable: false,
           Cell: ({index}) => <button id={index} onClick = {props.deleteItem}>Delete</button>
        }
    ]
    return(
        <div>
            <ReactTable data={props.todos} columns={columns} filterable={true}/>
        </div>
    )

}

export default TodoTable