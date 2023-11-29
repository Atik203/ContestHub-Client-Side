import { useEffect, useState } from "react";

const useContests = () => {
  const [Contests, setContests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/contests")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setContests(data);
      });
  }, []);

  return { Contests, loading };
};

export default useContests;
