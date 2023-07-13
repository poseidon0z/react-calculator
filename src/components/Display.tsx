import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Display({ children }: Props) {
  return <div className="display">{children}</div>;
}

export default Display;
