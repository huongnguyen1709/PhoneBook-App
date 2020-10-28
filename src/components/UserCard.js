import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col
} from 'reactstrap';

const UserCard = () => {
    return (
        <Col style={{ backgroundColor: 'yellowgreen' }} className="mt-5" sm="12" md="4">
            <Card >
                <div className="profile-name">P</div>
                <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        </Col>

    );
}

export default UserCard;