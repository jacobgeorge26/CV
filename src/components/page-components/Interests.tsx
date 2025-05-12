import * as React from "react";
import { RESUME_DATA } from "@/data/resume-data";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "./SectionTitle";

function Interests({ }) {
  return (
    RESUME_DATA.isLocal
      ?
      <div className="flex flex-wrap gap-1 justify-center">
        {
          RESUME_DATA.interests.map((interest) => {
            return <b className="text-xs mx-2" key={interest}>{interest}</b>;
          })
        }
      </div >
      :
      <Section>
        <SectionTitle isLocal={false} title="Interests" />
        <div className="flex flex-wrap gap-1">
          {RESUME_DATA.interests.map((interest) => {
            return <Badge variant="secondary" key={interest}>{interest}</Badge>;
          })}
        </div>
      </Section>
  )
}


export { Interests };


