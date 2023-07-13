import Display from "./Display";
import ButtonSet from "./ButtonSet";

function Calculator() {
  const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const syms = ["+", "-", "×", "÷"];
  const onClick = (key: string) => {
    console.log(key);
  };
  return (
    <div className="calculator">
      <Display>Text</Display>
      <div className="flexbox">
        <ButtonSet btns={nums} onClick={onClick} />
        <ButtonSet btns={syms} onClick={onClick} />
      </div>
    </div>
  );
}

export default Calculator;
