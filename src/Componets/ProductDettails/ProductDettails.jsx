import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ProductDettails = () => {
    const { product_id } = useParams();
    const data = useLoaderData();
    const id = parseInt(product_id);


    const product = data.find(product => product.product_id === id);


    const { product_id: currentId, product_title, product_image, category, price, description, Specification, rating } = product;


        useEffect(()=>{
            document.title="Gadgets heaven || Productdettails"
        })


    return (
        <div className='mb-[100px] '>

            {/* prodact details containur */}

            <div>
                <div class="bg-purple-600 shadow-lg h-[350px] text-white  p-8 md:p-10 w-full">

                    <div class="text-center mb-6">
                        <h2 class="text-3xl font-bold ">Product Details</h2>
                        <p class="mt-2">
                            Explore the latest gadgets that will take your experience to the next level. <br />From smart devices to
                            the coolest accessories, we have it all!
                        </p>
                    </div>


                </div>
            </div>


            <div className=' -mt-48  '>

                <div class=" bg-slate-300 p-6 rounded-xl w-[800px] mx-auto mt-10">
                    <div class="flex gap-6 bg-white p-4 rounded-xl">
                       
                        <div class="w-40 h-60 bg-white rounded-lg">
                        <img className='mt-10' src={product_image} alt="" />
                        </div>

                    
                        <div class="flex-1">
                            <h2 class="text-lg font-semibold">{product_title}</h2>
                            <p class="text-gray-700 mt-1">Price: <span class="text-green-600 font-bold">${price}</span></p>

                            <p class="mt-1 text-xs text-green-700 bg-green-100 rounded-full px-2 inline-block">In Stock</p>

                            <p class="mt-3 text-gray-500">{description}</p>

                            <div class="mt-3">
                                <p class="font-semibold">Specification:  </p>
                                <p>
                                    {Specification}
                                </p>
                                
                            </div>

                       
                            <div class="flex items-center mt-3">
                                <p class="font-semibold">Rating:</p>
                                <div class="flex items-center ml-2">
                                  
                                    <div class="text-yellow-500 flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2l2.39 6.59H21l-5.32 4.24L17.72 20 12 15.84 6.28 20l1.03-6.17L2 8.59h6.61L12 2z" />
                                        </svg>
                                       
                                    </div>
                                    <span class="ml-2 text-gray-600">{rating}</span>
                                </div>
                            </div>

                         
                            <div class="flex items-center gap-4 mt-4">
                                <button class="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition">
                                    Add To Cart
                                </button>
                                <button class="text-gray-500 hover:text-gray-700 transition">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>



        </div>

    );
};

export default ProductDettails;
