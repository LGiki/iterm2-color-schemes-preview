import {ITheme} from "xterm";

export default function ColorGrid(props: {
    colors: ITheme
}) {
    return (
        <div className='grid grid-cols-8 grid-rows-2 h-12 w-full'>
            <div title={`Black - ${props.colors.black}`} style={{background: props.colors.black}}/>
            <div title={`Red - ${props.colors.red}`} style={{background: props.colors.red}}/>
            <div title={`Green - ${props.colors.green}`} style={{background: props.colors.green}}/>
            <div title={`Yellow - ${props.colors.yellow}`} style={{background: props.colors.yellow}}/>
            <div title={`Blue - ${props.colors.blue}`} style={{background: props.colors.blue}}/>
            <div title={`Magenta - ${props.colors.magenta}`} style={{background: props.colors.magenta}}/>
            <div title={`Cyan - ${props.colors.cyan}`} style={{background: props.colors.cyan}}/>
            <div title={`White - ${props.colors.white}`} style={{background: props.colors.white}}/>
            <div title={`Bright Black - ${props.colors.brightBlack}`} style={{background: props.colors.brightBlack}}/>
            <div title={`Bright Red - ${props.colors.brightRed}`} style={{background: props.colors.brightRed}}/>
            <div title={`Bright Green - ${props.colors.brightGreen}`} style={{background: props.colors.brightGreen}}/>
            <div title={`Bright Yellow - ${props.colors.brightYellow}`} style={{background: props.colors.brightYellow}}/>
            <div title={`Bright Blue - ${props.colors.brightBlue}`} style={{background: props.colors.brightBlue}}/>
            <div title={`Bright Magenta - ${props.colors.brightMagenta}`} style={{background: props.colors.brightMagenta}}/>
            <div title={`Bright Cyan - ${props.colors.brightCyan}`} style={{background: props.colors.brightCyan}}/>
            <div title={`Bright White - ${props.colors.brightWhite}`} style={{background: props.colors.brightWhite}}/>
        </div>
    )
}