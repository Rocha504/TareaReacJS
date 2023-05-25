import logo from './logo.svg';
import './App.css';

function App() {
  
   
  const [estado, Tareas] = useState(
    JSON.parse(localStorage.getItem("estado")) || []
  );


  const [otraTarea, setOtraTarea] = useState("");

  useEffect(() => {
    localStorage.setItem("estado", JSON.stringify(estado));
  }, [estado]);

  function addTodo (prop){
    prop.preventDefault();
    Tareas([...estado, { text: otraTarea, completed: false }]);
    setOtraTarea("");
  };

  function hecha (a) {
    const newTodos = [...estado];
    newTodos[a].completed = !newTodos[a].completed;
    setTareas(newTodos);
  };
  

  
  return (
      
  );
}

export default App;
