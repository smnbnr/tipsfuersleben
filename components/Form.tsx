const Form = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="relative focus-within:z-10 focus-within:border-green-200 focus-within:ring-1 focus-within:ring-green-200">
        <label
          htmlFor="name"
          className="mt-3 block font-medium text-xl text-gray-900"
        >
          ERSTER TEIL
        </label>

        <input
          type="text"
          name="name"
          id="name"
          className="block w-full border-0 p-1 py-1 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
          placeholder="Du solltest wirklich..."
        />
        <input
          type="submit"
          value="HINZUFÜGEN"
          className="my-2 px-1 py-1 bg-green-200 text-sm"
        ></input>
      </div>
      <div className="relative focus-within:z-10 focus-within:border-blue-200 focus-within:ring-1 focus-within:ring-blue-200">
        <label
          htmlFor="job-title"
          className="mt-3 block font-medium text-gray-900 text-xl"
        >
          ZWEITER TEIL
        </label>
        <input
          type="text"
          name="job-title"
          id="job-title"
          className="block w-full border-0 p-1 py-1 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
          placeholder="genau hier..."
        />
        <input
          type="submit"
          value="HINZUFÜGEN"
          className="my-2 px-1 py-1 bg-blue-200 text-sm"
        ></input>
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
          name="job-title"
          id="job-title"
          className="block w-full border-0 p-1 py-1 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
          placeholder="was reinschreiben!"
        />
        <input
          type="submit"
          value="HINZUFÜGEN"
          className="my-2 px-1 py-1 bg-red-200 text-sm"
        ></input>
      </div>
    </div>
  );
};

export default Form;
