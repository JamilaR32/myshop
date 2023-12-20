// import logo from './logo.svg';
import "./App.css";
import myimage from "./pexels-photo-1666065.jpeg";
import { Myediting } from "./mywork";
import { products } from "./products";

function App() {
  return (
    <div className="container">
      <Myediting />
      <img src={myimage} alt="gifts" width="500px" />
      {/* <h1>{products[0].name}</h1>
      <h2>{products[0].price} KD</h2>
      <img src={products[0].image} />
      <h1>{products[1].name}</h1>
      <h2>{products[1].price} KD</h2>
      <img src={products[1].image} width="30%" /> */}
      {products.map((item) => (
        <>
          <h1>{item.name}</h1>
          <h2>{item.price}</h2>
          <img src={item.image} width="30%" />
        </>
      ))}
    </div>
  );
}

export default App;
