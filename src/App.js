import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  function hello()
  {
     toast("Wow so easy!");

}
  return (
    <div className="App">
              <ToastContainer />
      <button type='submit' onClick={hello }>submit</button>
    </div>
  );
}

export default App;
