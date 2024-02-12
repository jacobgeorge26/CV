import * as React from "react";
import { RESUME_DATA } from "@/data/resume-data";

function Header({ }) {
  return (
    (RESUME_DATA.isLocal) &&
    <header className="mx-auto max-w-2xl space-y-2 my-4">

      <div className="row flex items-center justify-between">

        <div>
          <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
            {RESUME_DATA.contact.email}
          </p>

          <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
            {RESUME_DATA.location}
          </p>
        </div>

        <div>
          <div className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
            {RESUME_DATA.contact.social.toSorted(a => 1 - a.url.length).map(social => (
              <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
                {social.url.replace("https://", "").replace("www.", "")}
              </p>
            ))}
          </div>
        </div>

      </div>

    </header>
  );
}

export { Header };


