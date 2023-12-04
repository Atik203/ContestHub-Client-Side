import { useContext } from "react";
import { AuthContext } from "./../../Providers/AuthProvider";
import useAxiosSecure from "./../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Helmet } from "react-helmet";
const COLORS = ["#FF0000", "#0000FF"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Profile = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [Data, setData] = useState([]);
  const [contests, setContest] = useState([]);

  useEffect(() => {
    axiosSecure
      .get(`/userStats/${user?.email}`)
      .then((res) => setContest(res.data));
  }, [axiosSecure, user.email]);

  useEffect(() => {
    axiosSecure.get(`/user/${user?.email}`).then((res) => {
      setData(res.data);
    });
  }, [axiosSecure, user.email, setData]);
  const { photo, name } = Data;
  const TotalCount = contests.length;
  const wonCount = contests.filter(
    (item) => item.Name === item.winner_name
  ).length;

  const chartData = [
    { name: "Total Attempted", value: TotalCount },
    { name: "Total Win", value: wonCount },
  ];

  const pieData = chartData.map((item) => {
    return { name: item.name, value: item.value };
  });

  return (
    <div>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <h1 className="text-3xl text-red-500  mt-10 font-bold text-center">
        My Profile
      </h1>
      <div className="flex flex-col lg:flex-row items-center justify-around gap-5 px-5 mt-5 lg:mt-16">
        <div className=" bg-slate-100 flex-grow shadow-md p-20 mx-auto rounded-lg">
          <img
            src={photo}
            alt=""
            className="rounded-full w-40 h-40 md:w-52 md:h-52"
          />
          <h1 className="text-xl text-center mt-4 mb-4 font-bold text-red-500">
            {name}
          </h1>
          <Link to={`/dashboard/profile-update`}>
            <div className="text-2xl flex items-center justify-center text-center font-bold cursor-pointer">
              <FaEdit></FaEdit>
            </div>
          </Link>
        </div>
        <div className="mx-auto flex-grow w-[500px] h-[500px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={500} height={500}>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend></Legend>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Profile;
