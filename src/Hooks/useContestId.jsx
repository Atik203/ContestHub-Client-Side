import { useState } from "react";

const useContestId = () => {
  const [prevContestId, setPrevContestId] = useState(null);

  const generateContestId = () => {
    let newContestId = Math.floor(Math.random() * (999 - 100 + 1) + 100);

    if (newContestId === prevContestId) {
      newContestId += 1;
    }
    setPrevContestId(newContestId);
    return newContestId;
  };

  return generateContestId;
};

export default useContestId;
