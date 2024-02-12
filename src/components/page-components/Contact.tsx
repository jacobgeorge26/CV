import * as React from "react";
import { RESUME_DATA } from "@/data/resume-data";
import { Summary } from "@/components/page-components/Summary";
import { Title } from "@/components/page-components/Title";
import { SocialButtons } from "@/components/page-components/SocialButtons";
import { Location } from "@/components/page-components/Location";

function Contact({ }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex-1 space-y-1.5">
        <Title isLocal={RESUME_DATA.isLocal} title={RESUME_DATA.name} />
        <Summary />

        {
          (!RESUME_DATA.isLocal) &&
          <div>
            <Location />
            <SocialButtons />
          </div>
        }

      </div>
    </div>
  );
}

export { Contact };


