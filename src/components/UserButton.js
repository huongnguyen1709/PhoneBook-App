import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap';


const UserButton = ({ to, name }) => {
    return (
        <Link to={to}>
            <Button color="primary" size="lg">{name}</Button>
        </Link>

    );
}

export default UserButton;