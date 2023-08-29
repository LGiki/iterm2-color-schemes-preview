import {ColorScheme} from "@/types/color-scheme";
import ColorSchemePreview from "@/components/color-schemes-list/color-scheme-preview";
import {Download} from "lucide-react";
import React, {useRef} from "react";
import {twMerge} from "tailwind-merge";

const ExternalLinkButton = (props: {
    href?: string
    children?: React.ReactNode
}) => {
    return (
        <a
            href={props.href}
            target='_blank'
            className='cursor-pointer p-2 rounded-lg bg-white hover:bg-gray-200'
            onClick={(e) => {
                e.stopPropagation()
            }}
        >
            {props.children}
        </a>
    )
}

export default function ColorSchemeItem(props: {
    isSelected?: boolean
    colorScheme: ColorScheme
    onColorSchemeSelected?: (colorScheme: ColorScheme) => void
}) {
    const radioRef = useRef<HTMLInputElement>(null)

    return (
        <div
            className={twMerge(props.isSelected ? 'bg-blue-100/80' : '', 'transition-colors duration-100 ease-linear rounded border p-2 flex gap-2')}
            onClick={() => {
                radioRef.current?.click()
            }}
        >
            <input
                className='color-scheme-item-radio'
                type='radio'
                name='scheme'
                ref={radioRef}
                value={props.colorScheme.name}
                // The `checked` and `defaultChecked` attribute is not working in development mode,
                // but it works in production mode.
                // See <https://github.com/vercel/next.js/issues/49499>.
                checked={props.isSelected ?? false}
                onChange={() => {
                    props.onColorSchemeSelected?.(props.colorScheme)
                }}
            />
            <div className='flex flex-col gap-2 flex-1 w-0'>
                <div className='flex justify-between items-center'>
                    <div className={props.isSelected ? 'font-bold' : undefined}>{props.colorScheme.name}</div>
                    <div className='flex gap-1'>
                        <ExternalLinkButton
                            href={`https://raw.githubusercontent.com/mbadolato/iTerm2-Color-Schemes/master/schemes/${props.colorScheme.name}.itermcolors`}>
                            <Download className='w-4 h-4'/>
                        </ExternalLinkButton>
                    </div>
                </div>
                <ColorSchemePreview
                    colorScheme={props.colorScheme}
                />
            </div>
        </div>
    )
}