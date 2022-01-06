import TableDetail from './Table'
import { Context } from './Context'
import Form1 from './Form1'
import Submit from './Submit';


function App() {
  return (
    <Context>
      <Form1></Form1>
      <TableDetail></TableDetail>
      <Submit></Submit>
    </Context>
  );
}

export default App;
