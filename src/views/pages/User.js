import React from 'react'
import { Table } from 'react-bootstrap'

export default function User({data}) {
    return (
        <div style={{fontSize:"10px", backgroundColor:'lightblue', width:"50%"}}>
            <h6>{data}</h6>
        </div>
    )
}
