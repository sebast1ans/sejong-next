import { PropsWithChildren, useEffect, useState } from 'react'

export default function ClientOnly({children}: PropsWithChildren){
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  if(!client){
    return null;
  }

  return <>{children}</>
}
