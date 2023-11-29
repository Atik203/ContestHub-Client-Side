import { useEffect, useState } from "react";
import Banner from "../../Components/Banner/Banner";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import ContestCard from "../../Components/ContestCard/ContestCard";

const Home = () => {
  const [contests, setContest] = useState([]);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get("/popularContest").then((res) => setContest(res.data));
  }, [axiosSecure]);

  const [items, setItem] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const handleSearch = () => {
    axiosSecure.get(`/searchContest?q=${searchQuery}`).then((res) => {
      setItem(res.data);
      setIsSearchClicked(true);
    });
  };

  const num = items.length;

  return (
    <div className="w-11/12 mx-auto">
      <Banner
        handleSearch={handleSearch}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
      ></Banner>

      {isSearchClicked &&
        (num > 0 ? (
          <div>
            <h1 className="text-3xl font-bold text-center mt-28 md:mt-20">
              Your Search Result:
            </h1>
            <div className="my-10 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
              {items?.map((item) => (
                <ContestCard item={item} key={item._id}></ContestCard>
              ))}
            </div>
          </div>
        ) : (
          <div className="mx-auto">
            <h1 className="text-3xl font-bold text-center mt-28 md:mt-20">
              No Contest Available Currently
            </h1>
          </div>
        ))}

      <h1 className="text-3xl font-bold text-center mt-28 md:mt-20">
        Discover Our Popular Contests
      </h1>
      <p className="text-center text-base p-4 md:text-xl text-gray-600 mt-4">
        Immerse yourself in a world of creativity and innovation. <br />{" "}
        Discover thrilling contests that will challenge your skills and broaden
        your horizons.
      </p>
      <div className="my-10 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
        {contests?.map((item) => (
          <ContestCard item={item} key={item._id}></ContestCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
