import {ColorScheme} from "@/types/color-scheme";
import ColorSchemeItem from "@/components/color-schemes-list/color-scheme-item";

export default function ColorSchemesList(props: {
    selectedColorScheme: ColorScheme
    colorSchemes: ColorScheme[]
    onColorSchemeSelected?: (colorScheme: ColorScheme) => void
}) {
    return (
        <div className='overflow-y-auto'>
            <div className='flex flex-col gap-2'>
                {
                    props.colorSchemes.map(colorScheme => (
                        <ColorSchemeItem
                            key={colorScheme.name}
                            colorScheme={colorScheme}
                            onColorSchemeSelected={props.onColorSchemeSelected}
                            isSelected={props.selectedColorScheme.name === colorScheme.name}
                        />
                    ))
                }
            </div>
        </div>
    )
}