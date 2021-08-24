import { gql, useQuery } from '@apollo/client';
import './styles.scss';

interface User {
  id: number;
  name: string;
}

const App = () => {
  const { data, loading, error } = useQuery(gql`
    query {
      users {
        id
        name
      }
    }
  `);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <div className="wrapper">
      {data.users.map((item: User) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

export default App;
