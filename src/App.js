import styled from "styled-components";
import ScatterPlot from "./ScatterPlot";
import useDummyData from "./useDummyData";

const Viewport = styled.div`
  width: 600px;
  height: 400px;
  background-color: #222;
`;

export default function App() {
  const data = useDummyData();

  return <Viewport>{data && <ScatterPlot data={data} />}</Viewport>;
}
