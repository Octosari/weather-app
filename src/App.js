import useFetch from "./useFetch";

function App() {
  const { data } = useFetch("Kiev");
  return <div>{data.name}</div>; // this line is working only if it is commented and decommented
}

export default App;
