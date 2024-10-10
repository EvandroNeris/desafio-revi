"use client"

import Link from "next/link"

export default function Home() {
  return (
    <div className="bg-white grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h2 className="text-black">Bem vindo a Batalha de monstros!</h2>
      <div className="flex flex-col gap-4">
        <p className="text-black">Escolha o que quer fazer:</p>
        <Link legacyBehavior href="/arena">
          <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Ir para a arena
          </a>
        </Link>
        <Link legacyBehavior href="/monster">
          <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Cadastrar monstros
          </a>
        </Link>
      </div>
    </div>
  )
}
