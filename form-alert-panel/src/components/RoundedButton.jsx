import Link from "next/link";

export default function RoundedButton({ text, routeLink = "/" }) {
    return <Link className="self-center" href={routeLink}>
        <div className="bg-white font-medium rounded-full p-2 text-center text-green-700 max-w-32 px-6 cursor-pointer">
        {text}
    </div>
    </Link>
}