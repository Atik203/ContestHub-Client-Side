import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import useAxiosSecure from "./../../Hooks/useAxiosSecure";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import LeaderBoardTable from "../../Components/LeaderBoardTable/LeaderBoardTable";

const LeaderBoard = () => {
  const axiosSecure = useAxiosSecure();
  const categories = ["Gaming", "Business", "Medical", "Article Writing"];
  const category = "Gaming";
  const [leaders, setLeaders] = useState([]);
  useEffect(() => {
    axiosSecure.get("/leaderboard").then((res) => setLeaders(res.data));
  }, [axiosSecure]);

  const initialIndex = categories.indexOf(category);

  const Gaming = leaders.filter((item) => item.category === "Gaming");
  const Business = leaders.filter((item) => item.category === "Business");
  const Medical = leaders.filter((item) => item.category === "Medical");
  const ArticleWriting = leaders.filter(
    (item) => item.category === "Article Writing"
  );

  const [tabIndex, setTabIndex] = useState(initialIndex);

  return (
    <div>
      <Helmet>
        <title>LeaderBoard</title>
      </Helmet>
      <div className="w-10/12 mx-auto mb-20">
        <Tabs
          className=""
          defaultIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
        >
          <TabList className="border-none text-orange-500 my-10 mx-auto text-center">
            <Tab>Gaming</Tab>
            <Tab>Business</Tab>
            <Tab>Medical</Tab>
            <Tab>Article Writing</Tab>
          </TabList>
          <TabPanel>
            <LeaderBoardTable data={Gaming} />
          </TabPanel>
          <TabPanel>
            <LeaderBoardTable data={Business} />
          </TabPanel>
          <TabPanel>
            <LeaderBoardTable data={Medical} />
          </TabPanel>
          <TabPanel>
            <LeaderBoardTable data={ArticleWriting} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default LeaderBoard;
