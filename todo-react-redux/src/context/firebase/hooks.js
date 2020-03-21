import React, { useEffect } from "react";
import axios from "axios";

export const useUpdateNote = note => {
  const url = process.env.REACT_APP_DB_URL;

  useEffect(() => {
    const update = async () =>
      await axios.put(`${url}/notes/${note.id}.json`, note);
    update();
  }, [note]);
};
