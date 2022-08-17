import Link from "next/link";

export default function NotFound() {
    return (
        <div>
            <img  class="object-center hover:object-top h-50 w-96" src = ".\offline.svg" alt="404"/>
            <h1 className="text-3xl">Ops! Endereço não encontrado...</h1>
            <Link href="/"><button><h2>Página inicial</h2></button></Link>
        </div>
    )
}