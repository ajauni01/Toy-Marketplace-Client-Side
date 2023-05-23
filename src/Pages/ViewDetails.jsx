import { useLoaderData, useNavigate } from "react-router-dom";
import NavBar from "./Shared/NavBar/NavBar";
import Footer from "./Shared/Footer/Footer";


const ViewDetails = () => {

  const toyDetails = useLoaderData();


  const { picture, name, price, rating, description, color, ageRange, brand, material } = toyDetails;

  const navigate = useNavigate();
  // function to navigate the user to the home page
  const handleGoHome = () => {
    navigate('/');
  };




  return (

    <div>
      <NavBar></NavBar>
      <div className="card w-full h-full md:max-w-7xl md:max-h-7xl mx-auto bg-base-100 shadow-xl mt-20 ">
        <figure><img src={picture} alt="Car Image" /></figure>

        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">

            <div className="badge badge-primary"><p>Price: {price}</p></div>
            <div className="badge badge-secondary"> <p>Rating: {rating}</p></div>
            <div className="badge badge-secondary"> <p>Color: {color}</p></div>
            <div className="badge badge-secondary"> <p>Age: {ageRange}</p></div>
            <div className="badge badge-secondary"> <p>Brand: {brand}</p></div>
            <div className="badge badge-secondary"> <p>Material: {material}</p></div>
          </div>
          <button className="btn btn-primary text-center mt-5" onClick={handleGoHome}>
            Go Back
          </button>

        </div>
      </div>
      <Footer></Footer>

    </div>
  );
};

export default ViewDetails;