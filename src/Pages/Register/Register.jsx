import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";

const Register = () => {


  const {createUser}= useContext(AuthContext);


    const handleRegister = e =>{
        e.preventDefault();
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        // console.log(email,password)

        // there is a other way lets see how it is 
        const form = new FormData(e.currentTarget);
        const Name = form.get('Name');
        const Photo = form.get('Photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(Name,Photo,email,password)


        // CREATING USER

        createUser(email,password)
        .then(res=>{
          console.log(res.user)
        })
        .catch(err=>{
          console.log(err.message4)
        })
    }
    return (
        <div>
      <Navbar></Navbar>
      <div>
        <h2 className="text-3xl text-center">This is Register</h2>

        <form onSubmit={handleRegister}
         className="md:w-1/3 mx-auto lg:w-1/2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              name="Name"
              placeholder="Your name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input
              type="text"
              name="Photo"
              placeholder="Photo Url"
              className="input input-bordered"
              required
            />
          </div>
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
            <button  type="submit" className="btn btn-primary">Register</button>
          </div>
        </form>
        <p  className="text-center mt-4">Already have an account <Link className="font-semibold text-blue-700" to='/login'>Login</Link></p>
      </div>
    </div>
    );
};

export default Register;