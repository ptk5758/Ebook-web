import React, { useState } from 'react';
import logo from './logo.svg';
import './css/main.css';
import './App.css';

interface IBook {  
  id : number;
  subject : string;
  thumbnailURL : string;  
  story : IPage[];
}
interface IPage {
  source : string;
}
function App() {
  const [book, setBook] = useState<IBook|null>();
  const selectBook = (_book : IBook | null) => {
    setBook(_book);
  }  
  return (
    <div className='content'>
      <header>
        <span><p onClick={()=>{selectBook(null)}}>UC 동화</p></span>
      </header>
      <main className={book ? "view-mode" : ""}>
        {
          book ? <Book _book={book}/>
          : <BookList selectBook={selectBook}/>
        }
      </main>
    </div>
  );
}


const Book = ({_book} : {_book : IBook}) => {
  const [book, setBook] = useState<IBook>(_book);  
  const [page, setPage] = useState<number>(0);
  return(
    <div className='book'>
      <img src={book.story[page].source}/>
    </div>
  );
}





const BookList = ({selectBook} : {selectBook : Function}) => {
  const BookItem = ({book} : {book : IBook}) => {
    return(
      <div className='book-item' key={book.id}>
        <img onClick={()=>{selectBook(book)}} src={book.thumbnailURL}/>
        <p>{book.subject}</p>
      </div>
    )
    
  }
  const data : IBook[] = [
    {
      id : 1,
      subject : "우리는 돌멩이",
      thumbnailURL : "/source/1/thum.png",
      story : [
        {
          source : "/source/1/page(1).png"
        }
      ]
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
