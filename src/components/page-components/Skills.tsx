import * as React from "react";
import { RESUME_DATA } from "@/data/resume-data";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { SectionTitle } from "./SectionTitle";

function Skills({ }) {
  return (
    RESUME_DATA.isLocal
      ?
      <div className="flex flex-wrap gap-1 justify-center">
        {
          RESUME_DATA.skills.map((skill) => {
            return <b className="text-xs mx-2">{skill}</b>;
          })
        }
      </div >
      :
      <Section>
        <SectionTitle isLocal={false} title="Skills" />
        <div className="flex flex-wrap gap-1">
          {RESUME_DATA.skills.map((skill) => {
            return <Badge key={skill}>{skill}</Badge>;
          })}
        </div>
      </Section>
  )
}

export { Skills };
