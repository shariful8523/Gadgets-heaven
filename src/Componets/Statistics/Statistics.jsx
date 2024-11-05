import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/public/Gadgets.json')
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);


    const chartData = products.map(product => ({
        name: product.product_title,
        price: product.price,
        rating: product.rating,
    }));

    return (

        <div>
            <h1 className='font-bold text-5xl mb-10 mt-5'>Statistics</h1>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;
