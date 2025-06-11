import "./App.css";
import ProductCard from "./assets/Components/MyCard";
function App() {
  return (
    <>
      <ProductCard
        name="Nasi Ayam Goreng"
        price={20000}
        image="https://www.masakapahariini.com/wp-content/uploads/2023/03/shutterstock_1949306203-500x300.jpg"
      />
    </>
  );
}

export default App;
