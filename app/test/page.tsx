'use client'

import {useEffect, useState} from "react";

export default function Page() {
  const [t, st] = useState<boolean>(false)
  return <>
    <button onClick={() => st(p => !p)}>tlqkf</button>
    {t ? <Un/> : <></>}
  </>
}

function Un() {
  useEffect(() => {
    console.log('mount')
    return () => {
      console.log('unmount')
    }
  }, []);

  return <div style={{width: 200, height: 200, backgroundColor: 'red'}}></div>
}