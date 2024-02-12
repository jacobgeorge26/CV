import * as React from "react";
import { RESUME_DATA } from "@/data/resume-data";

function Summary({ }) {
  return (
    <p className={"text-pretty font-mono text-sm text-muted-foreground " + (RESUME_DATA.isLocal ? 'max-w-l' : 'max-w-sm')}>
      {RESUME_DATA.about}{RESUME_DATA.isLocal && '.'}
    </p>
  );
}

export { Summary };


