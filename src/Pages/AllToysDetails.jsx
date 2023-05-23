const AllToysDetails = ({ toy }) => {
  const { toyName, subCategory, availableQuantity, price } = toy;

  return (
    <tr>
      <td>{/* Seller */}</td>
      <td>{toyName}</td>
      <td>{subCategory}</td>
      <td>{price}</td>
      <td>{availableQuantity}</td>
      <td>
        <button className="btn btn-primary">View Details</button>
      </td>
    </tr>
  );
};

export default AllToysDetails;
