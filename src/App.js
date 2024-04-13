import './App.css';
import Product from './components/Product';
import products from './data/index'

function App() {
  console.log(products)
  return (
    <div class="products flex" style={{width:'100%', maxWidth:'768px', margin:'0 auto',paddingTop:'20px'}}>
       {products.map((data,i)=>(
         <Product key={i} product = {data} />
       ))}
    </div>
  );
}

export default App;
