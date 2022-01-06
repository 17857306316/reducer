import TableDetail from './Table'
import { Context } from './Context'
import Form1 from './Form1'
import Submit from './Submit';
import Form2 from './Form2';


function App() {
  return (
    <Context>
      <Form1></Form1>
      <TableDetail></TableDetail>
      <Submit></Submit>
      <Form2></Form2>
    </Context>
  );
}

export default App;
