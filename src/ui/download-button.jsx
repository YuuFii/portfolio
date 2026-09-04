import React from "react";
import { Download } from "lucide-react";

const DownloadButton = ({
    href,
    download,
    text,
    className,
}) => (
    <a className={`flex items-center justify-center gap-1 bg-yellow-600 hover:bg-yellow-500 transition-colors duration-300 shadow-md py-3 px-6 font-medium rounded-full ${className}`} href={href} download={download}>
        {text}
        <Download className="w-5 h-5"/>
    </a>
)

export default DownloadButton;