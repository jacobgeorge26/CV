import * as React from "react";
import { RESUME_DATA } from "@/data/resume-data";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode
}

function Container({ children }: Props) {
  return (
    <main className={"container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 " + (RESUME_DATA.isLocal ? 'md:p-2' : 'md:p-16')}>
      {children}
    </main>
  );
}

export { Container };


