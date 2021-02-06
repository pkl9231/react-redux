export const fetchName = async () => {
    const api = await fetch("https://jsonplaceholder.typicode.com/users");
    const res = await api.json();
    return res[0].name
  };
