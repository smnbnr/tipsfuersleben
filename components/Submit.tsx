import { useState } from "react";

type SubmitProps = {
  onClick: any;
  addConfirm: boolean;
  showWarning: boolean;
  color: string;
};

const Submit = ({ onClick, addConfirm, showWarning, color }: SubmitProps) => {
  return (
    <div className="flex gap-3 items-center">
      <button
        onClick={onClick}
        className={
          addConfirm
            ? "my-2 px-3 py-1 bg-green-400 text-sm font-medium"
            : `my-2 px-3 py-1 ${color} text-sm`
        }
      >
        {addConfirm ? "HINZUGEFÜGT!" : "HINZUFÜGEN"}
      </button>
      {showWarning && <p className="text-red-600 font-medium">GIB ETWAS EIN</p>}
    </div>
  );
};

export default Submit;
