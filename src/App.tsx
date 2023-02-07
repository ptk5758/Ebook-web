import React, { useEffect, useRef, useState } from 'react';
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
  sound? : string
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
  const [book, setBook] = useState<IBook>({..._book});  
  const [page, setPage] = useState<number>(0);
  const sound = useRef<HTMLAudioElement | null>(null);
  const nextPage = async () => {
    if(page + 1 >= book.story.length) return;
    if(sound.current) {
      await sound.current.pause();
    }    
    if(book.story[page + 1].sound){
      const nextSound = new Audio(book.story[page + 1].sound);
      sound.current = nextSound;
      nextSound.play()
      .catch(error => {});
    }
    setPage(page+1);
  }

  // 첫 페이지 한번만
  useEffect(()=>{
    if(book.story[page].sound){
      const nextSound = new Audio(book.story[page].sound);
      sound.current = nextSound;
      nextSound.play()
      .catch(error => {});
    }
    // 컴포넌트 비활성화 될경우
    return ()=>{
      if(sound.current) {
        sound.current.pause();
      }
    }
  }, []);
  
  return(
    <div className='book'>
      <img src={book.story[page].source} onClick={nextPage}/>
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
      subject : "고집센 도토리",
      thumbnailURL : "/source/1/thum.png",
      story : [
        {
          source : "/source/1/page(1).png",
          sound : '/source/1/sound/subject.mp3'
        },
        {
          source : "/source/1/page(2).png"
        },
        {
          source : "/source/1/page(3).png"
        },
        {
          source : "/source/1/page(4).png",
          sound : '/source/1/sound/page4.mp3'
        },
        {
          source : "/source/1/page(5).png",
          sound : '/source/1/sound/page5.mp3'
        },
        {
          source : "/source/1/page(6).png",
          sound : '/source/1/sound/page6.mp3'
        },
        {
          source : "/source/1/page(7).png"
        },
        {
          source : "/source/1/page(8).png",
          sound : '/source/1/sound/page8.mp3'
        },
        {
          source : "/source/1/page(9).png"
        },
        {
          source : "/source/1/page(10).png",
          sound : '/source/1/sound/page10.mp3'
        },
        {
          source : "/source/1/page(11).png"
        },
        {
          source : "/source/1/page(12).png",
          sound : '/source/1/sound/page12.mp3'
        },
        {
          source : "/source/1/page(13).png"
        },
        {
          source : "/source/1/page(14).png",
          sound : '/source/1/sound/page14.mp3'
        },
        {
          source : "/source/1/page(15).png",
          sound : '/source/1/sound/page15.mp3'
        },
        {
          source : "/source/1/page(16).png"
        },
        {
          source : "/source/1/page(17).png",
          sound : '/source/1/sound/page17.mp3'
        },
        {
          source : "/source/1/page(18).png",
          sound : '/source/1/sound/page18.mp3'
        },
        {
          source : "/source/1/page(19).png"
        },
        {
          source : "/source/1/page(20).png",
          sound : '/source/1/sound/page20.mp3'
        },
        {
          source : "/source/1/page(21).png"
        },
        {
          source : "/source/1/page(22).png",
          sound : '/source/1/sound/page22.mp3'
        },
        {
          source : "/source/1/page(23).png"
        },
        {
          source : "/source/1/page(24).png",
          sound : '/source/1/sound/page24.mp3'
        },
        {
          source : "/source/1/page(25).png",
          sound : '/source/1/sound/page25.mp3'
        },
        {
          source : "/source/1/page(26).png"
        },
        {
          source : "/source/1/page(27).png",
          sound : '/source/1/sound/page27.mp3'
        },
        {
          source : "/source/1/page(28).png",
          sound : '/source/1/sound/page28.mp3'
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
