import * as React from "react";
import { RESUME_DATA } from "@/data/resume-data";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "./SectionTitle";

function Education({ }) {
  return (
    <Section>
      <SectionTitle isLocal={RESUME_DATA.isLocal} title="Education" />
      {RESUME_DATA.education.map((education) => {
        return (
          <Card key={education.school}>
            <CardHeader>
              <div className="flex items-center justify-between gap-x-2 text-base">
                <h3 className="font-semibold leading-none">
                  {education.school}
                </h3>
                <div className="text-sm tabular-nums text-gray-500">
                  {education.start} - {education.end}
                </div>
              </div>
            </CardHeader>
            <CardContent className="mt-2">{education.degree}</CardContent>
          </Card>
        );
      })}
    </Section>
  );
}

export { Education };


