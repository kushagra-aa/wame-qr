import React, { useRef, useState } from "react";
import QRCode from "react-qr-code";
import WhatsappForm from "./forms/WhatsappForm";
import UrlForm from "./forms/UrlForm";
import PhoneForm from "./forms/PhoneForm";
import ContactForm from "./forms/ContactForm";

function QRGenerator() {
  const [selectedOption, setSelectedOption] = useState<number>(0);
  const [QRURL, setQRURL] = useState<string>();
  const [linkURL, setLinkURL] = useState<string>();

  const changeURL = (url: string, isLink: boolean) => {
    if (isLink) setLinkURL(url);
    setQRURL(url);
  };

  const options = [
    <WhatsappForm setURL={changeURL} />,
    <PhoneForm setURL={changeURL} />,
    <ContactForm setURL={changeURL} />,
    <UrlForm setURL={changeURL} />,
  ];

  return (
    <div className="grid items-start justify-center h-[500px] w-[600px]">
      <div className="flex gap-2 border-b border-teal-400 items-center justify-center pb-2">
        <button
          onClick={() => setSelectedOption(0)}
          title="WhatsApp"
          className={`btn w-14 h-14 grid items-center justify-center border-teal-500 border-2 rounded-md hover:bg-teal-200 hover:bg-opacity-10 ${
            selectedOption === 0
              ? "border-teal-400 bg-teal-200 bg-opacity-5 shadow-sm shadow-teal-200"
              : ""
          }`}
        >
          <img className="w-10" src="/Wahtsapp Icon.png" alt="" />
        </button>

        <button
          onClick={() => setSelectedOption(1)}
          title="Phone"
          className={`btn w-14 h-14 grid items-center justify-center border-teal-500 border-2 rounded-md hover:bg-teal-200 hover:bg-opacity-10 ${
            selectedOption === 1
              ? "border-teal-400 bg-teal-200 bg-opacity-5 shadow-sm shadow-teal-200"
              : ""
          }`}
        >
          <img className="w-10" src="/Phone Icon.png" alt="" />
        </button>

        <button
          onClick={() => setSelectedOption(2)}
          title="Contact Card"
          className={`btn w-14 h-14 grid items-center justify-center border-teal-500 border-2 rounded-md hover:bg-teal-200 hover:bg-opacity-10 ${
            selectedOption === 2
              ? "border-teal-400 bg-teal-200 bg-opacity-5 shadow-sm shadow-teal-200"
              : ""
          }`}
        >
          <img className="w-10" src="/Contact Card Icon.png" alt="" />
        </button>

        <button
          onClick={() => setSelectedOption(3)}
          title="URL"
          className={`btn w-14 h-14 grid items-center justify-center border-teal-500 border-2 rounded-md hover:bg-teal-200 hover:bg-opacity-10 ${
            selectedOption === 3
              ? "border-teal-400 bg-teal-200 bg-opacity-5 shadow-sm shadow-teal-200"
              : ""
          }`}
        >
          <img className="w-10" src="/Web Icon.png" alt="" />
        </button>
      </div>
      {options[selectedOption]}
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
        <a
          className="text-teal-600 border-b border-teal-500 cursor-pointer url hover:border-teal-300"
          target="_blank"
          href={linkURL}
        >
          {linkURL}
        </a>
      </div>
    </div>
  );
}

export default QRGenerator;
