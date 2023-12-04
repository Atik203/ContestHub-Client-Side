import React from "react";
import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";

const useParticipants = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: participants,
    refetch,
    isPending: dataLoading,
  } = useQuery({
    queryKey: ["all-participant"],
    queryFn: async () => {
      const res = await axiosSecure.get("/all-participant");
      console.log(res.data);
      return res.data;
    },
  });
  return [participants, refetch, dataLoading];
};

export default useParticipants;
