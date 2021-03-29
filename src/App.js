import './App.css';
import AddStudent from "./components/AddStudent";
import Students from "./components/Students"
function App() {
  return (
    <div className="container">
      <AddStudent/>
      <Students />
    </div>
  );
}

export default App;
