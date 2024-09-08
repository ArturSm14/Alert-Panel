'use client';
import EmployeeFormModalContent from "@/components/EmployeeFormModalContent/EmployeeFormModalContent";
import ScreenModal from "@/components/ScreenModal/ScreenModal";
import { Pen, Plus, User } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

export default function Employees() {
    const [openedModal, setOpenedModal] = useState(false);

    const [employeeToEdit, setEmployeeToEdit] = useState(null);

    const [employees, setEmployees] = useState([
        {
            name: "RICARDO",
            cpf: "123.456.789-00",
            birthday: "01/01/1990",
            email: "ricardo@gmail.com",
            phone: "(11) 99999-9999",
            role: "Desenvolvedor"
        }
    ]);

    function setModal(bool, employee) {
        setOpenedModal(bool);
        setEmployeeToEdit(employee);
    }

    return (
        <main className="flex min-h-screen gap-4 flex-grow flex-col items-start justify-start p-6">
            {openedModal && <ScreenModal onClose={() => setOpenedModal(false)}>
                <EmployeeFormModalContent employee={employeeToEdit} />
            </ScreenModal>}
        <h1 className="text-2xl font-bold">Colaboradores</h1>
        <div onClick={() => setModal(true)} className="cursor-pointer flex p-1 border-2 border-emerald-800 rounded">
            <Plus size={20} className="text-emerald-800" />
            <p className="text-emerald-800">Adicionar colaborador</p>
        </div>
        <div className="flex flex-col gap-2">
            {employees.map((employee) => (
                <div key={employee.name} className="flex p-2 gap-2">
                    <User size={20} className="text-emerald-800" />
                    <p>{employee.name} - {employee.cpf}</p>
                    <Pen onClick={() => setModal(true, employee)} size={20} className="text-emerald-800 cursor-pointer" />
                </div>
            ))}
        </div>
    </main>
    )
}