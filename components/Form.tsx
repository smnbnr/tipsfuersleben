import { useState, ChangeEvent, Dispatch, SetStateAction } from "react";
import Submit from "./Submit";

type textEntry = { text: string; type: "initial" | "user" };
interface setAdvicesProps {
  onSetTopAdvices: Dispatch<SetStateAction<textEntry[]>>;
  onSetMiddleAdvices: Dispatch<SetStateAction<textEntry[]>>;
  onSetBottomAdvices: Dispatch<SetStateAction<textEntry[]>>;
  topAdvices: textEntry[];
  middleAdvices: textEntry[];
  bottomAdvices: textEntry[];
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
  const [showTopWarning, setShowTopWarning] = useState(false);
  const [showMiddleWarning, setShowMiddleWarning] = useState(false);
  const [showBottomWarning, setShowBottomWarning] = useState(false);
  const resetSubmit = () => {
    setAddConfirmTop(false);
    setAddConfirmMiddle(false);
    setAddConfirmBottom(false);
    setShowTopWarning(false);
    setShowMiddleWarning(false);
    setShowBottomWarning(false);
  };

  return (
    <div className="flex flex-col w-11/12 md:w-2/4">
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
          color="bg-green-200"
          addConfirm={addConfirmTop}
          onClick={() => {
            if (userTopAdvice.length !== 0) {
              onSetTopAdvices([
                ...topAdvices,
                { text: userTopAdvice, type: "user" },
              ]);
              setUserTopAdvice("");
              setAddConfirmTop(true);
            } else {
              setShowTopWarning(true);
            }
          }}
          showWarning={showTopWarning}
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
          required
          minLength={2}
        />
        <Submit
          color="bg-blue-200"
          addConfirm={addConfirmMiddle}
          onClick={() => {
            if (userMiddleAdvice.length !== 0) {
              onSetMiddleAdvices([
                ...middleAdvices,
                { text: userMiddleAdvice, type: "user" },
              ]);
              setUserMiddleAdvice("");
              setAddConfirmMiddle(true);
            } else {
              setShowMiddleWarning(true);
            }
          }}
          showWarning={showMiddleWarning}
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
          required
          minLength={2}
        />
        <Submit
          color="bg-red-200"
          addConfirm={addConfirmBottom}
          onClick={() => {
            if (userBottomAdvice.length !== 0) {
              onSetBottomAdvices([
                ...bottomAdvices,
                { text: userBottomAdvice, type: "user" },
              ]);
              setUserBottomAdvice("");
              setAddConfirmBottom(true);
            } else {
              setShowBottomWarning(true);
            }
          }}
          showWarning={showBottomWarning}
        />
      </div>
    </div>
  );
};

export default Form;
