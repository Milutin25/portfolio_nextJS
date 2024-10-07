"use client";

import { useEffect, useState } from "react";
import { createClient } from "../lib/supabase/client";

const DisplayEmail = () => {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (data.user) {
        setUserEmail(data.user.email);
      }
    };

    fetchUser();
  }, [supabase]);

  return <div className="userEmail">{userEmail && <p>{userEmail}</p>}</div>;
};

export default DisplayEmail;
