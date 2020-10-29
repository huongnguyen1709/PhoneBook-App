import React from 'react'
import UserCard from './UserCard'
import { Container, Row } from 'reactstrap';
import Footer from '../footer/Footer';

const Homepage = ({ users }) => {
    return (
        <div>
            <Container className="mt-10" >
                <Row>
                    {
                        users && users.map(user => {
                            return <UserCard key={user.id} user={user} />
                        })
                    }
                </Row>
            </Container>
            <Footer />
        </div>
    );
}

export default Homepage;