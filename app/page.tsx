import Header from "./components/Hero";

import Experience from "./experience/page";

import { Analytics } from "@vercel/analytics/react"


export default function Home() {
  return (
    <>
      <Header />
      <Experience />
      <Analytics />
    </>
  );
}
