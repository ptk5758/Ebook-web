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
    {
      id : 2,
      subject : "우리는 돌멩이",
      thumbnailURL : "/source/2/thum.png",
      story : [
        {
          source : "/source/2/slide1.png",
          sound : "/source/2/sound/title.wav",
        },
        {
          source : "/source/2/slide2.png",
        },
        {
          source : "/source/2/slide3.png",
        },
        {
          source : "/source/2/slide4.png",
          sound : "/source/2/sound/slide4.wav",
        },
        {
          source : "/source/2/slide5.png",
          sound : "/source/2/sound/slide5.wav",
        },
        {
          source : "/source/2/slide6.png",
          sound : "/source/2/sound/slide6.wav",
        },
        {
          source : "/source/2/slide7.png",
          sound : "/source/2/sound/slide7.wav",
        },
        {
          source : "/source/2/slide8.png",
          sound : "/source/2/sound/slide8.wav",
        },
        {
          source : "/source/2/slide9.png",
          sound : "/source/2/sound/slide9.wav",
        },
        {
          source : "/source/2/slide10.png",
          sound : "/source/2/sound/slide10.wav",
        },
        {
          source : "/source/2/slide11.png",
          sound : "/source/2/sound/slide11.wav",
        },
        {
          source : "/source/2/slide12.png",
          sound : "/source/2/sound/slide12.wav",
        },
        {
          source : "/source/2/slide13.png",
          sound : "/source/2/sound/slide13.wav",
        },
        {
          source : "/source/2/slide14.png",
          sound : "/source/2/sound/slide14.wav",
        },
        {
          source : "/source/2/slide15.png",
          sound : "/source/2/sound/slide15.wav",
        },
        {
          source : "/source/2/slide16.png",
          sound : "/source/2/sound/slide16.wav",
        },
        {
          source : "/source/2/slide17.png",
          sound : "/source/2/sound/slide17.wav",
        },
        {
          source : "/source/2/slide18.png",
        },
        {
          source : "/source/2/slide19.png",
          sound : "/source/2/sound/slide19.wav",
        },
        {
          source : "/source/2/slide20.png",
        },
      ]
    },
    {
      id : 3,
      subject : "이게 나라고?",
      thumbnailURL : "/source/3/thum.png",
      story : [
        {
          source : "/source/3/slide1.png",
        },
        {
          source : "/source/3/slide2.png",
        },
        {
          source : "/source/3/slide3.png",
        },
        {
          source : "/source/3/slide4.png",
        },
        {
          source : "/source/3/slide5.png",
        },
        {
          source : "/source/3/slide6.png",
        },
        {
          source : "/source/3/slide7.png",
        },
        {
          source : "/source/3/slide8.png",
        },
        {
          source : "/source/3/slide9.png",
        },
        {
          source : "/source/3/slide10.png",
        },
        {
          source : "/source/3/slide11.png",
        },
        {
          source : "/source/3/slide12.png",
        },
        {
          source : "/source/3/slide13.png",
        },
        {
          source : "/source/3/slide14.png",
        },
        {
          source : "/source/3/slide15.png",
        },
        {
          source : "/source/3/slide16.png",
        },
        {
          source : "/source/3/slide17.png",
        },
        {
          source : "/source/3/slide18.png",
        },
        
      ]
    },
    {
      id : 4,
      subject : "흙탕물",
      thumbnailURL : "/source/4/thum.png",
      story : [
        {
          source : "/source/4/slide1.png",
          sound : "/source/4/sound/slide1.mp3"
        },
        {
          source : "/source/4/slide2.png",
          sound : "/source/4/sound/slide2.mp3"
        },
        {
          source : "/source/4/slide3.png",
          sound : "/source/4/sound/slide3.mp3"
        },
        {
          source : "/source/4/slide4.png",
          sound : "/source/4/sound/slide4.mp3"
        },
        {
          source : "/source/4/slide5.png",
          sound : "/source/4/sound/slide5.mp3"
        },
        {
          source : "/source/4/slide6.png",
          sound : "/source/4/sound/slide6.mp3"
        },
        {
          source : "/source/4/slide7.png",
          sound : "/source/4/sound/slide7.mp3"
        },
        {
          source : "/source/4/slide8.png",
          sound : "/source/4/sound/slide8.mp3"
        },
        {
          source : "/source/4/slide9.png",
          sound : "/source/4/sound/slide9.mp3"
        },
        {
          source : "/source/4/slide10.png",
          sound : "/source/4/sound/slide10.mp3"
        },
        {
          source : "/source/4/slide11.png",
          sound : "/source/4/sound/slide11.mp3"
        },
        {
          source : "/source/4/slide12.png",
          sound : "/source/4/sound/slide12.mp3"
        },
        {
          source : "/source/4/slide13.png",
          sound : "/source/4/sound/slide13.mp3"
        },
        {
          source : "/source/4/slide14.png",
          sound : "/source/4/sound/slide14.mp3"
        },
        {
          source : "/source/4/slide15.png",
          sound : "/source/4/sound/slide15.mp3"
        },
        {
          source : "/source/4/slide16.png",
          
        },
        {
          source : "/source/4/slide17.png",          
          sound : "/source/4/sound/slide16.mp3"
        },
        {
          source : "/source/4/slide18.png",
          sound : "/source/4/sound/slide17.mp3"
        },
        
        
      ]
    },
    {
      id : 5,
      subject : "플라스틱컵 로미와 떠나는 여행",
      thumbnailURL : "/source/5/thum.png",
      story : [
        {
          source : "/source/5/slide1.png",
          sound : "/source/5/sound/slide1.wav"
        },
        {
          source : "/source/5/slide2.png",
          sound : "/source/5/sound/slide2.wav"
        },
        {
          source : "/source/5/slide3.png",
          sound : "/source/5/sound/slide3.wav"
        },
        {
          source : "/source/5/slide4.png",
          sound : "/source/5/sound/slide4.wav"
        },
        {
          source : "/source/5/slide5.png",
          sound : "/source/5/sound/slide5.wav"
        },
        {
          source : "/source/5/slide6.png",
          sound : "/source/5/sound/slide6.wav"
        },
        {
          source : "/source/5/slide7.png",
          sound : "/source/5/sound/slide7.wav"
        },
        {
          source : "/source/5/slide8.png",
          sound : "/source/5/sound/slide8.wav"
        },
        {
          source : "/source/5/slide9.png",
          sound : "/source/5/sound/slide9.wav"
        },
        {
          source : "/source/5/slide10.png",
          sound : "/source/5/sound/slide10.wav"
        },
        {
          source : "/source/5/slide11.png",
          sound : "/source/5/sound/slide11.wav"
        },
        {
          source : "/source/5/slide12.png",
          sound : "/source/5/sound/slide12.wav"
        }
        
      ]
    },
    {
      id :6,
      subject : "모두 날 싫어해",
      thumbnailURL : "/source/6/thum.png",
      story : [
        {
          source : "/source/6/slide1.png",          
        },
        {
          source : "/source/6/slide2.png",          
        },
        {
          source : "/source/6/slide3.png",          
        },
        {
          source : "/source/6/slide4.png",          
        },
        {
          source : "/source/6/slide5.png",          
        },
        {
          source : "/source/6/slide6.png",          
        },
        {
          source : "/source/6/slide7.png",          
        },
        {
          source : "/source/6/slide8.png",          
        },
        {
          source : "/source/6/slide9.png",          
        },
        {
          source : "/source/6/slide10.png",          
        },
        {
          source : "/source/6/slide11.png",          
        },
        {
          source : "/source/6/slide12.png",          
        },
        {
          source : "/source/6/slide13.png",          
        },
        {
          source : "/source/6/slide14.png",          
        },
        {
          source : "/source/6/slide15.png",          
        },
        {
          source : "/source/6/slide16.png",          
        },
        {
          source : "/source/6/slide17.png",          
        },
        {
          source : "/source/6/slide18.png",          
        },
        {
          source : "/source/6/slide19.png",          
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
