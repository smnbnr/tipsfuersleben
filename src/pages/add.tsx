import Button from "components/Button";
import Form from "components/Form";

const add = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full bg-gradient-to-r from-sky-400 to-cyan-300">
      <div className="flex justify-center w-11/12">
        <Form />
      </div>
      <Button text="ZURÜCK" href="/" />
    </div>
  );
};

export default add;
