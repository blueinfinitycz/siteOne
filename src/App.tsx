import React, {useState } from 'react'
import {css, cx} from 'emotion'
import GreenField from './assets/greenField.jpg'
import AliceInWonderland from './assets/aliceInWonderland.jpg'
import SunBehindSky from './assets/sunBehindSky.jpg'
import Waterfall from './assets/waterfall.jpg'

type HandlersProps = {
  onClick:(str:string | number) => void;
  data: string[];
  currentImage:number;
}

const handlersContainer = cx(
  'carousel__container--handlers',
  css`
    display:flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: #ffcc00;

    div {
      display: flex;
      justify-content: space-around;
      width: inherit;
    }
    
    button {
      width: 50px;
      background-color: #cc00ff;
      &:hover {
        cursor: pointer;
       }
    }
  `
)

const carouselContainer = cx(
  'carousel__container',
  css`
    display: flex;
    flex-direction:column;
    align-items:center;
    margin: auto;
    width: 992px;
    height: 550px;
    .carousel__container--content {
      width: 100%;
      height:90%;
      overFlow: hidden;
      }
    }
  `
)

const Handlers = ({onClick,data, currentImage}: HandlersProps) => {
  return(
    <div className={handlersContainer}>
      <form>
        {
          data.map((item,index) =>
              <label>
                <input type="radio" value={index} onChange={() => onClick(index)} checked={index === currentImage ? true : false} />{index+1}
              </label>
            )
        }
      </form>
      <div>
        <button onClick={() => onClick("left")} id="leftArrow">🡐</button>
        <button onClick={() => onClick("right")} id="rightArrow">🡒</button>
      </div>
    </div>
  )
}

const App = () => {
const [currentImage, setCurrentImage] = useState(0);
 
const imgArr = [`${GreenField}`,`${AliceInWonderland}`,`${SunBehindSky}`,`${Waterfall}`]

 const handlerOnClick = (e:any) => {

    switch(true){
      case (e === "left") : currentImage>0 ? setCurrentImage(currentImage-1) : setCurrentImage(imgArr.length-1);break;
      case (e === "right") : (currentImage<imgArr.length-1) ? setCurrentImage(currentImage+1) : setCurrentImage(0); break;
      case (typeof e === "number") : setCurrentImage(e);break;
    }
  }
   
  return(
    <div className={carouselContainer}>
      <div className="carousel__container--content">
        {
          <img className="exist" src={imgArr[currentImage]} alt="nature" />
        }
        
      </div>
      {
        <Handlers onClick={handlerOnClick} data={imgArr} currentImage={currentImage}  />
      }
    </div>
  )
}

export default App;
