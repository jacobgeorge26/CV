import * as React from "react";
import { Button } from "@/components/ui/button";
import { EmailButton } from "./EmailButton";
import { RESUME_DATA } from "@/data/resume-data";

function SocialButtons({ }) {
  return (
    <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
      <EmailButton />
      {
        RESUME_DATA.contact.social.map((social) => (
          <Button
            key={social.name}
            className="size-8"
            variant="outline"
            size="icon"
            asChild
          >
            <a href={social.url}>
              <social.icon className="size-4" />
            </a>
          </Button>
        ))
      }
    </div>
  );
}

export { SocialButtons };


