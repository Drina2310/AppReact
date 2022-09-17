import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import './styles.scss';

export const Home = () => {
  const navigate = useNavigate();

  const onCLickButtonClick = (url) => {
    navigate(url);
  };

  return (
    <section className="home d-flex justify-content-center align-items-end">
      <div className="d-flex flex-column">
        <Button text="A Jugar" onClick={() => onCLickButtonClick('/game')} />
      </div>
    </section>
  );
};
