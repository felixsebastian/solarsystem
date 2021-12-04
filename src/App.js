import styled from "styled-components";
import ScatterPlot from "./ScatterPlot";
import useDummyData from "./useDummyData";

const Viewport = styled.div`
  width: 300px;
  height: 300px;
  background-color: #222;
`;

export default function App() {
  const data = useDummyData();

  return <Viewport>{data && <ScatterPlot data={data} />}</Viewport>;
}
