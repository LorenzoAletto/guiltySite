export default function Header(){
    return (
        <header className="bg-red-900 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Header</h1>
        <nav>
            <ul className="flex gap-4">
                <li><a href="/" className="hover:underline">Inicio</a></li>
                <li><a href="/about" className="hover:underline">Sobre GGST</a></li>
            </ul>
        </nav>

        </header>
    );
}