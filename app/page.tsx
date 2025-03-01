'use client'

import {useEffect} from "react";
import {check_login} from "@/features/home";

export default function Home() {
  useEffect(() => {
    check_login()
  }, []);
  return (
    <div>
      testa
    </div>
  );
}
