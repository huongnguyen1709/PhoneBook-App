import React from 'react'
import UserCard from './UserCard'
import { Container, Row, Col } from 'reactstrap';

const Homepage = () => {
    return (
        <Container className="mt-10" style={{ backgroundColor: 'brown' }}>
            <Row>

                <UserCard />
                <UserCard />
                <UserCard />

                <UserCard />
            </Row>
        </Container>
    );
}

export default Homepage;