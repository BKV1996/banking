import Table from 'react-bootstrap/Table';
import SignUp from '../SignUp';
import { Button, Modal } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";


function EmpData() {

    const { logToken } = useSelector((state) => state.test);

    const [data, setData] = useState("");
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const getEmployeeData = async () => {

        const resp = await fetch("/api/v1/auth/employee/all", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${logToken}`,
                "Content-Type": "application/json",
            },
        }).then((response) => {
            response.json().then((result) => {
                // console.log("result", result);
                setData(result);
            })
        })
    }
    // useEffect(() => {
    //     getEmployeeData();
    // }, [])

    // console.log(data)

    const userDetails = async () => {
        
    }

    const activate = () =>{
            console.log("yOUR ACCOUNT IS ACTIVATED")
    }

    const deactivate =()=> {
        console.log("yOUR ACCOUNT IS DEACTIVATED")
    }


    return (
        <>
            <SignUp />
            <div>
                <div>
                    <Button variant="primary" onClick={(e) => getEmployeeData()} >Submit</Button>
                </div>
            </div>
            <div>
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>contact_number</th>
                            <th>full_name</th>
                            <th>contact_number_verified</th>
                            <th>email_id</th>
                            <th>email_id_number_verified</th>
                            <th>father_name</th>
                            <th>date</th>
                            <th>Designation</th>
                            <th>date_of_birth</th>
                            <th>address</th>
                            <th>identity</th>
                            <th>panCardProof</th>
                            <th>account</th>
                            <th>Activate/Deactivate</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            // console.log(data)
                            data && data.map((item, i) => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.contact_number}</td>
                                    <td>{item.full_name}</td>
                                    <td>{item.contact_number_verified}</td>
                                    <td>{item.email_id}</td>
                                    <td>{item.email_id_number_verified}</td>
                                    <td>{item.father_name}</td>
                                    <td>{item.date}</td>
                                    <td>{item.designation}</td>
                                    <td>{item.date_of_birth}</td>

                                    {/* {
                                        // console.log(data)
                                        item && item.address.map((it, i) => (
                                            <tr>
                                                <td>{it.id}</td>
                                                <td>{it.country}</td>
                                                <td>{it.state}</td>
                                                <td>{it.zip_code}</td>
                                                <tr>
                                                    <td>{it.addressProof.id}</td>
                                                    <td>{it.addressProof.address_type}</td>
                                                    <td>{it.addressProof.address_number}</td>
                                                    <td>{it.addressProof.address_number_verified}</td>
                                                </tr>
                                            </tr>
                                        ))
                                    } */}
                                    <td>ghdgsah</td>
                                    <td>ghsgch</td>
                                    <td>sghdgsa</td>
                                    <td>
                                        <Button onClick={handleShow}>Edit</Button>
                                        <Modal show={show} onHide={handleClose} animation={false}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Set Your Account</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                                            <Modal.Footer>
                                                <Button variant='primary' onClick={() => userDetails()}>Get Data</Button>
                                            <Button variant="primary" onClick={() => activate()}>
                                                    activate
                                                </Button>
                                                <Button variant="primary" onClick={() => deactivate()}>
                                                    Deactivate
                                                </Button>
                                                <Button variant="secondary" onClick={handleClose}>
                                                    Close
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        </>
    );
}

export default EmpData;