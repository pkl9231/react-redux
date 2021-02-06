import { connect } from "react-redux";
import { getData } from "../actions/index";

function Main(props) {
  console.log("props", props);
  return (
    <div className="App">
      <h1>First Name: {props.firstName}</h1>
      <h1>Last Name: {props.lastName}</h1>
      <button onClick={props.changeNameValue}>Change Last Names</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeNameValue: () => {
      dispatch(getData());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
