import React, { useState, useEffect } from 'react'
import {
    Col, Card, CardBody
} from 'reactstrap';
import UserButton from '../button/UserButton';

const UserInfo = ({ userInfo }) => {
    const [isTablet, setIsTablet] = useState(window.innerWidth < 1024);

    console.log(isTablet)

    useEffect(() => {
        window.addEventListener("resize", () => {
            console.log('resize')
            const windowCheck = window.innerWidth < 1200;
            if (isTablet !== windowCheck) setIsTablet(windowCheck);
        }, false);
    }, [isTablet]);

    return (
        <Col sm="12" className={`${isTablet ? "col-md-8 offset-md-2" : "col-md-6 offset-md-3"}`}>
            <Card key={userInfo.id} className="shadow p3 mb-5 bg-white rounded">
                <CardBody>
                    <ul className="list-style-square">
                        <li>name: {userInfo.name}</li>
                        <li>username: {userInfo.username}</li>
                        <li>email: {userInfo.email}</li>
                        <li>phone: {userInfo.phone}</li>
                        <li>company: {userInfo.company.name}</li>
                        <li>website: {userInfo.website}</li>
                        <li>address:
                                        <ul className="ml-2r">
                                <li>street: {userInfo.address.street}</li>
                                <li>suite: {userInfo.address.suite}</li>
                                <li>city: {userInfo.address.city}</li>
                                <li>zipcode: {userInfo.address.zipcode}</li>
                            </ul>
                        </li>
                    </ul>

                    <UserButton to='/' name='Back' />
                </CardBody>
            </Card>
        </Col >
    );
}

export default UserInfo;