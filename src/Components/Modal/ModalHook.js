import { useState } from "react";
import { fetchMovieById } from "../../reducers/MovieSlice";

export const ModalHook = (dispatch) => {
  const [link, setLink] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (link.trim().length > 0 && link.trim() !== "") {
      const blocker = link.toString().match(/https:\/\/(:?www.)?(\w*)/);
      if (blocker !== null) {
        if (
          blocker[2] === "youtu" ||
          blocker[2] === "vimeo" ||
          blocker[2] === "youtube"
        ) {
          dispatch(fetchMovieById(link));
          setLink("");
          setError("");
        }
      }

      if (blocker === null) {
        setError("incorrect link");
        setLink("");
      }
    }
  };

  const handleChange = (e) => {
    if (e) {
      setLink(e.target.value);
    }
  };

  return { handleChange, handleSubmit, link, error };
};
