import "./style.css";

export default function Root(props) {
  return (
    <div className="react-div">
      <h1 className="react-header">This is a React Application</h1>
      <div className="btn">
        <button style={{ color: "red" }}>
          <a href="/header">Angular-Header</a>
        </button>
        <button style={{ color: "purple" }}>
          <a href="/dashboard">Angular-Dashboard</a>
        </button>
        {/* <button style={{ color: "greenyellow" }}>
          <a href="/vue">Vue</a>
        </button> */}
        <button style={{ color: "red" }}>
          <a href="/hero">Angular-Hero</a>
        </button>
      </div>
    </div>
  );
}
