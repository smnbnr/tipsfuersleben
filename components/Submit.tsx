type SubmitProps = {
  onClick: any;
  addConfirm: boolean;
};

const Submit = ({ onClick, addConfirm }: SubmitProps) => {
  return (
    <button
      onClick={onClick}
      className={
        addConfirm
          ? "my-2 px-3 py-1 bg-green-300 text-sm"
          : "my-2 px-3 py-1 bg-white text-sm"
      }
    >
      {addConfirm ? "HINZUGEFÜGT!" : "HINZUFÜGEN"}
    </button>
  );
};

export default Submit;
