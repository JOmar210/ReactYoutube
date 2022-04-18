import { Link } from 'react-router-dom';

function HomePage(){
  return(
    <div className="App"> 
      <h1>Application</h1>
      <Link to="/users">Usuarios</Link>
    </div>
  );
}

export default HomePage;