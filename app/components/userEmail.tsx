"use client";

import { useEffect, useState } from "react";
import { createClient } from "../lib/supabase/client";
import { useRouter } from "next/navigation";

const UserEmail = () => {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error || !data?.user) {
        router.push("/pages/login");
      } else {
        setUserEmail(data.user.email);
      }
    };

    fetchUser();
  }, [router, supabase]);

  return <div className="userEmail">{userEmail && <p>{userEmail}</p>}</div>;
};

export default UserEmail;
