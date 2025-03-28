'use client'

import {SidebarLayout} from '@/shared/ui/molecules'
import {LoanCompany} from '@/widgets/home'
import {useEffect} from "react";
import {check_login} from "@/features/home";

export default function Home() {
  useEffect(() => {
    check_login()
  }, []);
  return (
    <SidebarLayout>
      <LoanCompany/>
    </SidebarLayout>
  );
}
