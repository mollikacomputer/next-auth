import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session, status } = useSession();

  const liListItems = (
    <>
      <li>
        <Link href="/"> Home </Link>
      </li>
      <li>
        <Link href="/about"> About </Link>
      </li>
      <li>
        <Link href="/contact"> Contact </Link>
      </li>
      {session?.user?.email ? (
        <li>
          <Link
            href="/api/auth/signout"
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            Sign Out
          </Link>
        </li>
      ) : (
        <li>
          <Link
            href="/api/auth/signin"
            onClick={(e) => {
              e.preventDefault();
              signIn("github");
            }}
          >
            Login
          </Link>
        </li>
        
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {liListItems}
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            Company Logo
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{liListItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
