import { useState, useEffect } from 'react';

const CategoryShop = () => {
  const [cars, setCars] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    fetchToyData(selectedOption);
  }, [selectedOption]);

  const fetchToyData = async (category) => {
    try {
      let url = 'http://localhost:5000/allToyCars';
      if (category) {
        url = `http://localhost:5000/${category}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      setCars(data);
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
  };

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    console.log('SelectedValue', selectedValue)
    setSelectedOption(selectedValue);
  };

  return (
    <div>
      {/* Dropdown menu for selecting car category */}
      <div className="dropdown dropdown-hover">
        <label tabIndex={0} className="btn m-1">Shop By Category</label>
        <select onChange={handleOptionChange}>
          <option value="">All Cars</option>
          <option value="regularToy">Regular Cars</option>
          <option value="sportsToy">Sports Cars</option>
          <option value="policeToy">Police Cars</option>
        </select>
      </div>
      {/* Display car list */}
      <ul>
        {cars.map((car) => (
          // <li key={car._id}>{car.name}</li>
          <img key={car._id} src={car.picture} alt="" />
        ))}
      </ul>
    </div>
  );
};

export default CategoryShop;
