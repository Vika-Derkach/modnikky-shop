import React from "react";
import "./contained-button.css";
interface ContainedButtonProps {
  button_text: string,
 
  onAction: any
  // onAction: (id: number | boolean) => void | SendedMassageType
  
  
}
const ContainedButton: React.FC<ContainedButtonProps> = ({ button_text, onAction }) => {
  return (
    <div >
      <button data-testid="contained-button" onClick={onAction} className="button">
        {button_text}
      </button>
    </div>
  );
};
export default ContainedButton;
