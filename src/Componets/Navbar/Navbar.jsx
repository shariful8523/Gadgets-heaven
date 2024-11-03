

import image from '../../assets/banner.jpg'

const Navbar = () => {
    return (
        <div>

            {/* navbar */}
            <div className='relative'>
                <div class="bg-[#9538e2] rounded-2xl w-12/12 h-[580px]  flex flex-col items-center px-4 py-12 text-white">

                    <nav class="w-full max-w-5xl   flex justify-between items-center mb-8">
                        <div class="text-xl font-semibold">Gadget Heaven</div>
                        <ul class="flex space-x-6">
                            <li><a href="#" class="hover:text-gray-200">Home</a></li>
                            <li><a href="#" class="hover:text-gray-200">Statistics</a></li>
                            <li><a href="#" class="hover:text-gray-200">Dashboard</a></li>
                        </ul>
                        <div class="flex space-x-4">
                            <button class="text-2xl"><i class="fa-solid fa-cart-shopping"></i>
                            </button>
                            <button class="text-2xl"><i class="fa-regular fa-heart"></i></button>
                        </div>
                    </nav>
                    <div class="text-center max-w-3xl py-10 gap-y-8">
                        <h1 class="text-4xl md:text-5xl font-bold mb-4">Upgrade Your Tech
                            Accessorize with Gadget Heaven
                            Accessories</h1>
                        <p class="text-lg mb-6">Explore the latest gadgets that will take your
                            experience to the next level. From
                            smart devices to the coolest accessories, we have it all!</p>
                        <button class="bg-white text-[#9538e2] font-semibold py-2 px-6 rounded- 
                             full shadow-lg rounded-full hover:bg-gray-100">Shop Now</button>
                    </div>
                    <div class="mt-12 rounded-lg overflow-hidden shadow-xl max-w-xl">
                    </div>




                </div>
            </div>



            {/* image */}
            <div className='absolute  -mt-52 ml-[420px]'>

                <div class=" py-10 flex justify-center">
                    <div class="  p-5     rounded-lg shadow-lg overflow-hidden max-w-lg border-4 border-white">
                       <img src={image} alt="VR Headset" class="w-full h-auto rounded-xl" />
                    </div>
                </div>

            </div>

        </div>

    );
};

export default Navbar;