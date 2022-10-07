import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '../../state/UserContext.jsx';

export default function Auth() {
  const user = useUser();

  if (user) return <Navigate to="/"/>;

  return (<main>
    <h1>To Do</h1>
    <Outlet/>
  </main>);
}
