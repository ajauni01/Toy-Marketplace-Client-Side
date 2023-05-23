
const ShopCategoryCard = ({ car }) => {

  const { _id, picture, name, price, rating } = car;

  return (
    <div>
      <div className="card w-96 h-[400px] bg-base-100 shadow-xl">
        <figure><img src={picture} alt="Toy Car" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>

          <div className="card-actions justify-end font-bold ">
            <div className="badge badge-outline">{price}</div>
            <div className="badge badge-outline">{rating}</div>
          </div>
          <button className="btn btn-primary mt-5">View Details</button>

        </div>

      </div>

    </div>
  );
};

export default ShopCategoryCard;