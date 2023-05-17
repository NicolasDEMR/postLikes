import { useState, useReducer } from "react";

import "./App.css";
import Post from "./composantPost";

function App() {
  const [array, setArray] = useState([
    {
      title: "My rocket",
      content: "Look, I built a new rocket",
      author: "Elon Musk",
      likes: 0,
    },
    {
      title: "My rocket",
      content: "Look, I built a new rocket",
      author: "Elon Musk",
      likes: 0,
    },
  ]);

  const ajouteLikess = (key) => {
    setArray([...array], (array[key].likes += 1));
    console.log(array[0].likes);

    console.log("je marche", ajouteLikess);
  };
  const afficherArray = () => {
    return array.map((e, key) => {
      return (
        <Post
          key={key}
          title={e.title}
          content={e.content}
          author={e.author}
          likes={e.likes}
          handleClick={() => ajouteLikess(key)}
        />
      );
    });
  };

  return <div>{afficherArray()}</div>;
}

export default App;
