# SA Business Exchange

A modern business directory and asset marketplace platform for South African businesses to connect, trade, and grow together.

## 🎯 Features

- 🏢 **Business Registration & Verification** - Register your business with verification workflow
- 📋 **Asset Listings** - Create listings for daily/weekly/monthly rentals and sales
- 🔍 **Advanced Search & Filtering** - Find businesses and assets by category, location, and more
- ⭐ **Trust Score System** - Build reputation through successful transactions
- 🗺️ **Province & City-based Discovery** - Discover local businesses and opportunities
- 📊 **Business Analytics Dashboard** - Track your listings and performance
- 📝 **Rental Requests Management** - Manage rental inquiries and bookings
- 📑 **Rental Agreements** - Create and manage formal rental agreements
- 📸 **Fault Reporting System** - Document and report equipment issues with photos
- 💬 **Document Management** - Store and manage rental documents
- 🔒 **Account Settings** - Manage your business profile and preferences

## 📱 Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Session-based (ready for auth implementation)
- **File Storage**: Cloud storage ready (S3, Azure Blob, etc.)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL 12+
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/vr5y6mfgdf-design/sa-business-exchange.git
cd sa-business-exchange
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

Update `.env.local` with your PostgreSQL database URL:
```
DATABASE_URL="postgresql://user:password@localhost:5432/sa_business_exchange"
NEXT_PUBLIC_API_URL="http://localhost:3000"
```

4. **Set up the database**
```bash
# Run migrations
npx prisma migrate dev

# Generate Prisma Client
npx prisma generate
```

