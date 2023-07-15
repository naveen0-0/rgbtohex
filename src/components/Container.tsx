import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Container = ({ children }: Props) => {
  return <div className="max-w-[1500px] mx-auto">{children}</div>;
};

export default Container;
