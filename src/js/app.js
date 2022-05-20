require("file-loader?name=[name].[ext]!../index.html");
import Calculator from "./components/Calculator";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { version: React.version };
  }

  render() {
    return (
      <div className="page-wrap">
        <Calculator />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
