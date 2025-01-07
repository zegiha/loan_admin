'use client'

import {useEffect} from "react";
import {check_login} from "@/features/api";

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
