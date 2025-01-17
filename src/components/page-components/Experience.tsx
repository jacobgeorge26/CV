import * as React from "react";
import { RESUME_DATA } from "@/data/resume-data";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { SectionTitle } from "./SectionTitle";

function Experience({ }) {
  return (
    <Section>
      <SectionTitle isLocal={RESUME_DATA.isLocal} title="Work Experience" />
      {RESUME_DATA.work.map((work) => {
        return (
          <Card key={work.company}>
            <CardHeader>
              <div className="flex items-center justify-between gap-x-2 text-base">
                <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                  <a className="hover:underline" href={work.link}>
                    {work.company}
                  </a>

                  <span className="inline-flex gap-x-1">
                    {work.badges.map((badge) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-xs"
                        key={badge}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                </h3>
                <div className="text-sm tabular-nums text-gray-500">
                  {work.start} - {work.end}
                </div>
              </div>

              <h4 className="font-mono text-sm leading-none">
                {work.title}
              </h4>
            </CardHeader>
            <CardContent className="mt-2 text-xs">
              {work.description}
              <div>
                {work.highlights.map((highlight => {
                  return <li className="mt-1" key={highlight}>{highlight}</li>
                }))}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </Section>
  );
}

export { Experience };


