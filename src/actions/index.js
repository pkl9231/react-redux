export const ONCHANGE = "ONCHANGE";
export const GETDATA = "GETDATA";
export const FETCH_DATA = "FETCH_DATA";

// actions creater
const changeName = (name) => ({
  type: ONCHANGE,
  payload: name,
});

const getData = () => ({
  type: GETDATA,
  payload: {
    lastName: "Lohani",
    name2: "name2",
    name3: "name3",
  },
});

//this action is handle by thunk middleware
const fetchDataFromServer = () => {
  return async(dispatch) => {
    const api = await fetch("https://jsonplaceholder.typicode.com/users");
    const res = await api.json();
    dispatch({ type: FETCH_DATA, payload:res[0].name });
  };
};

export { changeName, getData, fetchDataFromServer };
