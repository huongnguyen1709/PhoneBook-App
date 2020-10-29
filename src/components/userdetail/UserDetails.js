import React from 'react'
import { useParams } from 'react-router-dom';
import {
    Container, Row, Col, Card, CardBody
} from 'reactstrap';
import UserInfo from './UserInfo';

const UserDetail = ({ users }) => {
    const { id } = useParams();

    const user = users && users.filter(user => {
        return user.id === parseInt(id)
    })

    return (
        <Container className="mt-10">
            <Row>
                {
                    user && user.map(userInfo => {
                        return <UserInfo key={userInfo.id} userInfo={userInfo} />
                    })
                }
            </Row>
        </Container>
    );
}

export default UserDetail;