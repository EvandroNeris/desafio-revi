import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    const monster = await prisma.monster.create({
      data: {
        name: body.name,
        hp: body.hp,
        attack: body.attack,
        defense: body.defense,
        speed: body.speed,
        image_url: body.image_url,
      },
    })

    return NextResponse.json(monster)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Erro ao criar o monstro' }, { status: 500 })
  }
}

export async function GET(request: Request) {
    try {
      const monsters = await prisma.monster.findMany()
      return NextResponse.json(monsters)
    } catch (error) {
      console.error(error)
      return NextResponse.json({ error: 'Erro ao recuperar os monstros' }, { status: 500 })
    }
}     
