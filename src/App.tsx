import React, { useState } from 'react';
import logo from './logo.svg';
import './css/main.css';
import './App.css';

interface IBook {  
  id : number;
  subject : string;
  thumbnailURL : string;
}
function App() {
  const [book, setBook] = useState<IBook|null>();
  
  return (
    <div className='content'>
      <header>
        <span><p>UC 동화</p></span>
      </header>
      <main>
        {
          book ? <div>책컴포넌트</div>
          : <SelectBook/>
        }
      </main>
    </div>
  );
}
const SelectBook = () => {
  const BookItem = ({book} : {book : IBook}) => {
    return(
      <div className='book-item' key={book.id}>
        <img src={book.thumbnailURL}/>
        <p>{book.subject}</p>
      </div>
    )
    
  }
  const data : IBook[] = [
    {
      id : 0,
      subject : "우리는 돌멩이",
      thumbnailURL : "/source/1/thum.png"
    },
    {
      id : 1,
      subject : "우리는 돌멩이",
      thumbnailURL : "/source/1/thum.png"
    },
    {
      id : 2,
      subject : "우리는 돌멩이",
      thumbnailURL : "/source/1/thum.png"
    },
    {
      id : 3,
      subject : "우리는 돌멩이",
      thumbnailURL : "/source/1/thum.png"
    },
    {
      id : 4,
      subject : "우리는 돌멩이",
      thumbnailURL : "/source/1/thum.png"
    },
    {
      id : 5,
      subject : "우리는 돌멩이",
      thumbnailURL : "/source/1/thum.png"
    },
  ]
  return(
    <div className='book-list'>
      { data.map((_book, index)=>{
        return <BookItem key={index} book={_book}/>
      }) }
    </div>
  );
}
export default App;
