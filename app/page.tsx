"use client"

import WindowContainer from "@/components/window-container/window-container";
import dynamic from "next/dynamic";
import colorSchemesData from '@/data/color-schemes.json';
import {ColorScheme} from "@/types/color-scheme";
import ColorSchemesList from "@/components/color-schemes-list/color-schemes-list";
import Button from "@/components/button";
import {useRef, useState} from "react";

const Xterm = dynamic(
    () => import('@/components/xterm'),
    {ssr: false}
)

export default function Home() {
    const colorSchemes = colorSchemesData as ColorScheme[]
    const selectedBackgroundIndex = useRef(Math.floor(Math.random() * 5) + 1)
    const [selectedColorScheme, setSelectedColorScheme] = useState<ColorScheme>(colorSchemes[0])

    return (
        <div className={`h-screen w-screen bg-main-${selectedBackgroundIndex.current}`}>
            <div className="h-full w-full flex flex-col max-w-7xl gap-2 p-2 m-auto lg:gap-8 lg:flex-row lg:py-10">
                <WindowContainer
                    title="Select Color Scheme"
                    className="flex-1 w-full flex-shrink-0 lg:h-full lg:w-96 lg:flex-none"
                >
                    <div className="bg-white p-2 flex flex-col gap-2 h-0 flex-1">
                        <Button
                            onClick={() => {
                                setSelectedColorScheme(colorSchemes[Math.floor(Math.random() * colorSchemes.length)])
                                setTimeout(() => {
                                    const selectedColorSchemeElement = document.querySelector('.color-scheme-item-radio:checked')
                                    if (selectedColorSchemeElement) {
                                        selectedColorSchemeElement.scrollIntoView({behavior: 'smooth'})
                                    }
                                }, 0)
                            }}
                        >I&apos;m Feeling Lucky</Button>
                        <Button
                            onClick={() => {
                                const url = `https://raw.githubusercontent.com/mbadolato/iTerm2-Color-Schemes/master/schemes/${selectedColorScheme.name}.itermcolors`
                                window.open(url, '_blank')
                            }}
                        >
                            Download Selected Color Scheme
                        </Button>
                        <ColorSchemesList
                            selectedColorScheme={selectedColorScheme}
                            colorSchemes={colorSchemes}
                            onColorSchemeSelected={setSelectedColorScheme}
                        />
                    </div>
                </WindowContainer>
                <WindowContainer
                    title={`iTerm2 - ${selectedColorScheme.name}`}
                    className="h-full flex-1"
                >
                    <div className='h-full w-full' style={{background: selectedColorScheme.colors.background}}>
                        <Xterm
                            className='w-full h-full'
                            colorScheme={selectedColorScheme.colors}
                        />
                    </div>
                </WindowContainer>
            </div>
        </div>
    )
}
