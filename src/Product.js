import "./App.css";

function Product({ daftarProduct }) {
  return (
    <div>
      <p>Ini Component Product Item</p>
      {daftarProduct.map((item) => {
        return <li>{item.Product}</li>;
      })}
    </div>
  );
}

export default Product;