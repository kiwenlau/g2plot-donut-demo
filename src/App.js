import React, { useEffect, useState } from "react";
import { Donut } from "@ant-design/charts";

const setTimeoutPromise = ms => new Promise(resolve => setTimeout(resolve, ms));

export default function App(props) {
  const [data, setData] = useState([]);
  const { time } = props;

  useEffect(() => {
    const fetchData = async () => {
      const res = await setTimeoutPromise(time).then(() => [
        {
          type: "Google",
          value: 25
        },
        {
          type: "Facebook",
          value: 25
        },
        {
          type: "Alibaba",
          value: 25
        },
        {
          type: "Tencent",
          value: 25
        }
      ]);
      setData(res);
    };
    fetchData();
  }, [time]);

  const config = {
    forceFit: true,
    radius: 0.8,
    data,
    angleField: "value",
    colorField: "type"
  };

  return (
    <div className="App">
      <Donut {...config} />
    </div>
  );
}