5. **Run the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
sa-business-exchange/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── businesses/
│   │   │   │   ├── route.ts              # List & create businesses
│   │   │   │   └── [id]/route.ts         # Get, update, delete business
│   │   │   ├── listings/
│   │   │   │   ├── route.ts              # List & create listings
│   │   │   │   └── [id]/route.ts         # Get, update, delete listing
│   │   │   ├── rental-requests/
│   │   │   │   ├── route.ts              # List & create rental requests
│   │   │   │   └── [id]/route.ts         # Get, update, delete request
│   │   │   ├── agreements/
│   │   │   │   ├── route.ts              # List & create agreements
│   │   │   │   └── [id]/route.ts         # Get, update, delete agreement
│   │   │   ├── fault-reports/
│   │   │   │   ├── route.ts              # List & create fault reports
│   │   │   │   └── [id]/route.ts         # Get, update, delete fault report
│   │   │   ├── documents/
│   │   │   │   └── route.ts              # Manage agreement documents
│   │   │   └── fault-report-images/
│   │   │       └── route.ts              # Manage fault report images
│   │   ├── page.tsx                      # Homepage
│   │   ├── marketplace/
│   │   │   └── page.tsx                  # Browse listings
│   │   ├── register/
│   │   │   └── page.tsx                  # Business registration
│   │   ├── login/
│   │   │   └── page.tsx                  # User login
│   │   ├── forgot-password/
│   │   │   └── page.tsx                  # Password reset
│   │   ├── contact/
│   │   │   └── page.tsx                  # Contact page
│   │   ├── dashboard/
│   │   │   ├── page.tsx                  # Dashboard overview
│   │   │   ├── listings/
│   │   │   │   ├── page.tsx              # My listings
│   │   │   │   └── create/
│   │   │   │       └── page.tsx          # Create new listing
│   │   │   ├── requests/
│   │   │   │   └── page.tsx              # Rental requests received
│   │   │   ├── rentals/
│   │   │   │   └── page.tsx              # My rental requests
│   │   │   ├── agreements/
│   │   │   │   └── page.tsx              # Active agreements
│   │   │   ├── documents/
│   │   │   │   └── page.tsx              # Agreement documents
│   │   │   ├── fault-reports/
│   │   │   │   └── page.tsx              # Fault reports
│   │   │   └── settings/
│   │   │       └── page.tsx              # Account settings
│   │   ├── layout.tsx                    # Root layout
│   │   └── globals.css                   # Global styles
│   └── lib/
│       └── prisma.ts                     # Prisma client singleton
├── prisma/
│   └── schema.prisma                     # Database schema
├── package.json
├── tsconfig.json
├── next.config.js
└── .env.example
```

## 📊 Database Schema

### Businesses Table
Stores company information and verification status
```
- id (UUID, Primary Key)
- businessCode (Unique identifier)
- companyName
- registrationNumber
- industry
- province, city (Location)
- contactFirstName, contactLastName
- email (Unique)
- phone
- logoUrl
- description
- verificationStatus (pending, verified, rejected)
- trustScore (0-100)
- createdAt (Timestamp)
```

### Listings Table
Stores asset/service listings for rent or sale
```
- id (UUID, Primary Key)
- businessId (Foreign Key → Businesses)
- assetCode (Unique identifier)
- title, description
- category
- listingType (rental, sale)
- province, city (Location)
- dailyRate, weeklyRate, monthlyRate (for rentals)
- salePrice (for sales)
- status (active, inactive, sold, rented)
- createdAt (Timestamp)
```

### Rental Requests Table
Manages rental inquiries and bookings
```
- id (UUID, Primary Key)
- listingId (Foreign Key → Listings)
- ownerId (Foreign Key → Businesses) - Asset owner
- requesterId (Foreign Key → Businesses) - Person requesting
- startDate, endDate
- message
- status (pending, approved, rejected, completed)
- createdAt (Timestamp)
```

### Agreements Table
Formal rental agreements between parties
```
- id (UUID, Primary Key)
- agreementCode (Unique identifier)
- listingId (Foreign Key → Listings)
- ownerId (Foreign Key → Businesses)
- renterId (Foreign Key → Businesses)
- startDate, endDate
- rentalFee
- deposit
- status (active, expired, terminated, completed)
- createdAt (Timestamp)
```

### Documents Table
Store agreement-related documents
```
- id (UUID, Primary Key)
- agreementId (Foreign Key → Agreements)
- documentType (e.g., "lease", "insurance", "inspection")
- fileUrl
- createdAt (Timestamp)
```

### Fault Reports Table
Track equipment issues and problems
```
- id (UUID, Primary Key)
- agreementId (Foreign Key → Agreements)
- reportedBy (Foreign Key → Businesses)
- issueType
- description
- status (open, in_progress, resolved, closed)
- createdAt (Timestamp)
```

### Fault Report Images Table
Store photos of equipment issues
```
- id (UUID, Primary Key)
- faultReportId (Foreign Key → Fault Reports)
- imageUrl
- createdAt (Timestamp)
```

## 🔌 API Endpoints

### Businesses
```
GET    /api/businesses                    - List all businesses (paginated)
POST   /api/businesses                    - Create new business
GET    /api/businesses/[id]               - Get business details
PUT    /api/businesses/[id]               - Update business
DELETE /api/businesses/[id]               - Delete business
```

### Listings
```
GET    /api/listings                      - List all listings (with filters)
POST   /api/listings                      - Create new listing
GET    /api/listings/[id]                 - Get listing details
PUT    /api/listings/[id]                 - Update listing
DELETE /api/listings/[id]                 - Delete listing
```

### Rental Requests
```
GET    /api/rental-requests               - List rental requests
POST   /api/rental-requests               - Create rental request
GET    /api/rental-requests/[id]          - Get request details
PUT    /api/rental-requests/[id]          - Update request status
DELETE /api/rental-requests/[id]          - Delete request
```

### Agreements
```
GET    /api/agreements                    - List agreements
POST   /api/agreements                    - Create new agreement
GET    /api/agreements/[id]               - Get agreement details
PUT    /api/agreements/[id]               - Update agreement
DELETE /api/agreements/[id]               - Delete agreement
```

### Documents
```
POST   /api/documents                     - Upload agreement document
```

### Fault Reports
```
GET    /api/fault-reports                 - List fault reports
POST   /api/fault-reports                 - Create fault report
GET    /api/fault-reports/[id]            - Get report details
PUT    /api/fault-reports/[id]            - Update report status
DELETE /api/fault-reports/[id]            - Delete report
```

### Fault Report Images
```
POST   /api/fault-report-images           - Upload fault report image
```

## 🌐 Frontend Pages

### Public Pages
- `/` - Homepage
- `/marketplace` - Browse all listings
- `/login` - User login
- `/register` - Business registration
- `/forgot-password` - Password reset
- `/contact` - Contact form

### Dashboard Pages (Protected)
- `/dashboard` - Dashboard overview
- `/dashboard/listings` - Manage your listings
- `/dashboard/listings/create` - Create new listing
- `/dashboard/requests` - Rental requests you received
- `/dashboard/rentals` - Your rental requests
- `/dashboard/agreements` - Active rental agreements
- `/dashboard/documents` - Agreement documents
- `/dashboard/fault-reports` - Fault reports
- `/dashboard/settings` - Account settings

## 📝 Example API Calls

### Create a Business
```bash
curl -X POST http://localhost:3000/api/businesses \
  -H "Content-Type: application/json" \
  -d '{
    "businessCode": "TECH001",
    "companyName": "Tech Solutions SA",
    "email": "info@techsolutions.co.za",
    "registrationNumber": "2023/123456",
    "industry": "Technology",
    "province": "Gauteng",
    "city": "Johannesburg",
    "contactFirstName": "John",
    "contactLastName": "Doe",
    "phone": "+27123456789",
    "description": "Leading technology solutions provider"
  }'
