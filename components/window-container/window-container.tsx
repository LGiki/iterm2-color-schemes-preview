import React from "react";
import WindowTitleBar from "@/components/window-container/window-title-bar";
import {twMerge} from "tailwind-merge";

export default function WindowContainer(props: {
    title: string
    className?: string
    children?: React.ReactNode
}) {
    return (
        <div className={twMerge("flex flex-col rounded-lg shadow-2xl overflow-hidden", props.className)}>
            <WindowTitleBar title={props.title}/>
            {props.children}
        </div>
    )
}