🛡️ Bitespeed Identity Resolution
This project implements identity resolution using TypeScript, Node.js, Express, PostgreSQL, and a React frontend. The backend processes user inputs (email & phone number) and maintains a structured identity system.

🚀 Live Links
Frontend: https://bitespeedfronted.netlify.app/
Backend API: https://bitespeedverifications.vercel.app/api/all-contacts {
This Api shows all the documents present in the database , Initially I will be keeping the database empty , So Start Creating Contacts and keep on Looking the Backend End Point to check the documents after any operation. 
}
📌 Features
✅ Backend (Identity Resolution API)
Stores contacts with email and phone numbers.
Ensures no duplicate identities.
Merges contacts if they share the same email or phone number.
Maintains primary & secondary contacts:
Primary Contact → The oldest entry remains primary.
Secondary Contacts → Newer contacts linked to the primary.
Prevents unnecessary duplicate entries.
✅ Frontend (React UI)
A simple form to input email and phone number.
Sends data via POST request to the backend.
Displays processed contact response from the backend.
🔧 Tech Stack
Backend
Node.js + Express.js (API)
TypeScript (Strict type safety)
PostgreSQL + pg-promise (Database)
Vercel (Deployment)
Frontend
React.js (User interface)
Axios (API requests)
Vercel (Deployment)
📡 API Endpoints
1️⃣ Identify or Create Contact
POST /identify

Request Body
json
Copy
Edit
{
  "email": "george@hillvalley.edu",
  "phoneNumber": "717171"
}
Response
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
🛠️ Setup Instructions
Backend
Clone the repo:
bash
Copy
Edit
git clone <your-repo-url>
cd backend
Install dependencies:
bash
Copy
Edit
npm install
Set up .env file:
ini
Copy
Edit
PORT=5000
DATABASE_URL=your_postgresql_connection_string
Run server:
bash
Copy
Edit
npm run dev
Frontend
Navigate to frontend folder:
bash
Copy
Edit
cd frontend
Install dependencies:
bash
Copy
Edit
npm install
Start frontend:
bash
Copy
Edit
npm start
📜 Example Scenarios
🏷️ Case 1: New User
🔹 If an email & phone number do not exist → Create new primary contact.

🏷️ Case 2: Same Email, Different Phone
🔹 If a new phone number is added with an existing email, it links to the primary contact.

🏷️ Case 3: Same Phone, Different Email
🔹 If a new email is added with an existing phone number, it links to the primary contact.

🏷️ Case 4: Merging Two Existing Contacts
🔹 If two separate primary contacts (with the same email & phone) exist,
the older one remains primary, and the other becomes secondary.

🎯 Future Improvements
Add authentication for API security.
Implement a better UI with loading states.
Introduce a dashboard to visualize contacts.
👨‍💻 Contributors
Ankush – Backend & Frontend Development
Feel free to fork & contribute! 🚀
