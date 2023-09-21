import { useNavigate } from "react-router-dom";
import { useSession } from "../features/session/SessionContext";

const Dashboard = () => {
    const navigate = useNavigate();
    const { logout } = useSession();

    const onClick =  async () => {
      try {
        await logout();
        navigate("/");
      } catch (error) {
        console.error(error);
        throw error;
      }
    };

    return (
      <div className='dashboard'>
        <button onClick={onClick}>LOGOUT</button>
      </div>
    );
};

export default Dashboard;