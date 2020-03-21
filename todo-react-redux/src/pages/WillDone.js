import React, { useEffect, useContext } from "react";
import { FirebaseContext } from "../context/firebase/firebaseContext";
import { Loader } from "../components/Loader";
import { Notes } from "../components/Notes";

export const WillDone = () => {
  const { loading, notes, fetchNotes } = useContext(FirebaseContext);
  const onWorkNotes = notes && notes.filter(note => !note.completed);
  useEffect(() => {
    fetchNotes();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Notes notes={onWorkNotes} header={"Will be done"} />
      )}
    </>
  );
};
