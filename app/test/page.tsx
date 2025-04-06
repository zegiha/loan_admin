'use client'

import {useEffect} from "react";
import {useRouter} from "next/navigation";

export default function Page() {
  // const tmp = [1, 2, 3, 4, 5]
  const router = useRouter()
  useEffect(() => {
    router.push('/')
  }, []);
  return (
    <>
      {/*<div style={{width: '100%', height: '100%', backgroundColor: 'white'}}>*/}
      {/*  haha*/}
      {/*  <Swiper pagination navigation>*/}
      {/*    {tmp.map((v, i) => (*/}
      {/*      <Typo.Display key={i}>{v}</Typo.Display>*/}
      {/*    ))}*/}
      {/*  </Swiper>*/}
      {/*</div>*/}
    </>
  )
}
