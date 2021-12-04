import papaparse from "papaparse";
import { useState } from "react";

const useDummyData = () => {
  const [data, setData] = useState(null);

  papaparse.parse(
    "https://raw.githubusercontent.com/plotly/datasets/master/3d-scatter.csv",
    {
      download: true,
      complete: function (results) {
        setData(results.data);
      }
    }
  );

  return data;
};

export default useDummyData;
