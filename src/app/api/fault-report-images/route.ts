import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const image = await prisma.faultReportImage.create({
      data: {
        faultReportId: body.faultReportId,
        imageUrl: body.imageUrl,
      },
    })

    return NextResponse.json(image, { status: 201 })
  } catch (error) {
    console.error('Error creating fault report image:', error)
    return NextResponse.json(
      { error: 'Failed to create fault report image' },
      { status: 500 }
    )
  }
}
