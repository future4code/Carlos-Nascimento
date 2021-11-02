import React from "react";
import { createContext, useState, useContext } from "react";
import axios from "axios";

const DataContext = createContext();

export default function HandleDataContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [matchStamp, setMatchStamp] = useState(false);
  const [isOver, setisOver] = useState(false);
  const [matches, setMatches] = useState([]);
  const [noMatches, setNoMatches] = useState(false);
  const [reload, setReload] = useState(true);

  const getMatches = async () => {
    setLoading(true);
    await axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/carlos-nascimento/matches"
      )
      .then((res) => {
        setMatches(res.data.matches);
        matches.length === 0 && setNoMatches(true);
        setLoading(false);
      });
  };

  const resetMatches = async () => {
    setLoading(true);
    await axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/carlos-nascimento/clear"
      )
      .then((res) => {
        setReload(!reload);
        setLoading(false);
      });
  };

  const handleMatch = () => {
    setMatchStamp(true);
    setTimeout(() => {
      getData();
    }, 3000);
  };

  const handleNotMatch = () => {
    getData();
  };

  async function getData() {
    setLoading(true);
    setMatchStamp(false);
    await axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/carlos-nascimento/person"
      )
      .then((resp) => {
        setUser({ ...resp.data.profile });
        resp.data.profile === null && setisOver(true);
        setLoading(false);
      });
  }

  async function pichPerson() {
    await axios(
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/carlos-nascimento/choose-person",
      {
        method: "post",
        data: {
          id: `${user.id}`,
          choice: true,
        },
      }
    ).then((res) => {
      res.data.isMatch === true ? handleMatch() : handleNotMatch();
    });
  }

  return (
    <DataContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        matchStamp,
        setMatchStamp,
        isOver,
        setisOver,
        handleMatch,
        handleNotMatch,
        getData,
        pichPerson,
        matches,
        setMatches,
        noMatches,
        setNoMatches,
        reload,
        setReload,
        getMatches,
        resetMatches,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData(){
    const context = useContext(DataContext)
    const {
        user,
        setUser,
        loading,
        setLoading,
        matchStamp,
        setMatchStamp,
        isOver,
        setisOver,
        handleMatch,
        handleNotMatch,
        getData,
        pichPerson,
        matches,
        setMatches,
        noMatches,
        setNoMatches,
        reload,
        setReload,
        getMatches,
        resetMatches,
    } = context

    return{
        user,
        setUser,
        loading,
        setLoading,
        matchStamp,
        setMatchStamp,
        isOver,
        setisOver,
        handleMatch,
        handleNotMatch,
        getData,
        pichPerson,
        matches,
        setMatches,
        noMatches,
        setNoMatches,
        reload,
        setReload,
        getMatches,
        resetMatches,
    }
}
