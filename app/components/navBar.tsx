import Link from "next/link";
import "@/app/components/styles.css";
import { logout } from "../pages/logout/actions";

export default function NavBar() {
  return (
    <div className="leftpart">
      <div className="leftpart_inner">
        <div className="logo" data-type="text">
          <Link href="/">
            <h3>MILUTIN</h3>
          </Link>
        </div>
        <div className="menu">
          <ul className="transition_link">
            <li className="active">
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/pages/about">About</Link>
            </li>
            <li>
              <Link href="/pages/recentWork">Recent Work</Link>
            </li>
            <li>
              <Link href="/blogs">Blog</Link>
            </li>
            <li>
              <Link href="/pages/contact">Contact</Link>
            </li>
            <li>
              <Link href="/pages/login">Login</Link>
            </li>
            <li>
              <form action={logout}>
                <button type="submit" formAction={logout}>
                  Logout
                </button>
              </form>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <p>
            &copy; 2024 <br />
            Created by Milutin Stefanovic
          </p>
        </div>
      </div>
    </div>
  );
}
