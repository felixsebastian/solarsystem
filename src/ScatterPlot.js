import Plot from "react-plotly.js";
import { times } from "lodash";

const unpack = (csv, key) => {
  const index = csv[0].indexOf(key);

  if (index === -1) {
    return null;
  }

  return csv.slice(1).map((r) => r[index]);
};

const createTrace = (csv, num, color) => ({
  x: unpack(csv, "x" + num),
  y: unpack(csv, "y1"),
  z: unpack(csv, "z1"),
  mode: "markers",
  type: "scatter3d",
  marker: {
    size: 12,
    opacity: 0.8,
    line: {
      color: color,
      width: 0.5,
    },
  },
});

const ScatterPlot = ({ data }) => (
  <Plot
    data={[
      createTrace(data, 1, "rgba(217, 217, 217, 0.14)"),
      createTrace(data, 2, "rgb(204, 204, 204)"),
    ]}
    layout={{
      ...times(10, (i) => ({
        ["xaxis" + (i || "")]: {
          showgrid: false,
          zeroline: false,
        },
        ["yaxis" + (i || "")]: {
          showgrid: false,
          zeroline: false,
        },
      })),
      width: 600,
      height: 400,
      showlegend: false,
      margin: {
        l: 0,
        r: 0,
        b: 0,
        t: 0,
      },
    }}
    config={{
      scrollZoom: true,
    }}
  />
);

export default ScatterPlot;
