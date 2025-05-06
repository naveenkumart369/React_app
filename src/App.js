import "./styles.css";
import React from "react";
import { useState } from "react";
import useFetch from "./fetchHook";
import Typewriter from "./typeWriter";

export default function App() {
  const { data, loading, error } = useFetch(
    "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/637572"
  );
  if (loading) return <p>Loading...</p>;
  console.log("data", data);
  // const displayText = useTypewriter(data, 5000);
  return (
    <div>
      <Typewriter text={data} speed={500} />
    </div>
  );
}
