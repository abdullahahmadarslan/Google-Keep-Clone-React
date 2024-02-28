import './App.css';
import Header from './Header';
import NoteAdder from './NoteAdder';
import NoteDisplayer from './NoteDisplayer';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  //
  const [notesArray, setNotesArray] = useState([]);
  const addEventHandler = (dataObject) => {
    setNotesArray((previousData) => {
      return [...previousData, dataObject]
    })
  }

  // 
  const delEventHandler = (id) => {
    setNotesArray((notesArrayy) => {
      return notesArrayy.filter((currentArrayItemValue, index) => {
        return index !== id;
      });
    });

  }
  return (
    <>
      <Header />
      <NoteAdder addEventHandler={addEventHandler} />
      <div className="note-displayer-main">
        {
          notesArray.map((currentArrayItemValue, index) => {
            const { titleContent, noteContent } = currentArrayItemValue;
            return <NoteDisplayer key={index} index={index} titleValue={titleContent} noteValue={noteContent} delEventHandler={delEventHandler} />;
          })
        }
      </div>
      <Footer />
    </>

  );
}

export default App;
