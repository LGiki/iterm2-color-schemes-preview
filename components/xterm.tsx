"use client"

import {useEffect, useRef} from "react";
import {ITheme, Terminal} from 'xterm';
import {FitAddon} from 'xterm-addon-fit';
import { WebLinksAddon } from 'xterm-addon-web-links';
import 'xterm/css/xterm.css';

const NEOFETCH_OUTPUT = `\u001b[?25l\u001b[?7l\u001b[0m\u001b[32m\u001b[1m                    'c.\r
                 ,xNMM.\r
               .OMMMMo\r
               OMMM0,\r
     .;loddo:' loolloddol;.\r
   cKMMMMMMMMMMNWMMMMMMMMMM0:\r
\u001b[0m\u001b[33m\u001b[1m .KMMMMMMMMMMMMMMMMMMMMMMMWd.\r
 XMMMMMMMMMMMMMMMMMMMMMMMX.\r
\u001b[0m\u001b[31m\u001b[1m;MMMMMMMMMMMMMMMMMMMMMMMM:\r
:MMMMMMMMMMMMMMMMMMMMMMMM:\r
\u001b[0m\u001b[31m\u001b[1m.MMMMMMMMMMMMMMMMMMMMMMMMX.\r
 kMMMMMMMMMMMMMMMMMMMMMMMMWd.\r
 \u001b[0m\u001b[35m\u001b[1m.XMMMMMMMMMMMMMMMMMMMMMMMMMMk\r
  .XMMMMMMMMMMMMMMMMMMMMMMMMK.\r
    \u001b[0m\u001b[34m\u001b[1mkMMMMMMMMMMMMMMMMMMMMMMd\r
     ;KMMMMMMMWXXWMMMMMMMk.\r
       .cooc,.    .,coo:.\u001b[0m\r
\u001b[17A\u001b[9999999D\u001b[33C\u001b[0m\u001b[1m\u001b[32m\u001b[1miTerm2\u001b[0m@\u001b[32m\u001b[1miTerm2.local\u001b[0m \r
\u001b[33C\u001b[0m---------------------\u001b[0m \r
\u001b[33C\u001b[0m\u001b[33m\u001b[1mOS\u001b[0m\u001b[0m:\u001b[0m macOS 13.5 22G74 arm64\u001b[0m \r
\u001b[33C\u001b[0m\u001b[33m\u001b[1mHost\u001b[0m\u001b[0m:\u001b[0m Mac14,15\u001b[0m \r
\u001b[33C\u001b[0m\u001b[33m\u001b[1mKernel\u001b[0m\u001b[0m:\u001b[0m 22.6.0\u001b[0m \r
\u001b[33C\u001b[0m\u001b[33m\u001b[1mUptime\u001b[0m\u001b[0m:\u001b[0m 10 hour, 18 mins\u001b[0m \r
\u001b[33C\u001b[0m\u001b[33m\u001b[1mPackages\u001b[0m\u001b[0m:\u001b[0m 146 (brew)\u001b[0m \r
\u001b[33C\u001b[0m\u001b[33m\u001b[1mShell\u001b[0m\u001b[0m:\u001b[0m zsh 5.9\u001b[0m \r
\u001b[33C\u001b[0m\u001b[33m\u001b[1mResolution\u001b[0m\u001b[0m:\u001b[0m 1710x1107, 2560x1440\u001b[0m \r
\u001b[33C\u001b[0m\u001b[33m\u001b[1mDE\u001b[0m\u001b[0m:\u001b[0m Aqua\u001b[0m \r
\u001b[33C\u001b[0m\u001b[33m\u001b[1mWM\u001b[0m\u001b[0m:\u001b[0m Quartz Compositor\u001b[0m \r
\u001b[33C\u001b[0m\u001b[33m\u001b[1mWM Theme\u001b[0m\u001b[0m:\u001b[0m Blue (Light)\u001b[0m \r
\u001b[33C\u001b[0m\u001b[33m\u001b[1mTerminal\u001b[0m\u001b[0m:\u001b[0m iTerm2\u001b[0m \r
\u001b[33C\u001b[0m\u001b[33m\u001b[1mTerminal Font\u001b[0m\u001b[0m:\u001b[0m UbuntuMono-Regular 17\u001b[0m \r
\u001b[33C\u001b[0m\u001b[33m\u001b[1mCPU\u001b[0m\u001b[0m:\u001b[0m Apple M2 Max\u001b[0m \r
\u001b[33C\u001b[0m\u001b[33m\u001b[1mGPU\u001b[0m\u001b[0m:\u001b[0m Apple M2 Max\u001b[0m \r
\u001b[33C\u001b[0m\u001b[33m\u001b[1mMemory\u001b[0m\u001b[0m:\u001b[0m 12345MiB / 98304MiB\u001b[0m \r
\r
\u001b[33C\u001b[30m\u001b[40m   \u001b[31m\u001b[41m   \u001b[32m\u001b[42m   \u001b[33m\u001b[43m   \u001b[34m\u001b[44m   \u001b[35m\u001b[45m   \u001b[36m\u001b[46m   \u001b[37m\u001b[47m   \u001b[m\r
\u001b[33C\u001b[38;5;8m\u001b[48;5;8m   \u001b[38;5;9m\u001b[48;5;9m   \u001b[38;5;10m\u001b[48;5;10m   \u001b[38;5;11m\u001b[48;5;11m   \u001b[38;5;12m\u001b[48;5;12m   \u001b[38;5;13m\u001b[48;5;13m   \u001b[38;5;14m\u001b[48;5;14m   \u001b[38;5;15m\u001b[48;5;15m   \u001b[m\r
\r
\r
\u001b[?25h\u001b[?7h\r
`

