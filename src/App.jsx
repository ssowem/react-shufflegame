import { useState } from 'react'
import './App.css'
import './styles/main.scss'
function App() {
  
  const [isFlipped, setIsFlipped] = useState(false);
  const [images, setImages] = useState([
    "🥨","🥨",
    "🍰","🍰",
    "☕","☕",
    "🍕","🍕"
  ]);

  const shuffleImages = () => {

    const newImages = [...images];

    for (let i = newImages.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [newImages[i], newImages[randomIndex]] = [newImages[randomIndex], newImages[i]];
    }
  
    setImages(newImages);
    // console.log(images);
  };


  return (
    <div className="container">
      <div>
        <div>소요시간:</div>
        <div>라운드</div>
      </div>

      <div className="content">
        {images.map((image, index) => (
          <div className="content__card" key={index}>
          {image}
        </div>
        ))}
        {/* <div className="content__card">
           ❔
        </div>
        <div className="content__card">
          🥨
        </div>
        <div className="content__card"></div>
        <div className="content__card"></div>
        <div className="content__card"></div>
        <div className="content__card"></div>
        <div className="content__card"></div>
        <div className="content__card"></div>
        <div className="content__card"></div> */}
      </div>

      <div>
        <button onClick={shuffleImages}>GAME START</button>
      </div>
    </div>
  )
}

export default App
