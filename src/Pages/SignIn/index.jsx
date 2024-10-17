import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/Auth';

function SignIn() {
  const { login,logout, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(''); 

  const handleLogin = (e) => {
    e.preventDefault(); 
    login(password, user);
    navigate('/'); 
  };
if(!isAuthenticated()) return (
     <div className="m-4">
      <h1>Create account</h1>
      <form className="" onSubmit={handleLogin}>
        <div className="mb-5">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Username</label>
          <input 
            onChange={(event) => setUser(event.target.value)} 
            type="text" 
            id="username" 
            name="username"
            className="mt-1 block w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:text-gray-400" 
            required 
          />
        </div>
    
        <div className="mb-5">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
          <input 
            onChange={(event) => setPassword(event.target.value)} 
            type="password" 
            id="password" 
            name="password" 
            className="mt-1 block w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:text-gray-400" 
            required 
          />
        </div>
        
        <button 
          type="submit" 
          className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-blue-700 dark:text-white"
        >
          Sign up
        </button>
      </form>
   
      <div className="mt-4 text-center">
        <span className="text-sm text-gray-500 dark:text-gray-300">Already have an account? </span>
        <a href="#" className="text-blue-500 hover:text-blue-600">Login</a>
      </div>
    </div>
  );
  return (
   <div className="m-4">
      <h1>Click to log out</h1>
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

export default SignIn;
