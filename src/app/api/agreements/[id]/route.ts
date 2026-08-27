import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const agreement = await prisma.agreement.findUnique({
      where: { id: params.id },
      include: {
        listing: true,
        owner: true,
        renter: true,
        documents: true,
        faultReports: {
          include: {
            images: true,
          },
        },
      },
    })

    if (!agreement) {
      return NextResponse.json(
        { error: 'Agreement not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(agreement)
  } catch (error) {
    console.error('Error fetching agreement:', error)
    return NextResponse.json(
      { error: 'Failed to fetch agreement' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()

    const agreement = await prisma.agreement.update({
      where: { id: params.id },
      data: {
        status: body.status,
        rentalFee: body.rentalFee,
        deposit: body.deposit,
      },
      include: {
        listing: true,
        owner: true,
        renter: true,
        documents: true,
      },
    })

    return NextResponse.json(agreement)
  } catch (error) {
    console.error('Error updating agreement:', error)
    return NextResponse.json(
      { error: 'Failed to update agreement' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.agreement.delete({
      where: { id: params.id },
    })

    return NextResponse.json({ message: 'Agreement deleted successfully' })
  } catch (error) {
    console.error('Error deleting agreement:', error)
    return NextResponse.json(
      { error: 'Failed to delete agreement' },
      { status: 500 }
    )
  }
}