```

### Create a Listing
```bash
curl -X POST http://localhost:3000/api/listings \
  -H "Content-Type: application/json" \
  -d '{
    "businessId": "550e8400-e29b-41d4-a716-446655440000",
    "assetCode": "ASSET001",
    "title": "Office Equipment Rental",
    "description": "High-quality office equipment",
    "category": "Equipment",
    "listingType": "rental",
    "province": "Gauteng",
    "city": "Johannesburg",
    "dailyRate": 500,
    "weeklyRate": 2500,
    "monthlyRate": 8000,
    "status": "active"
  }'
```

### Create a Rental Request
```bash
curl -X POST http://localhost:3000/api/rental-requests \
  -H "Content-Type: application/json" \
  -d '{
    "listingId": "550e8400-e29b-41d4-a716-446655440000",
    "ownerId": "550e8400-e29b-41d4-a716-446655440001",
    "requesterId": "550e8400-e29b-41d4-a716-446655440002",
    "startDate": "2024-01-15",
    "endDate": "2024-02-15",
    "message": "Interested in renting this equipment",
    "status": "pending"
  }'
```

### Create an Agreement
```bash
curl -X POST http://localhost:3000/api/agreements \
  -H "Content-Type: application/json" \
  -d '{
    "agreementCode": "AGR-2024-001",
    "listingId": "550e8400-e29b-41d4-a716-446655440000",
    "ownerId": "550e8400-e29b-41d4-a716-446655440001",
    "renterId": "550e8400-e29b-41d4-a716-446655440002",
    "startDate": "2024-01-15",
    "endDate": "2024-02-15",
    "rentalFee": 15000,
    "deposit": 5000,
    "status": "active"
  }'
```

### Report a Fault
```bash
curl -X POST http://localhost:3000/api/fault-reports \
  -H "Content-Type: application/json" \
  -d '{
    "agreementId": "550e8400-e29b-41d4-a716-446655440000",
    "reportedBy": "550e8400-e29b-41d4-a716-446655440002",
    "issueType": "Mechanical Damage",
    "description": "Equipment has a dent on the side",
    "status": "open"
  }'
```

## 🛠️ Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Prisma commands
npx prisma migrate dev     # Run migrations
npx prisma generate        # Generate Prisma Client
npx prisma studio          # Open Prisma Studio (UI for database)
```

## 🔐 Security Considerations

- Implement authentication/authorization middleware
- Add input validation on API endpoints
- Use prepared statements (Prisma handles this)
- Add rate limiting for API endpoints
- Implement CORS policies
- Add request logging and monitoring
- Secure file upload handling
- Implement role-based access control (RBAC)

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Other Platforms
- AWS (Amplify, EC2, ECS)
- Google Cloud (Cloud Run, App Engine)
- Azure (App Service)
- DigitalOcean (App Platform)
- Heroku (Eco Dynos)

### Environment Variables for Production
Update production environment variables:
- `DATABASE_URL` - Production PostgreSQL URL
- `NEXT_PUBLIC_API_URL` - Production API URL

## 📚 Next Steps

1. **Authentication** - Add user/business authentication with NextAuth.js
2. **File Uploads** - Implement image uploads for listings and fault reports
3. **Email Notifications** - Send notifications for requests and agreements
4. **Payment Integration** - Add payment processing for deposits
5. **Messaging System** - Real-time messaging between businesses
6. **Admin Dashboard** - Business verification and moderation tools
7. **Mobile App** - React Native mobile version
8. **Analytics** - Business metrics and performance tracking
9. **Reviews & Ratings** - Trust and reputation system
10. **Automated Reports** - PDF generation for agreements and reports

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 💬 Support

For questions, issues, or suggestions, please open a GitHub Issue.

## 👥 Contact

- **Email**: support@sabusinessexchange.co.za
- **GitHub**: [vr5y6mfgdf-design](https://github.com/vr5y6mfgdf-design)
- **Website**: Coming soon

---

**Built with ❤️ for South African businesses**
