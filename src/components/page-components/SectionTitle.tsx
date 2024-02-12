import * as React from "react";

interface Props {
  isLocal?: boolean,
  title?: string
}

function SectionTitle({ isLocal, title }: Props) {
  return (
    <h2 className={"font-bold " + (isLocal ? 'text-l ' : 'text-xl')}>{title}</h2>
  );
}

export { SectionTitle };


