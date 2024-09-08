import { X } from "@phosphor-icons/react/dist/ssr";

export default function ScreenModal({ children, onClose = () => {} }) {
    return (
        <div onClick={onClose} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div onClick={e => e.stopPropagation()} className="z-full bg-white rounded-xl p-8 flex flex-col items-end gap-3">
                {children}
            </div>
        </div>
    );
}