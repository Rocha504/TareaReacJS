import logo from './logo.svg';
import './App.css';

function App() {
  
   
  const [estado, Tareas] = useState(
    JSON.parse(localStorage.getItem("estado")) || []
  );

  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    localStorage.setItem("estado", JSON.stringify(estado));
  }, [estado]);
  
  
  return (
      
  );
}

export default App;
