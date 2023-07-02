import React, { useRef } from "react";

function WhatsappForm({
  setURL,
}: {
  setURL: (url: string, link: boolean) => void;
}) {
  const formRef = useRef<HTMLFormElement>(null!);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setURL(`http://wa.me/${formRef.current.inputUrl.value}/`, true);
  };

  return (
    <form
      className="flex flex-col w-full max-w-sm gap-4"
      ref={formRef}
      onSubmit={handleSubmit}
    >
      <div className="flex items-center border-b border-teal-500 py-0.5">
        <label className="flex justify-end gap-1" htmlFor="inputUrl">
          Whatsapp Number:
          <input
            className="appearance-none bg-transparent border-none w-3/5 text-gray-700 outline-none py-0.5 px-2 cursor-pointer active:text-teal-400 focus:text-teal-400"
            required
            pattern="(5|6|7|8|9)\d{9}"
            name="inputUrl"
            id="inputUrl"
            type="tel"
            placeholder="Enter Number"
          />
        </label>
      </div>
      <button
        className="flex-shrink-0 px-4 py-1 text-sm font-bold uppercase bg-teal-500 border-4 border-teal-500 rounded text-gray-950 hover:bg-teal-700 hover:border-teal-700"
        type="submit"
      >
        generate
      </button>
    </form>
  );
}
export default WhatsappForm;
