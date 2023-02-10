import { useState, ChangeEvent, Dispatch, SetStateAction } from "react";
import Submit from "./Submit";

interface setAdvicesProps {
  onSetTopAdvices: Dispatch<SetStateAction<string[]>>;
  onSetMiddleAdvices: Dispatch<SetStateAction<string[]>>;
  onSetBottomAdvices: Dispatch<SetStateAction<string[]>>;
  topAdvices: string[];
  middleAdvices: string[];
  bottomAdvices: string[];
}

const Form = ({
  onSetTopAdvices,
  onSetMiddleAdvices,
  onSetBottomAdvices,
  topAdvices,
  middleAdvices,
  bottomAdvices,
}: setAdvicesProps) => {
  const [userTopAdvice, setUserTopAdvice] = useState("");
  const [userMiddleAdvice, setUserMiddleAdvice] = useState("");
  const [userBottomAdvice, setUserBottomAdvice] = useState("");

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
            setUserTopAdvice(e.target.value)
          }
          value={userTopAdvice}
          type="text"
          name="input1"
          id="input1"
          className="block w-full border-0 p-1 py-1 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
          placeholder="Du solltest wirklich..."
        />
        <Submit
          onClick={() => {
            onSetTopAdvices([...topAdvices, userTopAdvice]);
            setUserTopAdvice("");
          }}
        />
      </div>
      <div className="relative focus-within:z-10 focus-within:border-blue-200 focus-within:ring-1 focus-within:ring-blue-200">
        <label
          htmlFor="input2"
          className="mt-3 block font-medium text-gray-900 text-xl"
        >
          ZWEITER TEIL
        </label>
        <input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setUserMiddleAdvice(e.target.value)
          }
          value={userMiddleAdvice}
          type="text"
          name="input2"
          id="input2"
          className="block w-full border-0 p-1 py-1 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
          placeholder="genau hier..."
        />
        <Submit
          onClick={() => {
            onSetMiddleAdvices([...middleAdvices, userMiddleAdvice]);
            setUserMiddleAdvice("");
          }}
        />
      </div>
      <div className="relative focus-within:z-10 focus-within:border-red-200 focus-within:ring-1 focus-within:ring-red-200">
        <label
          htmlFor="job-title"
          className="mt-3 block font-medium text-gray-900 text-xl"
        >
          DRITTER TEIL
        </label>
        <input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setUserBottomAdvice(e.target.value)
          }
          value={userBottomAdvice}
          type="text"
          name="input3"
          id="input3"
          className="block w-full border-0 p-1 py-1 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
          placeholder="was reinschreiben!"
        />
        <Submit
          onClick={() => {
            onSetBottomAdvices([...bottomAdvices, userBottomAdvice]);
            setUserBottomAdvice("");
          }}
        />
      </div>
    </div>
  );
};

export default Form;
