import Button from "./Button";

interface Props {
  btns: string[];
  onClick: (num: string) => void;
}
function ButtonSet({ btns, onClick }: Props) {
  return (
    <div className="grid-container">
      {btns.map((num) => (
        <Button
          key={num}
          type="btn-primary grid-item"
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
