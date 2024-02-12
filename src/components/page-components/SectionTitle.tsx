import * as React from "react";

function SectionTitle({ isLocal, title }) {
  return (
    <h2 className={"font-bold " + (isLocal ? 'text-l ' : 'text-xl')}>{title}</h2>
  );
}

export { SectionTitle };


