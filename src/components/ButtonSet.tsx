import Button from "./Button";

interface Props {
  btns: string[];
  onClick: (num: string) => void;
  extraType?: string;
}
function ButtonSet({ btns, onClick, extraType = "" }: Props) {
  return (
    <div className={"grid-container " + extraType}>
      {btns.map((num) => (
        <Button
          key={num}
          type="btn-primary grid-item "
          onPress={() => {
            onClick(num);
          }}
        >
          {num}
        </Button>
      ))}
    </div>
  );
}

export default ButtonSet;
