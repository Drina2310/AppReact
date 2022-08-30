import { useNavigate } from "react-router-dom"
import { Button } from "../components/Button/Button"

export const Home = () => {
  const navigate = useNavigate();

  const onCLickButtonClick = (url) => {
    navigate(url);
  }

  return (
    
      <Button text='MetCamp Quiz' onClick = {() => onCLickButtonClick('/game')} />
  
  )
}







