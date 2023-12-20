// import logo from './logo.svg';
import "./App.css";
import myimage from "./pexels-photo-1666065.jpeg";
import { Myediting } from "./mywork";

function App() {
  return (
    <div className="container">
      <Myediting />
      <img src={myimage} alt="gifts" width="500px" />
    </div>
  );
}

export default App;
