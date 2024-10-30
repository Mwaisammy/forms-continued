import { Link } from "react-router-dom";




function UserManagement() {
  const users = [
    {
      fname: "Goefrey",
      lname: "Kariuki",
      email: "geofreykariuki@gmail.com",
    },
    {
      fname: "Ziporrah",
      lname: "Gershon",
      email: "abishai@gmail.com",
    },
    {
      fname: "Kelvin",
      lname: "Mbuthia",
      email: "mbuthia@gmail.com",
    },
    {
      fname: "Doreen",
      lname: "Mwende",
      email: "mwende@gmail.com",
    },
  ];
  return (
    <div className="flex w-full h-screen justify-center items-center ">
      <div className="w-full px-[2%]">
        <table className="w-[100%] mx-auto border border-neutral-300 ">
          <thead className="bg-black text-white ">
            <tr>
              <td className="py-[0.5rem] px-[1rem]">First Name</td>
              <td className="py-[0.5rem] px-[1rem]">Last Name</td>
              <td className="py-[0.5rem] px-[1rem]">Email</td>
              <td className="py-[0.5rem] px-[1rem]">Edit</td>
              <td className="py-[0.5rem] px-[1rem]">Delete</td>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border-b border-neutral-500">
                <td className="py-[0.5rem] px-[1rem]">{user.fname}</td>
                <td className="py-[0.5rem] px-[1rem]">{user.lname}</td>
                <td className="py-[0.5rem] px-[1rem]">{user.email}</td>
                <td className="py-[0.5rem] px-[1rem]">
                  <button className="bg-emerald-500 text-white px-[1rem] py-[0.5rem] rounded-md">
                    Edit
                  </button>
                </td>
                <td className="py-[0.5rem] px-[1rem]">
                  <button className="bg-rose-500 text-white px-[1rem] py-[0.5rem] rounded-md">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Link to={"/"} className="text-blue-500 text-center">
          Logout?
        </Link>
      </div>
    </div>
  );
}

export default UserManagement;
