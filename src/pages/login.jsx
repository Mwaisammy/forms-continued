import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "ACCESS GRANTED",
      confirmButtonText: "OK",
    }).then(() => {
      navigate("/users");
    });
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <form
        action="#"
        className="max-w-[600px] w-[96%] p-3 border  border-neutral-400"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center text-3xl font-medium bg-gradient-to-r from-orange-500 to-orange-800 text-white ">
          LOGIN
        </h1>
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
        <p>
          <Link className="text-blue-600 ">Forgot password?</Link>
        </p>

        <button
          type="submit"
          className="w-full h-[40px] text-white bg-blue-500 rounded-md"
        >
          Login
        </button>

        <p>
          <Link to={"/signup"} className="text-blue-500">
            Don't have an account?
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
