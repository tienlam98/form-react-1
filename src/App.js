import './App.css';
import DriverController from './components/controller/DriverController';

function App() {
  return (
    <div className='App'>
      <span style={{color: "red", fontSize: 30}}>
        Thẻ đăng ký xe
      </span>
      <div style={{width: 200, margin: "0 auto"}}>
      <DriverController></DriverController>
      </div>
    </div>
  );
}

export default App;
