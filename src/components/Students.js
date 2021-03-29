import { useContext } from "react";
import { StudentContext } from "../context/StudentContext"
import {Table } from "react-bootstrap"

function Students() {

    const { students, dispatch }= useContext(StudentContext)
    return (
        <Table striped bordered className="mt-4">
            <thead className="bg-info">
                <tr>
                    <th>NAME</th>
                    <th>LEVEL</th>
                    <th>RETURN DATE</th>
                    <th>DEPARTURE DATE</th>
                    <th>REASON</th>
                    <th>DESTINATION</th>
                    <th>DEL</th>
                </tr>
            </thead>
            {
                students.map(student => (
                    <tr>
                        <td>{student.name}</td>
                        <td>{student.level}</td>
                        <td>{student.rdate}</td>
                        <td>{student.ddate}</td>
                        <td>{student.reason}</td>
                        <td>{student.destination}</td>
                        <td className="text-center">
                        <button className="btn btn-danger" onClick={()=>dispatch({type:"delete", payload:student.indexNo})}>X</button>
                   </td> </tr>
                ))
            }
        </Table>
    )
}

export default Students
