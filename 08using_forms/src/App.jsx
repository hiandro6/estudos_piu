import './App.css'
import FirstForm from './components/FIrstForm'
import FormSelect from './components/FormSelect'
import FormState from './components/FormState'
function App() {

  return (
    <>
      <h2>primeiro form:</h2>
      <FirstForm/>

      <h2>com select:</h2>
      <FormSelect/>

      <h2>use state:</h2>
      <FormState/>
    </>
  )
}

export default App
