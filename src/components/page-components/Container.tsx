import * as React from "react";
import { RESUME_DATA } from "@/data/resume-data";

function Container({ children }) {
  return (
    <main className={"container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 " + (RESUME_DATA.isLocal ? 'md:p-2' : 'md:p-16')}>
      {children}
    </main>
  );
}

export { Container };


