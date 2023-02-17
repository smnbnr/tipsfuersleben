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
  const [addConfirmTop, setAddConfirmTop] = useState(false);
  const [addConfirmMiddle, setAddConfirmMiddle] = useState(false);
  const [addConfirmBottom, setAddConfirmBottom] = useState(false);
  const resetSubmit = () => {
    setAddConfirmTop(false);
    setAddConfirmMiddle(false);
    setAddConfirmBottom(false);
  };
  return (
    <div className="flex flex-col w-11/12">
      <div className="relative">
        <label
          htmlFor="input1"
          className="block font-medium text-xl text-gray-900"
        >
          ERSTER TEIL
        </label>

        <input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setUserTopAdvice(e.target.value)
          }
          onFocus={resetSubmit}
          value={userTopAdvice}
          type="text"
          name="input1"
          id="input1"
          className="block w-full border-0 p-1 py-2 text-gray-900 placeholder-gray-400 focus:ring-0 sm:text-sm"
          placeholder="DU SOLLTEST WIRKLICH..."
        />
        <Submit
          addConfirm={addConfirmTop}
          onClick={() => {
            onSetTopAdvices([...topAdvices, userTopAdvice]);
            setUserTopAdvice("");
            setAddConfirmTop(true);
          }}
        />
      </div>
      <div className="relative">
        <label
          htmlFor="input2"
          className="mt-3 block font-medium text-gray-900 text-xl"
        >
          ZWEITER TEIL
        </label>
        <input
          onFocus={resetSubmit}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setUserMiddleAdvice(e.target.value)
          }
          value={userMiddleAdvice}
          type="text"
          name="input2"
          id="input2"
          className="block w-full border-0 p-1 py-2 text-gray-900 placeholder-gray-400 focus:ring-0 sm:text-sm"
          placeholder="...HIER"
        />
        <Submit
          addConfirm={addConfirmMiddle}
          onClick={() => {
            onSetMiddleAdvices([...middleAdvices, userMiddleAdvice]);
            setUserMiddleAdvice("");
            setAddConfirmMiddle(true);
          }}
        />
      </div>
      <div className="relative">
        <label
          htmlFor="job-title"
          className="mt-3 block font-medium text-gray-900 text-xl"
        >
          DRITTER TEIL
        </label>
        <input
          onFocus={resetSubmit}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setUserBottomAdvice(e.target.value)
          }
          value={userBottomAdvice}
          type="text"
          name="input3"
          id="input3"
          className="block w-full border-0 p-1 py-2 text-gray-900 placeholder-gray-400 focus:ring-0 sm:text-sm"
          placeholder="...WAS REINSCHREIBEN!"
        />
        <Submit
          addConfirm={addConfirmBottom}
          onClick={() => {
            onSetBottomAdvices([...bottomAdvices, userBottomAdvice]);
            setUserBottomAdvice("");
            setAddConfirmBottom(true);
          }}
        />
      </div>
    </div>
  );
};

export default Form;
