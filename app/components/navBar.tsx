"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import "@/app/components/styles.css";
import { createClient } from "../lib/supabase/client";

export default function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkUserSession = async () => {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user && user.id) {
        setIsLoggedIn(true);
      }
    };

    checkUserSession();
  }, []);

  const handleLogout = async () => {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();
    
    if (!error) {
    setIsLoggedIn(false)
}
  }

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
            {!isLoggedIn && (
              <li>
                <Link href="/pages/login">Login</Link>
              </li>
            )}
            {isLoggedIn && (
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            )}
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
