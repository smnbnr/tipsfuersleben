const Form = () => {
  // Vielleicht den Border entfernen...
  return (
    <div className="isolate -space-y-px rounded-md shadow-sm">
      <div className="relative rounded-md border rounded-b-none border-gray-300 px-3 py-2 focus-within:z-10 focus-within:border-green-200 focus-within:ring-1 focus-within:ring-green-200">
        <label htmlFor="name" className="mb-3 block font-medium text-gray-900">
          ERSTER TEIL
        </label>

        <input
          type="text"
          name="name"
          id="name"
          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
          placeholder=" Du solltest..."
        />
        <input
          type="submit"
          value="HINZUFÜGEN"
          className="my-2 px-1 bg-green-200 text-sm"
        ></input>
      </div>
      <div className="relative rounded-t-none border border-gray-300 px-3 py-2 focus-within:z-10 focus-within:border-blue-200 focus-within:ring-1 focus-within:ring-blue-200">
        <label
          htmlFor="job-title"
          className="mb-3 block font-medium text-gray-900"
        >
          ZWEITER TEIL
        </label>
        <input
          type="text"
          name="job-title"
          id="job-title"
          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
          placeholder=" wirklich genau hier..."
        />
        <input
          type="submit"
          value="HINZUFÜGEN"
          className="my-2 px-1 bg-blue-200 text-sm"
        ></input>
      </div>
      <div className="relative rounded-md rounded-t-none border border-gray-300 px-3 py-2 focus-within:z-10 focus-within:border-red-200 focus-within:ring-1 focus-within:ring-red-200">
        <label
          htmlFor="job-title"
          className="mb-3 block font-medium text-gray-900"
        >
          DRITTER TEIL
        </label>
        <input
          type="text"
          name="job-title"
          id="job-title"
          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
          placeholder="  was reinschreiben!"
        />
        <input
          type="submit"
          value="HINZUFÜGEN"
          className="my-2 px-1 bg-red-200 text-sm"
        ></input>
      </div>
    </div>
  );
};

export default Form;
