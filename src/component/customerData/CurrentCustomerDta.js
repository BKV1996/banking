import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import SignUp from '../SignUp';

const CurrentCustomerDta = () => {
    const [data, setData] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const totalPages = Math.ceil(data.length / itemsPerPage) || 1;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = data.slice(startIndex, endIndex);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: "GET",
            headers: {
                // "Authorization": `Bearer ${logToken}`,
                "Content-Type": "application/json",
            },
        }).then((response) => {
            response.json().then((data) => {
                // console.log("result", result);
                setData(data);

                // console.log("asdgsahgdghs sajdjshj", data.length)

                // console.log("id of sending", id)
            })
        })
    }, [])


    const handlePageClick = (page) => {
        setCurrentPage(page);
    };

    if (data.length === 0) {
        return <div>No data to display.</div>;
    }

    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Popover right</Popover.Header>
            <Popover.Body>
                
                <Button variant="primary">
                    activate
                </Button>
                <Button variant="primary">
                    Deactivate
                </Button>
                <Button variant="secondary">
                    Close
                </Button>
            </Popover.Body>
        </Popover>
    );


    return (
        <>
            <SignUp />
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>activate</th>
                            <th>activate</th>
                            <th>activate</th>
                            <th>activate</th>
                            <th>activate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentData.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.email}</td>
                                <td>{item.email}</td>
                                <td>{item.email}</td>
                                <td>{item.email}</td>
                                <td>{item.email}</td>


                                <td>
                                    <OverlayTrigger trigger="click" placement="top" overlay={popover}>
                                        <Button variant="success">Edit</Button>
                                    </OverlayTrigger>
                                </td>
                            </tr>
                        ))}

                        {/* {currentData.map((item) => (
                            <tr>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                            </tr>
                        ))} */}
                    </tbody>
                </table>
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
    )
}

export default CurrentCustomerDta
