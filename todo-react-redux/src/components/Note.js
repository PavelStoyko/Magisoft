import React, { useContext } from "react";
import { useUpdateNote } from "../context/firebase/hooks";
import { FirebaseContext } from "../context/firebase/firebaseContext";
import { AlertContext } from "../context/alert/alertContext";

const Note = ({ note }) => {
  useUpdateNote(note);
  const alert = useContext(AlertContext);
  const { removeNote, toggleCompletedNote } = useContext(FirebaseContext);
  const completed = note.completed ? "completed" : "";

  const remove = (event, id) => {
    console.log(event);
    event.stopPropagation();
    removeNote(id)
      .then(() => {
        alert.show("Заметка была удалена", "danger");
      })
      .catch(() => {
        alert.show("Что-то пошло не так", "danger");
      });
  };
  return (
    <li className="note" onClick={() => toggleCompletedNote(note)}>
      <div className="list-group-item note">
        <div className={completed}>
          <strong>{note.title}</strong>
          <small>{note.date}</small>
        </div>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm"
          onClick={event => remove(event, note.id)}
        >
          &times;
        </button>
      </div>
    </li>
  );
};

export default Note;
