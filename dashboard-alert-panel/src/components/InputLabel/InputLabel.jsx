export default function InputLabel({label, defaultValue, onChange = () => {}}){
    return <div className="flex flex-col gap-2 p-2">
        <label>{label}</label>
        <input onChange={onChange} type="text" defaultValue={defaultValue} className="border-2 border-gray-300 rounded outline-none p-1"/>
    </div>
}