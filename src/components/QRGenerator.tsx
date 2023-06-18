import React, { useRef, useState } from "react";
import QRCode from "react-qr-code";

const makeWhatsAppURL = (phone: string) => `http://wa.me/${phone}/`;
const makePhoneURL = (phone: string) => `tel:${phone}/`;

const OPTIONS_MAP = {
  0: "WhatsApp",
  1: "Phone",
  2: "Basic",
};

function QRGenerator() {
  const [QRURL, setQRURL] = useState<string>();
  const formRef = useRef<HTMLFormElement>(null!);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const option = Number(formRef.current.option.value);
    if (
      Number.isNaN(option) ||
      !!formRef.current.inputUrl.current ||
      formRef.current.inputUrl.current === ""
    )
      return;
    switch (option) {
      case 0:
        setQRURL(() => makeWhatsAppURL(`91${formRef.current.inputUrl.value}`));
        break;
      case 1:
        setQRURL(() => makePhoneURL(`+91${formRef.current.inputUrl.value}`));
        break;
      case 2:
        setQRURL(formRef.current.inputUrl.value);
        break;
      default:
    }
  };
  return (
    <form
      className="flex flex-col w-full max-w-sm gap-4"
      ref={formRef}
      onSubmit={handleSubmit}
    >
      <div className="flex items-center py-0.5 border-b border-teal-500 justify-evenly">
        <label
          className="flex gap-1 leading-[100%] items-end px-2 py-2 hover:bg-[rgba(104,104,104,0.1)] cursor-pointer"
          htmlFor={OPTIONS_MAP[0]}
        >
          {OPTIONS_MAP[0]}
          <input
            defaultChecked
            type="radio"
            id={OPTIONS_MAP[0]}
            name="option"
            value={0}
          />
        </label>
        <label
          className="flex gap-1 leading-[100%] items-end px-2 py-2 hover:bg-[rgba(104,104,104,0.1)] cursor-pointer"
          htmlFor={OPTIONS_MAP[1]}
        >
          {OPTIONS_MAP[1]}
          <input type="radio" id={OPTIONS_MAP[1]} name="option" value={1} />
        </label>
        <label
          className="flex gap-1 leading-[100%] items-end px-2 py-2 hover:bg-[rgba(104,104,104,0.1)] cursor-pointer"
          htmlFor={OPTIONS_MAP[2]}
        >
          {OPTIONS_MAP[2]}
          <input type="radio" id={OPTIONS_MAP[2]} name="option" value={2} />
        </label>
      </div>
      <div className="flex items-center border-b border-teal-500 py-0.5">
        <label className="flex justify-end gap-1" htmlFor="inputUrl">
          URL:
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 outline-none py-0.5 px-2 cursor-pointer"
            name="inputUrl"
            id="inputUrl"
            type="text"
            placeholder="Enter URL"
          />
        </label>
      </div>
      <button
        className="flex-shrink-0 px-4 py-1 text-sm font-bold uppercase bg-teal-500 border-4 border-teal-500 rounded text-gray-950 hover:bg-teal-700 hover:border-teal-700"
        type="submit"
      >
        generate
      </button>
      <div className="flex flex-col items-center justify-center gap-2 mt-2 qr-container">
        {QRURL && (
          <QRCode
            value={QRURL}
            style={{
              padding: "0.1rem",
              background: "#fefefe",
              border: "3px solid teal",
            }}
          />
        )}
        <p className="text-teal-600 url">{QRURL}</p>
      </div>
    </form>
  );
}

export default QRGenerator;
