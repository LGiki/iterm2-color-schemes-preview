import React from "react";
import {twMerge} from "tailwind-merge";

export default function Button(props: {
    className?: string
    children?: React.ReactNode
    onClick?: () => void
}) {
    return (
        <button
            className={twMerge('px-2 py-1 rounded-[6px] bg-[#007AFF] shadow-macos-button bg-macos-button text-white font-medium', props.className)}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}