export default function Container({ children }) {
    return <main className="bg-[#33a166] flex min-h-screen flex-col items-center justify-center p-24">
        <div className="max-w-screen md:max-w-80 flex flex-col gap-4 text-white">
            {children}
        </div>
    </main>
}