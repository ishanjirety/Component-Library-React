import './App.css';
import {Avatar,Alert} from './components'

function App() {
  return (
    <div className="App">
      <Avatar image="https://images.pexels.com/photos/5957548/pexels-photo-5957548.jpeg?cs=srgb&dl=pexels-oscar-helgstrand-5957548.jpg&fm=jpg" shape="SQUARE" borderColor="#EA3E7C"/>
      <Avatar image="https://images.pexels.com/photos/5957548/pexels-photo-5957548.jpeg?cs=srgb&dl=pexels-oscar-helgstrand-5957548.jpg&fm=jpg" shape="circle" borderColor="#EA3E7C"/>
      <Alert type="primary" text="My name is ishan jirety "/>
      <Alert type="secondary" text="My name is ishan jirety "/>
      <Alert type="success" text="My name is ishan jirety "/>
      <Alert type="danger" text="My name is ishan jirety "/>
      <Alert type="warning" text="My name is ishan jirety "/>
      <Alert type="info" text="My name is ishan jirety "/>
    </div>
  );
}

export default App;
