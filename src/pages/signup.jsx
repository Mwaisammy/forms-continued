import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <form
        action="#"
        className="max-w-[600px] w-[96%] p-3 border  border-neutral-400"
      >
        <h1 className="text-center text-3xl font-medium bg-gradient-to-r from-orange-500 to-orange-800 text-white ">
          SIGNUP
        </h1>
        <div className="my-[0.5rem] ">
          <p>First name</p>
          <input
            type="text"
            placeholder="Enter first name"
            id=""
            className="w-full h-[40px] outline-none border border-neutral-300 mt-[10px] "
          />
        </div>
        <div className="my-[0.5rem] ">
          <p>Last name</p>
          <input
            type="text"
            placeholder="Enter last name"
            id=""
            className="w-full h-[40px] outline-none border border-neutral-300 mt-[10px] "
          />
        </div>
        <div className="my-[0.5rem] ">
          <p>Email</p>
          <input
            type="email"
            placeholder="Enter email"
            id=""
            className="w-full h-[40px] outline-none border border-neutral-300 mt-[10px] "
          />
        </div>
        <div className="my-[0.5rem] ">
          <p>Password</p>
          <input
            type="password"
            placeholder="Enter password"
            id=""
            className="w-full h-[40px] outline-none border border-neutral-300 mt-[10px] "
          />
        </div>

        <button
          type="submit"
          className="w-full h-[40px] text-white bg-blue-500 rounded-md"
        >
          Signup
        </button>

        <p>
          <Link to={"/signup"} className="text-blue-500">
            Have an account? Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
