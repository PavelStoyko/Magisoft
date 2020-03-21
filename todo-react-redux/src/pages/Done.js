import React, { useEffect, useContext } from "react";
import { FirebaseContext } from "../context/firebase/firebaseContext";
import { Loader } from "../components/Loader";
import { Notes } from "../components/Notes";

export const Done = () => {
  const { loading, notes, fetchNotes } = useContext(FirebaseContext);
  const completedNotes = notes && notes.filter(note => note.completed);

  useEffect(() => {
    fetchNotes();
    // eslint-disable-next-line
  }, []);

  const listOfTodos =
    completedNotes && completedNotes.length ? (
      <Notes notes={completedNotes} header={"Done Todos"} />
    ) : (
      <h1>There are no completed Todos</h1>
    );

  return loading ? <Loader /> : listOfTodos;
};
