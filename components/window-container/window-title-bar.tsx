export default function WindowTitleBar(props: {
    title: string
}) {
    return (
        <div className='bg-[#f0eef0] flex justify-center relative py-0.5 h-6'>
            <div className='flex items-center space-x-1 absolute h-full left-0 top-0 px-2'>
                <div className='h-3 w-3 rounded-full bg-[#FF5F57] border-[0.5px] border-[#00000033]'></div>
                <div className='h-3 w-3 rounded-full bg-[#FEBC2E] border-[0.5px] border-[#00000033]'></div>
                <div className='h-3 w-3 rounded-full bg-[#28C840] border-[0.5px] border-[#00000033]'></div>
            </div>
            <div className='text-sm'>
                {props.title}
            </div>
        </div>
    )
}