export default function RoundedButton({text = "Button", onClick = () => {}}){
    return <div onClick={onClick} className="cursor-pointer min-w-32 h-8 px-4 bg-emerald-800 flex justify-center items-center rounded-full text-white">
        {text}
    </div>
}