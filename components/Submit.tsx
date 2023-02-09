type SubmitProps = {
  onclick: any;
};

const Submit = ({ onclick }: SubmitProps) => {
  return (
    <button
      onClick={onclick}
      type="submit"
      className="my-2 px-1 py-1 bg-green-200 text-sm"
    >
      HINZUFÜGEN
    </button>
  );
};

export default Submit;
