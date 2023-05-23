import { useState, useEffect } from 'react';
import ShopCategoryCard from '../ShopCategoryCard';

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
    <div className='text-center'>
      {/* Dropdown menu for selecting car category */}
      <div className="dropdown dropdown-hover">
        <label tabIndex={0} className="btn mt-10 mb-10 me-2">Shop By Category</label>
        <select className='font-bold' onChange={handleOptionChange}>
          <option className='font-bold text-orange-700' value="">All Cars</option>
          <option className='font-bold text-orange-700' value="regularToy">Regular Cars</option>
          <option className='font-bold text-orange-700' value="sportsToy ">Sports Cars</option>
          <option className='font-bold text-orange-700' value="policeToy">Police Cars</option>
        </select>
      </div>
      {/* Display car list */}
      <div className='grid grid-cols-1 md:grid-cols-3 w-full md:max-w-6xl mx-auto gap-5'>
        {cars.map(car => <ShopCategoryCard key={car._id} car={car}></ShopCategoryCard>)}
      </div>
    </div >
  );
};

export default CategoryShop;
