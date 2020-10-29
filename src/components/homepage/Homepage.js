import React from 'react'
import UserCard from './UserCard'
import { Container, Row } from 'reactstrap';

const Homepage = ({ users }) => {
    return (
        <Container className="mt-10" >
            <Row>
                {
                    users && users.map(user => {
                        return <UserCard key={user.id} user={user} />
                    })
                }
            </Row>
        </Container>
    );
}

export default Homepage;