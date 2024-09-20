import { useState } from "react";
import styled from "src/styles/App.less";
export default function App() {
  const [count, setCount] = useState();
  return <div className={styled.App}>app</div>;
}
