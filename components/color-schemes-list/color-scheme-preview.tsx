import {ColorScheme} from "@/types/color-scheme";
import ColorGrid from "@/components/color-schemes-list/color-grid";

export default function ColorSchemePreview(props: {
    colorScheme: ColorScheme
}) {
    return (
        <div className='flex flex-col px-4 py-3 gap-5 rounded' style={{background: props.colorScheme.colors.background}}>
            <ColorGrid colors={props.colorScheme.colors}/>
            <div
                style={{color: props.colorScheme.colors.foreground}}
                className='font-mono'
            >
                $ echo &apos;Hello World&apos;
                <span className='animate-blink'>|</span>
            </div>
        </div>
    )
}