import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  key: string;
  type: string;
  onPress: (id: string) => void;
}

function Button({ children, key, type, onPress }: Props) {
  return (
    <button
      onClick={() => {
        onPress(key);
      }}
      type="button"
      className={"btn " + type}
      id={key}
    >
      {children}
    </button>
  );
}

export default Button;
