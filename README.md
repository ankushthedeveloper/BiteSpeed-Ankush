Bitespeed Identity Resolution System
Overview
The Bitespeed Identity Resolution System is designed to efficiently manage and resolve user identities based on their email and phone number. The backend is powered by Node.js, TypeScript, Express, and PostgreSQL, while the frontend is built using React.js.

🔗 Live Demo:

Frontend: https://bitespeedfronted.netlify.app/


Backend API: https://bitespeedverifications.vercel.app/api/all-contacts


Features
🚀 Backend (Node.js + TypeScript + PostgreSQL)
✅ Identity Resolution Algorithm: Ensures users are linked correctly based on email and phone number.
✅ Primary & Secondary Contact Management: Converts primary contacts to secondary if a duplicate entry is detected.
✅ Efficient Database Querying: Uses PostgreSQL with optimized queries for fast lookups.
✅ REST API Endpoints: Provides endpoints to create, fetch, and manage user identities.
🎨 Frontend (React.js)
✅ Simple & Intuitive UI: Allows users to input email and phone number.
✅ API Integration: Sends user data to the backend and displays the resolved identity response.
✅ Real-Time Response Display: Shows resolved contact details fetched from the backend.
API Endpoints & Functionality
🔹 1. Identify or Create Contact
Endpoint:

http
Copy
Edit
POST /identify
Request Body:

json
Copy
Edit
{
  "email": "george@hillvalley.edu",
  "phoneNumber": "919191"
}
Response:

json
Copy
Edit
{
  "contact": {
    "primaryContactId": 11,
    "emails": ["george@hillvalley.edu", "biffsucks@hillvalley.edu"],
    "phoneNumbers": ["919191", "717171"],
    "secondaryContactIds": [27]
  }
}
Functionality:

If a new user is found, they are stored as a primary contact.
If an existing user is found with the same email or phone, they are linked under one identity.
If two primary users have a shared identifier, the latest created user is converted to secondary under the earliest primary contact.
Project Structure
pgsql
Copy
Edit
bitespeed-identity-resolution/
│── backend/
│   ├── src/
│   │   ├── api/
│   │   │   ├── server.ts
│   │   │   ├── controllers/
│   │   │   ├── services/
│   │   │   ├── models/
│   │   │   ├── repositories/
│   ├── dist/ (Compiled TypeScript Output)
│   ├── package.json
│   ├── tsconfig.json
│── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.tsx
│   │   ├── index.tsx
│   ├── public/
│   ├── package.json
│   ├── .env
│── README.md
How to Run Locally
1️⃣ Clone the Repository
sh
Copy
Edit
git clone https://github.com/ankushthedeveloper/bitespeed-identity-resolution.git
cd bitespeed-identity-resolution
2️⃣ Backend Setup
sh
Copy
Edit
cd backend
npm install
cp .env.example .env   # Configure your database
npm run dev
3️⃣ Frontend Setup
sh
Copy
Edit
cd frontend
npm install
npm start
Deployment
Backend (Vercel)
Build command:
sh
Copy
Edit
npm run build
Start command:
sh
Copy
Edit
npm run start
Vercel Environment Variables:
ini
Copy
Edit
PORT=5000
DATABASE_URL=your_postgresql_url
Frontend (Netlify)
Build Command:
sh
Copy
Edit
npm run build
Publish Directory:
nginx
Copy
Edit
build
Contributing 🤝
Feel free to fork this repo, raise PRs, or open issues.
Follow the contribution guidelines (if applicable).
License 📜
This project is licensed under the MIT License.

Author ✨
👨‍💻 Ankush

GitHub: @ankush
LinkedIn: @ankush
