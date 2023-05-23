import banner from '../../../public/banner.jpeg'

const Home = () => {


  return (
    <div>

      {/* banner section */}
      <div className='max-w-7xl mx-auto '>
        <img src={banner} alt="" />
      </div>

      {/* Featured Toys */}
      <div className="stack mb-5 w-full ">
        <div className="card shadow-md bg-blue-500 text-primary-content max-w-7xl mx-auto ">
          <div className="card-body text-center">
            <h2 className="font-bold text-3xl">Featured Toys</h2>
            <p className="text-lg">
              Discover the Perfect Playmate: Explore Our Featured Toys for Endless Fun!
            </p>
          </div>
        </div>
      </div>

      {/* gallery section */}
      <div className="carousel rounded-box  w-full h-full md:w-[1200px] md:h-[500px] mx-auto">
        <div className="carousel-item w-1/2">
          <img src="https://images.pexels.com/photos/15057238/pexels-photo-15057238/free-photo-of-baby-playing-with-vintage-toy-car.jpeg?auto=compress&cs=tinysrgb&w=600" className="w-full" />
        </div>

        <div className="carousel-item w-1/2">
          <img src="https://images.pexels.com/photos/6461967/pexels-photo-6461967.jpeg?auto=compress&cs=tinysrgb&w=600" className="w-full" />
        </div>

        <div className="carousel-item w-1/2">
          <img src="https://images.pexels.com/photos/6130568/pexels-photo-6130568.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Burger" className="w-full" />
        </div>
        <div className="carousel-item w-1/2">
          <img src="https://images.pexels.com/photos/5501994/pexels-photo-5501994.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Burger" className="w-full" />
        </div>

        <div className="carousel-item w-1/2">
          <img src="https://images.pexels.com/photos/10212593/pexels-photo-10212593.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Burger" className="w-full" />
        </div>

        <div className="carousel-item w-1/2">
          <img src="https://images.pexels.com/photos/10212593/pexels-photo-10212593.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Burger" className="w-full" />
        </div>

        <div className="carousel-item w-1/2">
          <img src="https://images.pexels.com/photos/7983790/pexels-photo-7983790.jpeg?auto=compress&cs=tinysrgb&w=600" className="w-full" />
        </div>
      </div>
      {/* gallery-section-ends */}
    </div>
  );
};

export default Home;