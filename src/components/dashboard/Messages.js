import React from 'react';
import moment from 'moment';

const Messages = (props) => {
    const { messages } = props;
    return (
        <div className="section">
            <br/>
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Messages</span>
                    <ul className="messages">
                        {messages && messages.map(message => {
                            if (message.reciever === "admin") {
                                return (
                                    <li key={message.id}>
                                        <span className="purple-text">
                                            {message.author} 
                                        </span>
                                        <br/>
                                        <span>
                                            {message.content}
                                        </span>
                                        <div className="grey-text note-date">
                                            {moment(message.time.toDate()).fromNow()}
                                        </div>
                                    </li>
                                )
                            }
                            else{
                                return null;
                            }
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Messages;