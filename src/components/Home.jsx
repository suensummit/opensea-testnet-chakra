import React from "react";
import { useApiConfig } from "../hooks/config.query";

function Home() {
  const {data, isLoading} = useApiConfig();
  
  if(isLoading) return (<p>Data is Loading...</p>);
  
  return (
 		<p>{JSON.stringify(data)}</p>
  )
}

export default Home;