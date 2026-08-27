import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const faultReport = await prisma.faultReport.findUnique({
      where: { id: params.id },
      include: {
        agreement: {
          include: {
            listing: true,
            owner: true,
            renter: true,
          },
        },
        reporter: true,
        images: true,
      },
    })

    if (!faultReport) {
      return NextResponse.json(
        { error: 'Fault report not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(faultReport)
  } catch (error) {
    console.error('Error fetching fault report:', error)
    return NextResponse.json(
      { error: 'Failed to fetch fault report' },
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

    const faultReport = await prisma.faultReport.update({
      where: { id: params.id },
      data: {
        status: body.status,
        description: body.description,
        issueType: body.issueType,
      },
      include: {
        agreement: true,
        reporter: true,
        images: true,
      },
    })

    return NextResponse.json(faultReport)
  } catch (error) {
    console.error('Error updating fault report:', error)
    return NextResponse.json(
      { error: 'Failed to update fault report' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.faultReport.delete({
      where: { id: params.id },
    })

    return NextResponse.json({ message: 'Fault report deleted successfully' })
  } catch (error) {
    console.error('Error deleting fault report:', error)
    return NextResponse.json(
      { error: 'Failed to delete fault report' },
      { status: 500 }
    )
  }
}
