'use client'

import Sidebar from '@/shared/ui/layouts/Slidebar/Sidebar'
import {useEffect} from "react";
import {check_login} from "@/features/home";

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
