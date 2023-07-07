import './leaves.css'
import {TopSearch} from "../../components/TopSerarch/TopSearch.jsx";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';


export const Leaves = () => {
    // const [employees,,setemployee] = useState([]);

    // useEffect(() => {
    //     fetch()
    //     .then((response) => response.json)
    //     .then((data) => console.log(employees))
    // },[])
    return (
        <div className='leaves'>
            <TopSearch/>
            <div className='leaves_container'>
                <Row>
                    <Col className='leaves_header'>Leaves Request</Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </div>
        </div>
    )
}