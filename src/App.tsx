import "./styles.css";
import React from "react";

function Render(props: any) {
  const [state, setState] = React.useState(0);
  return (
    <div>
      {props.item + ", state=" + state}
      <br />
      <button onClick={() => setState((prev) => prev + 1)}>
        Change RenderState
      </button>
    </div>
  );
}

const RenderMemo = React.memo(Render);

function Wrapper(props: { render: React.FunctionComponent; item: string }) {
  return (
    <div>
      {/* @ts-ignore */}
      <props.render item={props.item} />
    </div>
  );
}

export default function App() {
  const [state, setState] = React.useState(0);

  return (
    <div className="App">
      {/* @ts-ignore */}
      <Wrapper item="var 1" render={(props) => <Render item={props.item} />} />
      {/* @ts-ignore */}
      <Wrapper item="var 2" render={(props) => <div>{props.item}</div>} />
      {/* @ts-ignore */}
      <Wrapper item="var 3" render={Render} />
      {/* @ts-ignore */}
      <Wrapper item="var 4" render={RenderMemo} />
      {/* @ts-ignore */}
      {/* <Wrapper item="var 5" render={<Render item={"var5"} />} /> */}
      {/* @ts-ignore */}
      <Wrapper item="var 6" render={(item) => null} />

      <br />
      <br />
      {"app state = " + state}
      <br />
      <button onClick={() => setState((prev) => prev + 1)}>
        Change AppState
      </button>
    </div>
  );
}
