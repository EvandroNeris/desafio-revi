"use client"

import { useState } from "react"
import styles from "./monster.module.css"
import { useRouter } from "next/navigation"

export default function Monster() {
  const router = useRouter()
  const [selectedImage, setSelectedImage] = useState("../../assets/images/monsters/monster-1.png")
  const [form, setForm] = useState({
    name: '',
    attack: 0,
    defense: 0,
    speed: 0,
    image_url: '',
    hp: 100
  })

  const handleImageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedImage(event.target.value)
    setForm((prev: any) => ({ ...prev, image_url: event.target.value }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const response = await fetch('/api/monsters', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...form,
        hp: +form.hp,
        attack: +form.attack,
        defense: +form.defense,
        speed: +form.speed
      }),
    })
  
    await response.json()

    router.push("/arena")
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
    <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
      <h1 className="text-2xl font-bold text-center mb-6 text-black">Cadastrar Monstro</h1>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Nome */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nome:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            onChange={valeu => setForm((prev: any) => ({ ...prev, name: valeu.target.value }))}
            required
          />
        </div>

        {/* Ataque */}
        <div>
          <label htmlFor="attack" className="block text-sm font-medium text-gray-700">
            Ataque:
          </label>
          <select
            id="attack"
            name="attack"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            onChange={valeu => setForm((prev: any) => ({ ...prev, attack: valeu.target.value }))}
            required
          >
            {Array.from({ length: 21 }, (_, i) => i * 5).map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>

        {/* Defesa */}
        <div>
          <label htmlFor="defense" className="block text-sm font-medium text-gray-700">
            Defesa:
          </label>
          <select
            id="defense"
            name="defense"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            onChange={valeu => setForm((prev: any) => ({ ...prev, defense: valeu.target.value }))}
            required
          >
            {Array.from({ length: 21 }, (_, i) => i * 5).map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>

        {/* Velocidade */}
        <div>
          <label htmlFor="speed" className="block text-sm font-medium text-gray-700">
            Velocidade:
          </label>
          <select
            id="speed"
            name="speed"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            onChange={valeu => setForm((prev: any) => ({ ...prev, speed: valeu.target.value }))}
            required
          >
            {Array.from({ length: 21 }, (_, i) => i * 5).map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>

        {/* Imagem */}
        <div>
          <label htmlFor="image_url" className="block text-sm font-medium text-gray-700">
            Imagem:
          </label>
          <select
            id="image_url"
            name="image_url"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            onChange={handleImageChange}
            required
          >
            <option value="../../assets/images/monsters/monster-1.png">Monstro 1</option>
            <option value="../../assets/images/monsters/monster-2.png">Monstro 2</option>
            <option value="../../assets/images/monsters/monster-3.png">Monstro 3</option>
            <option value="../../assets/images/monsters/monster-4.png">Monstro 4</option>
            <option value="../../assets/images/monsters/monster-5.png">Monstro 5</option>
            <option value="../../assets/images/monsters/monster-6.png">Monstro 6</option>
            <option value="../../assets/images/monsters/monster-7.png">Monstro 7</option>
            <option value="../../assets/images/monsters/monster-8.png">Monstro 8</option>
            <option value="../../assets/images/monsters/monster-9.png">Monstro 9</option>
          </select>
        </div>

        {/* Pré-visualização da Imagem */}
        <div className="flex flex-col items-center mt-4">
          <img src={selectedImage} alt="Monstro" className={styles.monsterPreview} />
          <span className="text-sm text-gray-500">Pré-visualização do Monstro</span>
        </div>

        {/* Botões */}
        <div className="flex justify-between mt-6">
          <button type="reset" className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
            Limpar
          </button>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}