export default function Xterm(props: {
    className?: string
    colorScheme?: ITheme
}) {
    const containerRef = useRef<HTMLDivElement>(null)
    const terminalRef = useRef<Terminal | null>(null)
    const commandRef = useRef<string>('')

    useEffect(() => {
        if (containerRef.current) {
            const terminal = new Terminal({
                theme: props.colorScheme,
            })
            terminalRef.current = terminal
            const fitAddon = new FitAddon()
            const webLinksAddon = new WebLinksAddon()
            terminal.loadAddon(fitAddon)
            terminal.loadAddon(webLinksAddon)
            terminal.open(containerRef.current)
            fitAddon.fit()
            terminal.write(`\n\r`)
            terminal.write('  =================================================================\n\r')
            terminal.write('           Welcome to iTerm2 Color Schemes Preview ❤️\n\r')
            terminal.write('    Github: https://github.com/LGiki/iterm2-color-schemes-preview\n\r')
            terminal.write('  =================================================================\n\r')
            terminal.write(`\n\r`)
            terminal.write(`$ neofetch\n\r${NEOFETCH_OUTPUT}\n\r`)
            terminal.write('$ ')
            terminal.onData((e) => {
                if (e === '\r') {
                    if (commandRef.current === 'neofetch') {
                        terminal.write(`\n\r${NEOFETCH_OUTPUT}`)
                    } else {
                        terminal.write(`\n\rcommand not found: ${commandRef.current.split(' ')[0]}`)
                    }
                    commandRef.current = ''
                    terminal.write('\n\r$ ')
                } else if (e === '\u0003') {
                    terminal.write('^C\n\r$ ')
                } else if (e === '\u007F') {
                    if (terminal.buffer.active.cursorX > 2) {
                        terminal.write('\u0008 \u0008')
                        commandRef.current = commandRef.current.slice(0, -1)
                    }
                } else if (e === '\u000c') {
                    terminal.clear()
                    terminal.write('$ ')
                } else {
                    terminal.write(e)
                    commandRef.current += e
                }
            })
            const resizeCallback = () => {
                fitAddon.fit()
            }

            window.addEventListener('resize', resizeCallback)
            return () => {
                window.removeEventListener('resize', resizeCallback)
                terminal.dispose()
            }
        }
    }, [])

    useEffect(() => {
        if (terminalRef.current && terminalRef.current?.options) {
            terminalRef.current.options.theme = props.colorScheme
        }
    }, [props.colorScheme]);

    return (
        <div ref={containerRef} className={props.className}></div>
    )
}