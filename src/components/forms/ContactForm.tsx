import React, { useRef } from "react";

function ContactForm({
  setURL,
}: {
  setURL: (url: string, link: boolean) => void;
}) {
  const formRef = useRef<HTMLFormElement>(null!);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailString = `${
      formRef.current.email.value !== ""
        ? `EMAIL;TYPE=INTERNET:${formRef.current.email.value}`
        : ""
    }`;
    const vCardString = `BEGIN:VCARD
    VERSION:3.0
    N:${formRef.current.lastName.value};${formRef.current.firstName.value};;;
    FN:${formRef.current.firstName.value} ${formRef.current.lastName.value}
    TEL;TYPE=CELL:${formRef.current.phone.value}
    ${emailString}
    END:VCARD`;
    console.log("vCardString", vCardString);
    setURL(vCardString, false);
  };

  return (
    <form
      className="flex flex-col w-full max-w-sm gap-4"
      ref={formRef}
      onSubmit={handleSubmit}
    >
      <div className="flex items-center border-b border-teal-500 py-0.5">
        <label className="flex flex-col justify-end" htmlFor="firstName">
          <span>
            {" "}
            First Name <span className="text-red-400 text-sm">*</span>:
          </span>
          <input
            className="appearance-none bg-transparent border-none w-full text-primary mr-3 outline-none py-0.5 px-2 cursor-pointer active:text-teal-400 focus:text-teal-400"
            required
            name="firstName"
            id="firstName"
            type="text"
            placeholder="Enter First Name"
          />
        </label>
      </div>
      <div className="flex items-center border-b border-teal-500 py-0.5">
        <label className="flex flex-col justify-end" htmlFor="lastName">
          <span>
            {" "}
            Last Name <span className="text-red-400 text-sm">*</span>:
          </span>
          <input
            className="appearance-none bg-transparent border-none w-full text-primary mr-3 outline-none py-0.5 px-2 cursor-pointer active:text-teal-400 focus:text-teal-400"
            required
            name="lastName"
            id="lastName"
            type="text"
            placeholder="Enter Last Name"
          />
        </label>
      </div>
      <div className="flex items-center border-b border-teal-500 py-0.5">
        <label className="flex flex-col justify-end" htmlFor="phone">
          <span>
            {" "}
            Phone Number <span className="text-red-400 text-sm">*</span>:
          </span>
          <input
            className="appearance-none bg-transparent border-none w-full text-primary mr-3 outline-none py-0.5 px-2 cursor-pointer active:text-teal-400 focus:text-teal-400"
            required
            pattern="(5|6|7|8|9)\d{9}"
            name="phone"
            id="phone"
            type="tel"
            placeholder="Enter Phone Number"
          />
        </label>
      </div>
      <div className="flex items-center border-b border-teal-500 py-0.5">
        <label className="flex flex-col justify-end" htmlFor="email">
          <span>Email:</span>
          <input
            className="appearance-none bg-transparent border-none w-full text-primary mr-3 outline-none py-0.5 px-2 cursor-pointer active:text-teal-400 focus:text-teal-400"
            name="email"
            id="email"
            type="email"
            placeholder="Enter Email"
          />
        </label>
      </div>
      <button
        className="flex-shrink-0 px-4 py-1 text-sm font-bold uppercase bg-teal-500 border-4 border-teal-500 rounded text-primary hover:bg-teal-700 hover:border-teal-700"
        type="submit"
      >
        generate
      </button>
    </form>
  );
}
export default ContactForm;
