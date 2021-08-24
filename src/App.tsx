import { gql, useQuery } from '@apollo/client';
import './styles.scss';

const App = () => {
  const { data } = useQuery(gql`
    query {
      users {
        name
      }
    }
  `);

  console.log(data);
  return (
    <div className="wrapper">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
