import './App.css'
import Counter from './components/Counter'
import Timer from './components/Timer'
import TimeIsOver from './components/TimeIsOver'



function App() {


  return (
    
    <div>
      <main>
        <section>
          <Timer/>
          <TimeIsOver/>
          <Counter/>
        </section>
      </main>
    </div>
  )
}

export default App
