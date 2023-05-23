import { useContext } from "react";
import Footer from "./Shared/Footer/Footer";
import NavBar from "./Shared/NavBar/NavBar";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";


const AddToy = () => {
  const { user } = useContext(AuthContext)

  // function to handle new toy info, and send it to the backend, and finally to the mongoDB database

  const handleAddToy = event => {
    // prevent the browser from going back to the default setting
    event.preventDefault()
    const form = event.target;
    const pictureURL = form.photoURL.value;
    const toyName = form.toyName.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = user?.email;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const availableQuantity = form.quantity.value;
    const detailDescription = form.description.value;

    const newToyDetails = {
      pictureURL, toyName, sellerName, sellerEmail, subCategory, price, rating, availableQuantity, detailDescription
    }

    // console.log('New Toy Details', newToyDetails)

    fetch('http://localhost:5000/newToyDetails', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newToyDetails)
    })
      .then(res => res.json())
      .then(data => {
        console.log('Oder Details from the backend', data)
        // show the success message
        Swal.fire({
          title: 'Success!',
          text: 'Successfully added a new toy info',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        // reset the form after the successful toy info submission
        form.reset()
      })
  }
  return (
    <div>
      <NavBar></NavBar>
      <form onSubmit={handleAddToy} className="w-1/2  ms-96 mx-10" >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <div className="form-control">
            <label className="label">
              <span className="label-text">Picture URL of the Toy</span>
            </label>
            <input type="text" placeholder="photo url" className="input input-bordered" name="photoURL" />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Toy Name</span>
            </label>
            <input type="text" placeholder="toy name" className="input input-bordered" name="toyName" />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <input type="text" placeholder="seller name" className="input input-bordered" name="sellerName" defaultValue={user?.displayName} />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Email</span>
            </label>
            <input type="email" placeholder="Email" className="input input-bordered" name="sellerEmail" defaultValue={user?.email} />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Sub Category</span>
            </label>
            <input type="text" placeholder="sub category" className="input input-bordered" name="subCategory" />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input type="text" placeholder="price" className="input input-bordered" name="price" />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input type="text" placeholder="rating" className="input input-bordered" name="rating" />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <input type="text" placeholder="available quantity" className="input input-bordered" name="quantity" />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Detail Description</span>
            </label>
            <textarea className="input input-bordered" rows={4} cols={50} placeholder="detail description" name="description" />
          </div>

        </div>
        <div className="form-control mt-6 w-full md:w-1/5 mx-auto mb-10 ">
          <button className="btn btn-error font-bold ">Add Toy</button>
        </div>
      </form>

      <Footer></Footer>

    </div>
  );
};

export default AddToy;