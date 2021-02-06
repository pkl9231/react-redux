import { connect } from "react-redux";
import { changeName, fetchDataFromServer } from "./actions/index";
import "./App.css";

function App(props) {
  console.log("state data", props);

  return (
    <div className="App">
      <h1>First Name: {props.firstName}</h1>
      <h1>Last Name: {props.lastName}</h1>
      <button onClick={() => props.changeNameValue("Sanjay")}>
        Change First Name
      </button>
      <button onClick={() => props.fetchDataFromServer()}>Call APi</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeNameValue: (name) => dispatch(changeName(name)),
    fetchDataFromServer: () => dispatch(fetchDataFromServer()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
