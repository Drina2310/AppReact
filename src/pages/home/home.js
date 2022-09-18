import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import logo from '../../images/pngwing.com.png';
import './styles.scss';

export const Home = () => {
  const navigate = useNavigate();

  const onCLickButtonClick = (url) => {
    navigate(url);
  };

  return (
    <div className="home d-flex justify-content-center align-items-center">
      <section>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div>
          <Button text="A Jugar" onClick={() => onCLickButtonClick('/game')} />
        </div>
      </section>
    </div>
  );
};
