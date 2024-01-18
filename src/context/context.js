import React, { createContext, useContext,useEffect, useState } from 'react';
import axios from 'axios';

const cardContext = createContext({
  mock: [],
  setMock: () => {},
  create: [],
  setCreate:() => {},
  mode:[],
  setmode: () => {},
});

export const useCart = () => useContext(cardContext);

export default function CardContextProvider({ children }) {
  const iniz=[{
    id: 0,
    name: "",
    username: "",
    email: "",
    address: {
              city: ""
    },
    phone: "",
    website: "",
    company: {
            name: ""
          }
        }]
  const [mock, setMock] = useState([]);
  const [create,setCreate]=useState(iniz);
  const [mode,setmode]=useState("create")

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setMock(response.data)
      }).catch((error) => console.error("API fetching error",error));
  }, []);


  const value = {
    mock,
    setMock,
    create,
    setCreate,
    mode,
    setmode,
  };

  return <cardContext.Provider value={value}>{children}</cardContext.Provider>;
}
