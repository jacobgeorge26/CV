import * as React from "react";
import { Button } from "@/components/ui/button";
import { MailIcon } from "lucide-react";
import { RESUME_DATA } from "@/data/resume-data";

function EmailButton({ }) {
  return (
    RESUME_DATA.contact.email ? (
      <Button
        className="size-8"
        variant="outline"
        size="icon"
        asChild
      >
        <a href={`mailto:${RESUME_DATA.contact.email}`}>
          <MailIcon className="size-4" />
        </a>
      </Button>
    ) : null
  );
}

export { EmailButton };


