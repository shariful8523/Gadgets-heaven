import image from '../../assets/stock-vector-vector-oops-symbol-133546157.jpg'
const ErrorPage = () => {

    
    return (
        <div className="flex items-center justify-center min-h-screen">
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={image}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-5xl font-bold">404</h2>
                <p>Page Not Found</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Back to Home</button>
                </div>
            </div>
        </div>
    </div>
    
    );
};

export default ErrorPage;