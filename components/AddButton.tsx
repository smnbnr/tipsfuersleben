import Link from "next/link";

const AddButton = ({ onClick }: any) => {
  return (
    <button className="border border-dotted border-gray-900 h-16 flex justify-center items-center gap-2 w-11/12 mt-9 bg-cyan-200">
      <Link href="/add">WAS EIGENES HINZUFÜGEN</Link>
    </button>
  );
};

export default AddButton;
