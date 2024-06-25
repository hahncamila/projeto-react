import Task from './Task';

function App() {

  const tasks = [
    'Lavar o carro', 
    'Ir no mercado', 
    'Lavar a roupa'
  ];
  return <>
    <h1>TO DO List</h1>
    {tasks.map((value) => {
      return <p><Task text={value} />;</p>
    })}
   
  </>;
}

export default App;
