import { Link } from "react-router-dom";


const GadgetsView = ({ gadgets }) => {

    const { product_id, product_image, product_title, price } = gadgets;

    return (


        <div className="card bg-base-100 w-[300px] shadow-xl p-5">
            <figure>
                <img className=" w-[350px]"
                    src={product_image}
                    alt={product_title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{product_title}</h2>
                <p className="font-bold">Price: {price}k</p>

                <Link to={`/ProductDettails/${product_id}`}>
                    <div className="card-actions justify-start mt-5">
                        <button className="border p-3 rounded-full w-40 font-bold text-xl">View more</button>
                    </div>
                </Link>


            </div>
        </div>


    );
};

export default GadgetsView;