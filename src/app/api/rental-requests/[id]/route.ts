import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const rentalRequest = await prisma.rentalRequest.findUnique({
      where: { id: params.id },
      include: {
        listing: true,
        owner: true,
        requester: true,
      },
    })

    if (!rentalRequest) {
      return NextResponse.json(
        { error: 'Rental request not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(rentalRequest)
  } catch (error) {
    console.error('Error fetching rental request:', error)
    return NextResponse.json(
      { error: 'Failed to fetch rental request' },
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

    const rentalRequest = await prisma.rentalRequest.update({
      where: { id: params.id },
      data: {
        status: body.status,
        message: body.message,
      },
      include: {
        listing: true,
        owner: true,
        requester: true,
      },
    })

    return NextResponse.json(rentalRequest)
  } catch (error) {
    console.error('Error updating rental request:', error)
    return NextResponse.json(
      { error: 'Failed to update rental request' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.rentalRequest.delete({
      where: { id: params.id },
    })

    return NextResponse.json({ message: 'Rental request deleted successfully' })
  } catch (error) {
    console.error('Error deleting rental request:', error)
    return NextResponse.json(
      { error: 'Failed to delete rental request' },
      { status: 500 }
    )
  }
}
