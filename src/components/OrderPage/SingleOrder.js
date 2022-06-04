import React from 'react';

const SingleOrder = ({order, index}) => {
    console.log(order);
    const {serviceName, transactionId, servicePrice, email} = order
    return (
        <tr>
        <td>{index + 1}</td>
        <td>{email}</td>
        <td>{serviceName}</td>
        <td>${servicePrice}</td>
        <td>{transactionId}</td>

      </tr>
    );
};

export default SingleOrder;