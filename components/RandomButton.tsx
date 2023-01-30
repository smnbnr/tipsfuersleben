import {
  GiRollingDiceCup,
  GiPerspectiveDiceSixFacesFive,
} from "react-icons/gi";

const RandomButton = () => {
  return (
    <div className="border border-black border-solid h-16 flex justify-center items-center gap-2 w-11/12 mt-9 bg-teal-200">
      <span className="font-extrabold">ZUFALL</span>
      <GiPerspectiveDiceSixFacesFive size={30} />
    </div>
  );
};

export default RandomButton;
