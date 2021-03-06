import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

// A sentence to remember when creating custom hooks:
// If you give me a (input)
// I will give you (output)

// Custom hooks conventionally named similar to primitive
// hooks ie. useSomeDescriptiveName

// The purpose of this hook is to search videos.
// Here input is the default search term.
// Output is a list of videos and a function that
// can be used to search for a new list of videos.
const UseVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setVideos(response.data.items);
  };

  // React hooks convention is to return array with outputs
  // inside
  return [videos, search];

  // Javascript convention is to return an object that has
  // properties videos array and function to modify array
  // return { videos, onTermSubmit };
};

export default UseVideos;
