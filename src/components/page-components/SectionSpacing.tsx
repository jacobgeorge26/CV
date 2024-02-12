import * as React from "react";
import { RESUME_DATA } from "@/data/resume-data";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode
}

function SectionSpacing({ children }: Props) {
  return (
    <section className={"mx-auto w-full max-w-2xl bg-white print:space-y-4 " + (RESUME_DATA.isLocal ? 'space-y-2 ' : 'space-y-8')}>
      {children}
    </section>
  );
}

export { SectionSpacing };


