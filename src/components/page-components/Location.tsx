import * as React from "react";
import { RESUME_DATA } from "@/data/resume-data";
import { GlobeIcon } from "lucide-react";

function Location({ }) {
  return (
    <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
      <a
        className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
        href={RESUME_DATA.locationLink}
        target="_blank"
      >
        <GlobeIcon className="size-3" />
        {RESUME_DATA.location}
      </a>
    </p>
  );
}

export { Location };


