import { useState, useEffect } from 'react';
import './styles.css';

import getArticles from './utilities/getArticles';
import Button from './components/Button';
import Header from './components/Header';

export default function App() {
  const [numOfArticles, setNumOfArticles] = useState(4);
  const [currentArticles, setCurrentArticles] = useState([]);

  useEffect(() => {
   
    setCurrentArticles(getArticles(numOfArticles));
  }, [numOfArticles]); 

  return (
    <div className='wrapper'>
      <Header />
      <main>
        <ul>
        
          {currentArticles.map((article, index) => (
            <li key={index} className='article'>
              <a href={article.link} target='_blank' rel='noopener noreferrer'>
                {article.title}
              </a>
            </li>
          ))}
        </ul>
        <Button
          numOfArticles={numOfArticles}
          setCurrentArticles={setCurrentArticles}
        />
      </main>
    </div>
  );
}
