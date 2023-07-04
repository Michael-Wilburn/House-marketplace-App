import {app} from './config/firebase.config'

function App() {
  const data = app
  console.log(data)

  return (
    <>
   <h1>My App</h1>
    </>
  );
}

export default App;
