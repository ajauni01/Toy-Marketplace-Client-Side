import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import NavBar from "./Shared/NavBar/NavBar";
import Footer from "./Shared/Footer/Footer";
import AllToysDetails from "./AllToysDetails";

const AllToys = () => {

  const [allToy, setAllToy] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/allToys")
      .then((res) => res.json())
      .then((data) => {
        setAllToy(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <NavBar></NavBar>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allToy.map((toy) => (
              <AllToysDetails key={toy._id} toy={toy}></AllToysDetails>
            ))}
          </tbody>
        </table>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AllToys;
