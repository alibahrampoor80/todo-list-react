import React from 'react';

const Message = ({ children}) => {
    return (
        <div>
          <h2> {children}</h2>
        </div>
    );
};

export default Message;