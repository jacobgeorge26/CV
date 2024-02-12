import * as React from "react";

interface Props {
  isLocal?: boolean,
  title?: string
}

function Title({ isLocal, title }: Props) {
  return (
    <h2 className={"font-bold " + (isLocal ? 'text-xl ' : 'text-2xl')}>{title}</h2>
  );
}

export { Title };


