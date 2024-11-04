import React from 'react';
import Gadgets from '../Gadgets/Gadgets';
import image from '../../assets/banner.jpg'

const Home = () => {
    return (
        <div>
                  
                 <div>

                 <div class=" bg-[#9538e2] h-[500px] text-white mx-auto text-center  py-10 gap-y-8">
                 <h1 class="text-4xl md:text-5xl mx-auto w-[900px] mb-7 font-bold mb-4">Upgrade Your Tech
                            Accessorize with Gadget Heaven
                            Accessories</h1>
                        <p class="text-lg w-[800px] mx-auto  mb-6">Explore the latest gadgets that will take your
                            experience to the next level. From
                            smart devices to the coolest accessories, we have it all!</p>

                        <button class="bg-white text-[#9538e2] font-semibold py-2 px-6 rounded- 
                             full shadow-lg rounded-full hover:bg-gray-100">Shop Now</button>
                  
                 </div>

                 <div className='absolute  -mt-52 ml-[420px]'>
                    <div class=" py-10 flex justify-center">
                    <div class="  p-5     rounded-lg shadow-lg overflow-hidden max-w-lg border-4 border-white">
                       <img src={image} alt="VR Headset" class="w-full h-auto rounded-xl" />
                    </div>
                </div>



                 </div>


                 </div>




            <div>
            <div className='w-12/12 mt-72 mb-60'>
            <Gadgets></Gadgets>
             </div>
            </div>
        </div>
    );
};

export default Home;