import React, { useRef, useState } from "react";
import QRCode from "react-qr-code";
import WhatsappForm from "./forms/WhatsappForm";
import UrlForm from "./forms/UrlForm";
import PhoneForm from "./forms/PhoneForm";
import ContactForm from "./forms/ContactForm";
import Sv from "save-svg-as-png";

const saveSvgAsPng = Sv.saveSvgAsPng;

const FORM_OPTIONS = [
  {
    img: "/Wahtsapp Icon.png",
  },
  {
    img: "/Phone Icon.png",
  },
  {
    img: "/Contact Card Icon.png",
  },
  {
    img: "/Web Icon.png",
  },
];

const QR_THEMES = [
  {
    bgColor: "#2dd4bf",
    fgColor: "#030712",
  },
  {
    bgColor: "#030712",
    fgColor: "#2dd4bf",
  },
  {
    bgColor: "#FFFFFF",
    fgColor: "#000000",
  },
  {
    bgColor: "#000000",
    fgColor: "#FFFFFF",
  },
  {
    bgColor: "#020A24",
    fgColor: "#E75151",
  },
  {
    bgColor: "#0F0224",
    fgColor: "#2391FF",
  },
];

function QRGenerator() {
  const [selectedOption, setSelectedOption] = useState<number>(0);
  const [selectedTheme, setSelectedTheme] = useState<number>(0);
  const [QRURL, setQRURL] = useState<string>();
  const [linkURL, setLinkURL] = useState<string>();
  const qrCodeRef = useRef<HTMLDivElement>(null!);

  const changeURL = (url: string, isLink: boolean) => {
    if (isLink) setLinkURL(url);
    setQRURL(url);
  };
  const handleOptionSelect = (i: number) => {
    setSelectedOption(i);
    setQRURL(undefined);
    setLinkURL(undefined);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(linkURL);
  };
  const handleDownload = () => {
    const svgElm = qrCodeRef.current.firstChild;
    console.log(svgElm);
    saveSvgAsPng(svgElm, "qrcode.png", {
      // height: 246.817,
      // width: 246.817,
      scale: 8,
    });
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
        {FORM_OPTIONS.map((option, i) => (
          <button
            onClick={() => handleOptionSelect(i)}
            title="WhatsApp"
            className={`btn w-14 h-14 grid items-center justify-center border-teal-500 border-2 rounded-md hover:bg-teal-200 hover:bg-opacity-10 ${
              selectedOption === i
                ? "border-teal-400 bg-teal-200 bg-opacity-5 shadow-sm shadow-teal-200"
                : ""
            }`}
          >
            <img className="w-10" src={option.img} alt="" />
          </button>
        ))}
      </div>
      {options[selectedOption]}
      <div className="flex flex-col items-center justify-center gap-2 mt-2 qr-container">
        {QRURL && (
          <div
            ref={qrCodeRef}
            className="qr p-1 bg-gray-950 border-teal-400 border-2"
          >
            <QRCode
              value={QRURL}
              bgColor={QR_THEMES[selectedTheme].bgColor}
              fgColor={QR_THEMES[selectedTheme].fgColor}
              style={{
                height: "250px",
                width: "250px",
              }}
            />
          </div>
        )}
        {linkURL ? (
          <>
            <div className="flex flex-col gap-1 border-b border-teal-400 items-start justify-center pb-2 w-full">
              <p className="text-teal-400 capitalize">themes:</p>
              <div className="flex items-center justify-evenly w-full">
                {QR_THEMES.map((theme, i) => (
                  <button
                    className={`btn flex  w-12 h-8 items-center justify-center border-teal-500 border-2 rounded-sm hover:border-teal-700 hover:bg-opacity-10 ${
                      selectedTheme === i ? "border-teal-300" : ""
                    }`}
                    onClick={() => setSelectedTheme(i)}
                  >
                    <span
                      className="flex-1 w-1/2 h-full"
                      style={{ background: theme.bgColor }}
                    ></span>
                    <span
                      className="flex-1 w-1/2 h-full"
                      style={{ background: theme.fgColor }}
                    ></span>
                  </button>
                ))}
              </div>
            </div>
            <div className="flex gap-1">
              <>
                <p>Link:</p>
                <a
                  className="text-teal-600 border-b border-teal-500 cursor-pointer url hover:border-teal-300"
                  target="_blank"
                  href={linkURL}
                >
                  {linkURL}
                </a>
              </>
            </div>
            <div className="flex gap-2">
              <button
                className="flex-shrink-0 px-4 py-1 text-sm font-bold uppercase bg-teal-500 border-4 border-teal-500 rounded text-gray-950 hover:bg-teal-700 hover:border-teal-700"
                onClick={handleDownload}
              >
                Download
              </button>
              <button
                className="flex-shrink-0 px-4 py-1 text-sm font-bold uppercase bg-teal-500 border-4 border-teal-500 rounded text-gray-950 hover:bg-teal-700 hover:border-teal-700"
                onClick={handleCopy}
              >
                Copy URL
              </button>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default QRGenerator;
