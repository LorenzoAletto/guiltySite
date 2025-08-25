export default function Header(){
    return (
        <header class="bg-red-900 text-white p-4 flex justify-between items-center">
        <h1 class="text-xl font-bold">Header</h1>
        <nav>
            <ul class="flex gap-4">
                <li><a href="/" class="hover:underline">Inicio</a></li>
                <li><a href="/about" class="hover:underline">Sobre GGST</a></li>
            </ul>
        </nav>

        </header>
    );
}