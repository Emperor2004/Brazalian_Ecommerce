// frontend/src/pages/CustomerPage.jsx
import React from 'react';
import CustomerList from '../components/customerList.jsx';

const CustomerPage = () => {
    return (
        <div>
            <h1>Customer Management</h1>
            <CustomerList />
        </div>
    );
};

export default CustomerPage;
