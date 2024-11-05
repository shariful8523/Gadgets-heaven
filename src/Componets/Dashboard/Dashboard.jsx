import React, { useEffect } from 'react';

const Dashboard = () => {
    useEffect(()=>{
        document.title="Gadgets heaven || Dashboard"
    })
    return (
        <div>
            <h1> i am from Dashboard</h1>
        </div>
    );
};

export default Dashboard;