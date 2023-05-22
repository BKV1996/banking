import Table from 'react-bootstrap/Table';
import SignUp from '../SignUp';
import { Button, Modal } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

function CustomerData() {
    const [data, setData] = useState("");


    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const totalPages = Math.ceil(data.length / itemsPerPage) || 1;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = data.slice(startIndex, endIndex);

    const { logToken } = useSelector((state) => state.test);
    const [data1, setData1] = useState("");
    const [access_id, setAccess_id] = useState("");
    const [password, setPassword] = useState("");
    const [user_id, setUser_id] = useState("");
    const [id, setId] = useState("");
    const [show, setShow] = useState(false);


    const getCustomerData = async () => {

        const resp = await fetch("/api/v1/auth/customer/all", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${logToken}`,
                "Content-Type": "application/json",
            },
        }).then((response) => {
            response.json().then((result) => {
                // console.log("result", result);
                setData(result);

                // console.log("asdgsahgdghs sajdjshj", data.length)

                // console.log("id of sending", id)
            })
        })
    };
    // useEffect(() => {
    //     getCustomerData();
    // }, [])

    // console.log(data)

    const handleClose = () =>
        setShow(false);
    // console.log("hello this is my id ", id)

    const handleShow = () => {
        setShow(true);
        

        // console.log("asdgsahgdghs sajdjshj", e) 
    }
    // console.log("asdgsahgdghs fgfcgfh ggsajdjshj", e)
    // console.log("id of sending", id)

    const handlePageClick = (page) => {
        setCurrentPage(page);
    };

    // if (data.length === 0) {
    //     return (
    //         <>
    //             <SignUp />
    //             <div>No data to display. Please login again.</div>
    //         </>
    //     );
    // }


    const userDetails = async () => {
        const response = await fetch(`/api/v1/privacy/ask?userid=${id}`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${logToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({

            })
        }).then((response) => {
            response.json().then((data1) => {
                // console.log("data1 of details", data1);
                setData1(data1);
                setAccess_id(data1.access_id);
                setPassword(data1.password);
                setUser_id(data1.user_id);
            })
        })
    };

    const activate = async () => {
        const response = await fetch("/api/v1/privacy/state", {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${logToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                access_id: access_id,
                password: password,
                user_id: user_id,
            })
        }).then((response) => {
            response.json().then((data) => {
                console.log(data)
            })
        })
    };


    const deactivate = async () => {
        const response = await fetch("/api/v1/privacy/state", {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${logToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                access_id: access_id,
                password: password,
                user_id: user_id,
            })
        }).then((response) => {
            response.json().then((data) => {
                console.log(data)
            })
        })
    }

    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Popover right</Popover.Header>
            <Popover.Body>
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
            </Popover.Body>
        </Popover>
    );

    return (
        <>

            <SignUp />
            <div>
                <div>
                    <Button variant="primary" onClick={(e) => getCustomerData()} >Submit</Button>
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
                            <th>Profession</th>
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
                            currentData && currentData.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.contact_number}</td>
                                    <td>{item.full_name}</td>
                                    <td>{item.contact_number_verified}</td>
                                    <td>{item.email_id}</td>
                                    <td>{item.email_id_number_verified}</td>
                                    <td>{item.father_name}</td>
                                    <td>{item.date}</td>
                                    <td>{item.profession}</td>
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
                                    <td>sghdgsa</td>
                                    <td>
                                        <OverlayTrigger trigger="click" placement="top" overlay={popover}>
                                            <Button variant="success" onClick={() => handleShow(item.id)}>Edit</Button>
                                        </OverlayTrigger>

                                        {/* <Button onClick={() => handleShow(item.id)}>Edit</Button>
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
                                        </Modal> */}
                                    </td>

                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
                {totalPages > 1 && (
                    <div>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <Button key={page} onClick={() => handlePageClick(page)}>
                                {page}
                            </Button>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

export default CustomerData;