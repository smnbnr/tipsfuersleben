import Form from "components/Form";
import Link from "next/link";

const add = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full bg-gradient-to-r from-sky-400 to-cyan-300">
      <div className="flex justify-center w-11/12">
        <Form />
      </div>
      <button className="border border-black border-dotted w-11/12 h-16 flex justify-center items-center gap-2 mt-9 bg-cyan-200">
        <Link href="/">ZURÜCK</Link>
      </button>
    </div>
  );
};

export default add;
