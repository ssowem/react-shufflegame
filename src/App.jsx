import { useState } from 'react';
import './App.css';
import './styles/main.scss';
import { v4 as uuidv4 } from 'uuid';

function App() {
  // const [isFlipped, setIsFlipped] = useState(false);
  const [images, setImages] = useState([
    { id: uuidv4(), emoji: '🥨', isFlipped: false },
    { id: uuidv4(), emoji: '🥨', isFlipped: false },
    { id: uuidv4(), emoji: '🍰', isFlipped: false },
    { id: uuidv4(), emoji: '🍰', isFlipped: false },
    { id: uuidv4(), emoji: '☕', isFlipped: false },
    { id: uuidv4(), emoji: '☕', isFlipped: false },
    { id: uuidv4(), emoji: '🍕', isFlipped: false },
    { id: uuidv4(), emoji: '🍕', isFlipped: false },
  ]);

  // 대기시간
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const shuffleImages = async () => {
    const newImages = [...images];

    for (let i = newImages.length - 1; i >= 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));

      [newImages[i], newImages[randomIndex]] = [
        newImages[randomIndex],
        newImages[i],
      ];

      // 랜덤으로 섞은 이미지배열을 넣어준다.
      setImages(newImages);
    }


    for (let j = 0; j < newImages.length; j++) {
      await delay(500); // 카드 뒤집하는 간격 0.5초 주기
      newImages[j].isFlipped = true;
      setImages([...newImages]);
    }

    // 뒤집힌 후 1초 대기하게 하기
    await delay(1000); 

    for (let j = newImages.length -1 ; j >= 0; j--) {
      await delay(500); // 카드 뒤집는 간격 0.5초 주기
      newImages[j].isFlipped = false;
      setImages([...newImages]);

    }

  };

  return (
    <div className="container">
      <div>
        <div>소요시간:</div>
        <div>라운드</div>
      </div>

      <div className="card-content">
        <div className="card__container">
          {images.map((image) => (
            <div
              className={`card__item ${image.isFlipped ? 'is-flipped' : ''}`}
              key={image.id}
            >
              <div className="card__front"></div>
              <div className="card__back">{image.emoji}</div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <button onClick={shuffleImages}>GAME START</button>
      </div>
    </div>
  );
}

export default App;
