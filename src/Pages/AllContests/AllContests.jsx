import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useContests from "../../Hooks/useContests";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet";
import ContestCard from "./../../Components/ContestCard/ContestCard";

const AllContests = () => {
  const categories = ["Gaming", "Business", "Medical", "Article Writing"];
  const { category } = useParams();
  const { Contests } = useContests();
  const initialIndex = categories.indexOf(category);

  const Gaming = Contests.filter((item) => item.category === "Gaming");
  const Business = Contests.filter((item) => item.category === "Business");
  const Medical = Contests.filter((item) => item.category === "Medical");
  const ArticleWriting = Contests.filter(
    (item) => item.category === "Article Writing"
  );

  const [tabIndex, setTabIndex] = useState(initialIndex);

  return (
    <div className="text-center my-20">
      <Helmet>
        <title>Bistro Boss | Shop</title>
      </Helmet>

      <div className="w-10/12 mx-auto mb-20">
        <Tabs
          className=""
          defaultIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
        >
          <TabList className="border-none text-orange-500">
            <Tab>Gaming</Tab>
            <Tab>Business</Tab>
            <Tab>Medical</Tab>
            <Tab>Article Writing</Tab>
          </TabList>
          <TabPanel>
            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  items-center justify-center my-20 gap-8">
              {Gaming?.map((item) => (
                <ContestCard item={item} key={item._id}></ContestCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid   grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center my-20 gap-8">
              {Business?.map((item) => (
                <ContestCard item={item} key={item._id}></ContestCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid   grid-cols-1 md:grid-cols-2 lg:grid-cols-3  items-center justify-center my-20 gap-8">
              {Medical?.map((item) => (
                <ContestCard item={item} key={item._id}></ContestCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid   grid-cols-1 md:grid-cols-2 lg:grid-cols-3  items-center justify-center my-20 gap-4">
              {ArticleWriting?.map((item) => (
                <ContestCard item={item} key={item._id}></ContestCard>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default AllContests;
