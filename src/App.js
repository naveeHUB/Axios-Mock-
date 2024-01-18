import './App.css';
import Form from './components/form';
import CartList from './components/cart-List';
function App() {
  return (
    <div className="App"> 
    <div>
      <h1>Axios</h1>
    </div>
      <div className="container boxz">
        <div className='row'>
        <div className='col-4 mx-3 my-4'>      
          <Form />
        </div>
        <div className='col-7 mx-3 my-3'>
          <CartList />
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
