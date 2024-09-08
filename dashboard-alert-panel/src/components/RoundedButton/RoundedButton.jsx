export default function RoundedButton({text = "Button"}){
    return <div className="cursor-pointer min-w-32 h-8 px-4 bg-green-600 flex justify-center items-center rounded-full text-white">
        {text}
    </div>
}