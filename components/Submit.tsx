type SubmitProps = {
  onClick: any;
};

const Submit = ({ onClick }: SubmitProps) => {
  return (
    <button onClick={onClick} className="my-2 px-1 py-1 bg-green-200 text-sm">
      HINZUFÜGEN
    </button>
  );
};

export default Submit;
