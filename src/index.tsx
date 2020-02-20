import * as React from "react";
import { render } from "react-dom";
import { useInView } from "react-intersection-observer";
import ScrollWrapper from "./elements/ScrollWrapper";
import Wrapper from "./elements/Wrapper";
import "./styles.css";

function App() {
  const [ref, inView] = useInView({
    threshold: 0
  });

  return (
    <ScrollWrapper inView={inView}>
      <Wrapper ref={ref}>
        <h2>Element is inside the viewport: {inView.toString()}</h2>
      </Wrapper>
    </ScrollWrapper>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
