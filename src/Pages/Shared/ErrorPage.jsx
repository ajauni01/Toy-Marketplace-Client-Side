import { useNavigate } from 'react-router-dom';
import errorImg from '../../../public/error-page.jpg';

const ErrorPage = () => {
  const navigate = useNavigate();

  // function to navigate the user to the home page
  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-7xl">
        <div>
          <img src={errorImg} alt="" />
        </div>

        <button className="btn btn-primary text-center" onClick={handleGoHome}>
          Go Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
