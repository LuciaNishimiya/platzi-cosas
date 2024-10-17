import { useContext } from 'react';
import { AuthContext } from '../../Context/Auth';
function MyAccount() {
  const { logout,authData } = useContext(AuthContext);
  return (
    <div className="m-4">
      <h1>My Account</h1>
      <p>Username: {authData.username}</p>
      <p>Click to log out</p>
        <button 
        onClick={()=> logout()}
          type="submit" 
          className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-blue-700 dark:text-white"
        >
            log out  
        </button>
    </div>
  );
}

export default MyAccount