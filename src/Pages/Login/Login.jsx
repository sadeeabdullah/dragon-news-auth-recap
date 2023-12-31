import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
 const {LogIn}=useContext(AuthContext);
 const location = useLocation();
 console.log('location in the login  page',location)
 const Navigate = useNavigate();
    const handleLogin = e =>{
        e.preventDefault();
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        // console.log(email,password)

        // there is a other way lets see how it is 
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        LogIn(email,password)
        .then(res=>{
          console.log(res)
          Navigate(location?.state ? location.state : '/')
        })
        .catch(err=>console.log(err))
    }






  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h2 className="text-3xl text-center">This is Login</h2>

        <form onSubmit={handleLogin}
         className="md:w-1/3 mx-auto lg:w-1/2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button  type="submit" className="btn btn-primary">Login</button>
          </div>
        </form>
        <p  className="text-center mt-4">Do not have an account <Link className="font-semibold text-blue-700" to='/register'>Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
