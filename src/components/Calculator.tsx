import Display from "./Display";
import ButtonSet from "./ButtonSet";
import { useState } from "react";

function Calculator() {
  const nums = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"];
  const syms = ["÷", "×", "-", "C", "+", "="];

  const [expression, setExpression] = useState("");

  const onClick = (key: string) => {
    if (key != "=" && key != "C") {
      setExpression(expression + key);
    } else if (key == "C") {
      setExpression("");
    } else {
      const exp = expression.replace("×", "*").replace("÷", "/");
      const ans = eval(exp);
      setExpression(expression + " = " + ans);
      console.log("calculated " + exp + " to be " + ans);
    }
  };

  return (
    <div className="calculator">
      <Display>{expression == "" ? "Click buttons" : expression}</Display>
      <div className="flexbox">
        <ButtonSet btns={nums} onClick={onClick} />
        <ButtonSet btns={syms} onClick={onClick} extraType="colflex" />
      </div>
    </div>
  );
}

export default Calculator;
