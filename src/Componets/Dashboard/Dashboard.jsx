import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredAddToCardList } from '../Utility/addToDB';

const Dashboard = () => {
    const [cardProduct, setCardProduct] = useState([]);
    const allProduct = useLoaderData();

    useEffect(() => {
        const StoredCardList = getStoredAddToCardList();
        const storedCardListInt = StoredCardList.map(id => parseInt(id));
        const productList = allProduct.filter(product => storedCardListInt.includes(product.product_id));
        setCardProduct(productList);
    }, [allProduct]);

    useEffect(() => {
        document.title = "Gadgets Heaven || Dashboard";
    }, []);

    return (
        <div className="p-4  w-11/12 mx-auto">
            <h1 className="text-xl font-semibold mb-4">Dashboard - Total Products: {cardProduct.length}</h1>
            <div className="space-y-4">
                {cardProduct.map((product) => (
                    <div key={product.product_id} className="flex items-center bg-white p-4 rounded-lg shadow-md">
                       
                        <div className="w-16 h-16 bg-gray-200 rounded-md mr-4">
                            <img src={product.product_image} alt="" />
                        </div>
                        
                       
                        <div className="flex-1">
                            <h2 className="text-lg font-semibold">{product.product_title}</h2>
                            <p className="text-gray-600">{product.description}</p>
                            <p className="text-gray-800 font-semibold mt-2">Price: ${product.price}</p>
                        </div>

                      
                        <button className="text-red-500 hover:text-red-700 ml-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
