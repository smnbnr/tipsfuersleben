import { useState, ChangeEvent } from "react";
import Submit from "./Submit";

const Form = () => {
  const [userinput1, setUserInput1] = useState<string[]>([""]);
  const [userinput2, setUserInput2] = useState<string[]>([""]);
  const [userinput3, setUserInput3] = useState<string[]>([""]);
  const submitHandler = (e: any) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  return (
    <div className="flex flex-col w-full">
      <div className="relative focus-within:z-10 focus-within:border-green-200 focus-within:ring-1 focus-within:ring-green-200">
        <label
          htmlFor="input1"
          className="mt-3 block font-medium text-xl text-gray-900"
        >
          ERSTER TEIL
        </label>

        <input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setUserInput1(e.target.value)
          }
          type="text"
          name="input1"
          id="input1"
          className="block w-full border-0 p-1 py-1 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
          placeholder="Du solltest wirklich..."
        />
        <Submit onclick={() => submitHandler} />
      </div>
      <div className="relative focus-within:z-10 focus-within:border-blue-200 focus-within:ring-1 focus-within:ring-blue-200">
        <label
          htmlFor="input2"
          className="mt-3 block font-medium text-gray-900 text-xl"
        >
          ZWEITER TEIL
        </label>
        <input
          type="text"
          name="input2"
          id="input2"
          className="block w-full border-0 p-1 py-1 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
          placeholder="genau hier..."
        />
        <Submit onclick={() => submitHandler} />
      </div>
      <div className="relative focus-within:z-10 focus-within:border-red-200 focus-within:ring-1 focus-within:ring-red-200">
        <label
          htmlFor="job-title"
          className="mt-3 block font-medium text-gray-900 text-xl"
        >
          DRITTER TEIL
        </label>
        <input
          type="text"
          name="input3"
          id="input3"
          className="block w-full border-0 p-1 py-1 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
          placeholder="was reinschreiben!"
        />
        <Submit onclick={() => submitHandler} />
      </div>
    </div>
  );
};

export default Form;
