import Hello from "./assets/Hello"
import Contact from "./assets/Contact"
import Hello from "./assets/Hello"

function App() {
  const helloData = [
    { name : 'join', message: 'How are you?' },
    { name : "pual", message: 'How are you?' }
  ];
  return (
    <div className="App">
      <Counter />
      {helloData.map((data, index) => (
        <Hello key={index} name={data.name} message={data.message} />
      ) )}

      <Contact email="Anirach@gmail.com" phone= "0807320731" />
    </div>
  )
}

export default App
