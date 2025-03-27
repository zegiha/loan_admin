'use client'

import {useEffect} from "react";
import {check_login} from "@/features/home";
import Sidebar from "@/shared/ui/molecules/layouts/Slidebar/Sidebar";

export default function Home() {
  useEffect(() => {
    check_login()
  }, []);
  return (
    <div style={{width: '100%'}}>
      <Sidebar/>
    </div>
  );
}
