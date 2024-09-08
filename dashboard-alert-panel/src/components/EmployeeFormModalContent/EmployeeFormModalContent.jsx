import InputLabel from "../InputLabel/InputLabel";

export default function EmployeeFormModalContent({employee}){
    return <div className="flex flex-col gap-2">
        <div className="flex gap-2">
                <InputLabel label="Nome" defaultValue={employee?.name} />
                <InputLabel label="CPF" defaultValue={employee?.cpf} />
                <InputLabel label="Data de nascimento" defaultValue={employee?.birthday} />
        </div>
        <div className="flex gap-2">
                <InputLabel label="E-mail" defaultValue={employee?.email} />
                <InputLabel label="Telefone" defaultValue={employee?.phone} />
                <div className="flex"></div>
        </div>
        <div className="flex gap-2">
                <InputLabel label="Cargo" defaultValue={employee?.role} />
                <div className="flex"></div>
                <div className="flex"></div>
        </div>
        <div className="flex gap-2 self-end">
                <button className="bg-emerald-800 text-white p-2 rounded-full">Salvar</button>
        </div>        
    </div>
}