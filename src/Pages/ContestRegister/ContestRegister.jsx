import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

const ContestRegister = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <Helmet>
        <title>Contest Register</title>
      </Helmet>
    </div>
  );
};

export default ContestRegister;
