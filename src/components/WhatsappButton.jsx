import React from "react";

const WhatsappButton = ({buttonText, className}) => {
    return (
        <div className="flex-1 flex justify-end">
        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className={`${className} px-5 py-2 rounded text-white font-semibold bg-gradient-to-r from-[#D99A29] to-yellow-400 hover:from-yellow-400 hover:to-[#D99A29] transition-all`}
          style={{ minWidth: 110, textAlign: "center" }}
        >
          {buttonText}
        </a>
      </div>
    )
}

export default WhatsappButton;