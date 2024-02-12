import * as React from "react";
import { RESUME_DATA } from "@/data/resume-data";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "./SectionTitle";

function About({ }) {
  return (
    !RESUME_DATA.isLocal &&
    <Section>
      <SectionTitle isLocal={false} title="About" />
      <p className="text-pretty font-mono text-sm text-muted-foreground">
        {RESUME_DATA.summary}
      </p>
    </Section>
  );
}

export { About };


