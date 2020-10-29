import React from 'react'
import {
    Card, CardBody,
    CardTitle, CardSubtitle, Col
} from 'reactstrap';
import UserButton from '../UserButton';

const UserCard = ({ user }) => {
    return (
        <Col className="mt-5" sm="12" md="4">
            <Card className="shadow p-3 mb-5 bg-white rounded">
                <div className="profile-name">{user.name.charAt(0)}</div>
                <CardBody>
                    <CardTitle>{user.name}</CardTitle>
                    <CardSubtitle>@{user.username}</CardSubtitle>
                    <a className="user-website" href="/">http://{user.website}</a>
                    <UserButton to={`/users/${user.id}`} name='More Details' />
                </CardBody>
            </Card>
        </Col>

    );
}

export default UserCard;