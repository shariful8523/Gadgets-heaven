import { useEffect, useState } from "react";
import GadgetsView from "../GadgetsVeiw/GadgetsView";


const Gadgets = () => {

    const [gadgets, setGadgets] = useState([]);

    useEffect(() => {
        fetch('/public/Gadgets.json')
            .then(res => res.json())
            .then(data => setGadgets(data))
    }, [])



    return (
        <div>

             

            <h1 className=' text-3xl font-bold text-center' >Explore Cutting-Edge Gadgets</h1>



            <div className="flex w-11/12 mx-auto  justify-between my-10  ">


                <div class="w-44 h-full bg-gray-100 p-4 rounded-lg">
                   
                    <button class="w-full py-2 mb-2 rounded-full bg-purple-500 text-white font-semibold">
                        All Product
                    </button>

                  
                    <button class="w-full py-2 mb-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300">
                        Laptops
                    </button>
                    <button class="w-full py-2 mb-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300">
                        Phones
                    </button>
                    <button class="w-full py-2 mb-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300">
                        Accessories
                    </button>
                    <button class="w-full py-2 mb-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300">
                        Smart Watches
                    </button>
                    <button class="w-full py-2 mb-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300">
                        MacBook
                    </button>
                    <button class="w-full py-2 mb-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300">
                        iPhone
                    </button>
                </div>

                <div className=" grid grid-cols-3 gap-10 ">
                    {
                        gadgets.map(gadgets => <GadgetsView gadgets={gadgets} > </GadgetsView>)
                    }
                </div>

            </div>





        </div>
    );
};

export default Gadgets;