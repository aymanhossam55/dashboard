import './leaves.css'
import {TopSearch} from "../../components/TopSerarch/TopSearch.jsx";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { useEffect, useState } from 'react';
// import Employee from '../../components/Employee';

export const Leaves = () => {
    // const [employees,,setemployee] = useState([]);

    // useEffect(() => {
    //     fetch()
    //     .then((response) => response.json)
    //     .then((data) => console.log(employees))
    // },[])

    // const EmployeesData = employees.map((employee) => {
    //     return(
    //         <Employee employee={employee}/>
    //     );
    // })
    return (
        <div className='leaves'>
            <TopSearch/>
            <div className='leaves-container'>
                <Row className=''>
                    <Col className='leaves-header'>Leaves Request</Col>
                    <Col>
                        <div className='search-leaves'>
                            <input className='leaves-search-input' type='search' placeholder='Search for Employees'/>
                        </div>
                    </Col>
                </Row>
                <Row className='Leave-details d-flex'>
                    <Col>
                    <div className='id-leaves'>
                        <p>id</p>
                    </div>
                    </Col>
                    <Col>
                    <div className='Name-leaves'>
                        <p>Name</p>
                    </div>
                    </Col>
                    <Col>
                    <div className='Department_Role-leaves'>
                        <p>Department Role</p>
                    </div>
                    </Col>
                    <Col>
                    <div className='Date-leaves'>
                        <p>Date</p>
                    </div>
                    </Col>
                    <Col>
                    <div className='Status-leaves'>
                        <p>Status</p>
                    </div>
                    </Col>
                    <Col>
                    <div className='Leave_From-leaves'>
                        <p>Leave From</p>
                    </div>
                    </Col>
                    <Col>
                    <div className='Leave_To-leaves'>
                        <p>Leave To</p>
                    </div>
                    </Col>
                    <Col>
                    <div className='Leave_Type-leaves'>
                        <p>Leave Type</p>
                    </div>
                    </Col>
                    <Col>
                    <div className='Reason-leaves'>
                        <p>Reason</p>
                    </div>
                    </Col>
                    <Col>
                    <div className='Action-leaves'>
                        <p>Action</p>
                    </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}