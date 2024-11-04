

import { NavLink } from 'react-router-dom';
import image from '../../assets/banner.jpg'

const Navbar = () => {
    return (
        <div>

            {/* navbar */}
            <div className='relative'>
                <div class="bg-[#9538e2] w-12/12 flex flex-col items-center px-4 py-5 text-white">

                    <nav class="w-full max-w-5xl   flex justify-between items-center mb-8">
                        <div class="text-xl font-semibold">Gadget Heaven</div>
                        <ul class="flex space-x-6">
                            <li> <NavLink to='/' >Home</NavLink>    </li>
                            <li> <NavLink to='/statistics' >Statistics</NavLink>   </li>
                            <li> <NavLink to='/dashboard'>Dashboard</NavLink>  </li>
                        </ul>
                        <div class="flex space-x-4">
                            <button class="text-2xl"><i class="fa-solid fa-cart-shopping"></i>
                            </button>
                            <button class="text-2xl"><i class="fa-regular fa-heart"></i></button>
                        </div>
                    </nav>
                    
                    



                </div>
            </div>



            

        </div>

    );
};

export default Navbar;