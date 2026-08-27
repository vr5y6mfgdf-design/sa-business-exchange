import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const status = searchParams.get('status')
    const agreementId = searchParams.get('agreementId')
    const skip = (page - 1) * limit

    const where: any = {}
    if (status) where.status = status
    if (agreementId) where.agreementId = agreementId

    const faultReports = await prisma.faultReport.findMany({
      where,
      skip,
      take: limit,
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
      orderBy: { createdAt: 'desc' },
    })

    const total = await prisma.faultReport.count({ where })

    return NextResponse.json({
      data: faultReports,
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error('Error fetching fault reports:', error)
    return NextResponse.json(
      { error: 'Failed to fetch fault reports' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const faultReport = await prisma.faultReport.create({
      data: {
        agreementId: body.agreementId,
        reportedBy: body.reportedBy,
        issueType: body.issueType,
        description: body.description,
        status: body.status || 'open',
      },
      include: {
        agreement: true,
        reporter: true,
        images: true,
      },
    })

    return NextResponse.json(faultReport, { status: 201 })
  } catch (error) {
    console.error('Error creating fault report:', error)
    return NextResponse.json(
      { error: 'Failed to create fault report' },
      { status: 500 }
    )
  }
}
