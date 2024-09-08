
import { useRouter } from "next/navigation";

export default function SideMenuItem({title = "Dashboard", icon, path}) {
    const Icon = icon;

    const router = useRouter();

    function goToPath() {
        if (path) {
            router.push(path);
        }
    }

    return <div onClick={goToPath} className="cursor-pointer min-w-full p-2 bg-green-700 max-h-10 text-white rounded text-sm flex items-center">
    {icon && <div className="mr-2">
                <Icon size={20} />
        </div>}
    {title}
</div>
}