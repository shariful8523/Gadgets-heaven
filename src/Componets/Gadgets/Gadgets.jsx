import { useEffect, useState } from "react";
import GadgetsView from "../GadgetsVeiw/GadgetsView";
import image from '../../assets/product-not-found.jpg'

const Gadgets = () => {
    const [gadgets, setGadgets] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All Product");

    useEffect(() => {
        fetch('../../../public/Gadgets.json')
            .then(res => res.json())
            .then(data => setGadgets(data))
    }, []);


    const filteredGadgets = selectedCategory === "All Product"
        ? gadgets
        : gadgets.filter(gadget => gadget.category.toLowerCase() === selectedCategory.toLowerCase());

    const getButtonClass = (category) =>
        selectedCategory === category
            ? "w-full py-2 mb-2 rounded-full bg-purple-500 text-white font-semibold"
            : "w-full py-2 mb-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300";

    return (
        <div>
            <h1 className='text-3xl font-bold text-center'>Explore Cutting-Edge Gadgets</h1>

            <div className="flex w-11/12 mx-auto justify-between my-10">
                {/* Category buttons */}
                <div className="w-44 h-full bg-gray-100 p-4 rounded-lg">
                    <button
                        onClick={() => setSelectedCategory("All Product")}
                        className={getButtonClass("All Product")}>
                        All Product
                    </button>
                    <button
                        onClick={() => setSelectedCategory("Laptop")}
                        className={getButtonClass("Laptop")}>
                        Laptops
                    </button>
                    <button
                        onClick={() => setSelectedCategory("Phone")}
                        className={getButtonClass("Phone")}>
                        Phones
                    </button>
                    <button
                        onClick={() => setSelectedCategory("Accessories")}
                        className={getButtonClass("Accessories")}>
                        Accessories
                    </button>
                    <button
                        onClick={() => setSelectedCategory("Smartwatch")}
                        className={getButtonClass("Smartwatch")}>
                        Smart Watches
                    </button>

                    <button
                        onClick={() => setSelectedCategory("Other")}
                        className={getButtonClass("Other")}>
                        Other
                    </button>
                </div>


                <div className="grid grid-cols-3 gap-10">
                    {filteredGadgets.length > 0 ? (
                        filteredGadgets.map(gadget => (
                            <GadgetsView key={gadget.product_id} gadgets={gadget} />
                        ))
                    ) : (
                        <div className="flex items-center justify-center w-[300px] h-[300px] mx-auto">
                        <img src={image} alt="" />
                    </div>
                    
                    )}
                </div>
            </div>
        </div>
    );
};

export default Gadgets;
