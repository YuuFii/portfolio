import React from "react";
import { DotIcon } from "lucide-react";

const ItemTag = ({item, hasBorder}) => {
    return (
        <div className={`flex items-center space-x-2 ${
            hasBorder
                ? "border border-slate-200 rounded-full px-4 py-1" : ""
        }`}>
            <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
            <span className="font-medium">
                {item}
            </span>
        </div>
    )
}

export default ItemTag;