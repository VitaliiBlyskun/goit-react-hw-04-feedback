import React from 'react';
import { Message } from './Message.styled';

const Notification = ( {message} ) => {
    return (
        <Message>{message}</Message>
    )
}

export default Notification;
