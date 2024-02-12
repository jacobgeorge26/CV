import * as React from "react";

function Title({ isLocal, title }) {
  return (
    <h2 className={"font-bold " + (isLocal ? 'text-xl ' : 'text-2xl')}>{title}</h2>
  );
}

export { Title };


