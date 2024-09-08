import { X } from "@phosphor-icons/react/dist/ssr";
import RoundedButton from "../RoundedButton/RoundedButton";
import SmallCard from "../SmallCard/SmallCard";

export default function RoomModalContent({
    roomCapacity = "30",
    descriptionOfFail = "Sem ar-condicionado",
    onClose = () => { }
}) {
    return <div className="min-w-80 flex flex-col gap-2">
        <div className="flex justify-between">
            <SmallCard number="302" variant="orange" />
            <div className="flex-shrink">
                <X size={24} color="black" className="cursor-pointer" onClick={onClose} />
            </div>
        </div>
        <p>Capacidade de alunos: {roomCapacity}</p>
        <p>Descrição do problema: {descriptionOfFail}</p>
        <div className="flex gap-4">
            <RoundedButton text="Trocar sala" />
            <RoundedButton text="Sala reparada" />
        </div>
    </div>
}