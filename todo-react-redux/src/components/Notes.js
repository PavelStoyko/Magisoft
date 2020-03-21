import React, { useContext } from "react";
import Note from "./Note";
import { FirebaseContext } from "../context/firebase/firebaseContext";

export const Notes = ({ header }) => {
  const { notes } = useContext(FirebaseContext);
  return (
    <ul className="list-group notes-list">
      <li className="jumbotron">
        <div className="container">
          <h1 className="display-4">{header}</h1>
        </div>
      </li>
      {notes && notes.map(note => <Note key={note.id} note={note} />)}
    </ul>
  );
};
