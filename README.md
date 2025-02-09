
---

# 🛡️ Bitespeed Identity Resolution  

This project implements **identity resolution** using **TypeScript, Node.js, Express, PostgreSQL**, and a **React frontend**.  
The backend processes user inputs (**email & phone number**) and maintains a structured identity system.  

---

## 🚀 Live Links  

- **Frontend:** [Bitespeed Frontend](https://bitespeedfronted.netlify.app/)  
- **Backend API:** [Bitespeed Backend](https://bitespeedverifications.vercel.app/api/all-contacts)  

> **Note:** The `/all-contacts` API displays all documents in the database.  
> Initially, the database will be **empty**, so start **creating contacts** and observe changes in the documents at the Backend /api/all-contacts.

---

## 📌 Features  

### ✅ Backend (Identity Resolution API)  
✔️ Stores **contacts** with email and phone numbers.  
✔️ Ensures **no duplicate identities**.  
✔️ **Merges contacts** if they share the same email or phone number.  
✔️ Maintains **primary & secondary contacts**:  
   - **Primary Contact** → The oldest entry remains primary.  
   - **Secondary Contacts** → Newer contacts are linked to the primary.  
✔️ **Prevents unnecessary duplicate entries**.  

### ✅ Frontend (React UI)  
✔️ A **simple form** to input **email** and **phone number**.  
✔️ Sends data via **POST request** to the backend.  
✔️ Displays **processed contact response** from the backend.  

---

## 🔧 Tech Stack  

### **Backend**  
- 🟢 **Node.js** + **Express.js** (API)  
- 🔵 **TypeScript** (Strict type safety)  
- 🟠 **PostgreSQL** + **pg-promise** (Database)  
- ☁️ **Vercel** (Deployment)  

### **Frontend**  
- ⚛️ **React.js** (User Interface)  
- 🌍 **Axios** (API requests)  
- ☁️ **Vercel** (Deployment)  

---

## 📡 API Endpoints  

### **1️⃣ Identify or Create Contact**  
**POST** `/identify`  

#### **Request Body**  
```json
{
  "email": "george@hillvalley.edu",
  "phoneNumber": "717171"
}
```

#### **Response**  
```json
{
  "contact": {
    "primaryContactId": 11,
    "emails": ["george@hillvalley.edu", "biffsucks@hillvalley.edu"],
    "phoneNumbers": ["919191", "717171"],
    "secondaryContactIds": [27]
  }
}
```

---

## 🛠️ Setup Instructions  

### **Backend**  
1. **Clone the repository:**  
   ```bash
   git clone <your-repo-url>
   cd backend
   ```
2. **Install dependencies:**  
   ```bash
   npm install
   ```
3. **Set up `.env` file:**  
   ```
   PORT=5000
   DATABASE_URL=your_postgresql_connection_string
   ```
4. **Run the server:**  
   ```bash
   npm run dev
   ```

### **Frontend**  
1. **Navigate to the frontend folder:**  
   ```bash
   cd frontend
   ```
2. **Install dependencies:**  
   ```bash
   npm install
   ```
3. **Start the frontend:**  
   ```bash
   npm start
   ```

---

## 📜 Example Scenarios  

### 🏷️ **Case 1: New User**  
🔹 If an **email & phone number** do not exist → **Create new primary contact**.  

### 🏷️ **Case 2: Same Email, Different Phone**  
🔹 If a **new phone number** is added with an **existing email**, it **links to the primary contact**.  

### 🏷️ **Case 3: Same Phone, Different Email**  
🔹 If a **new email** is added with an **existing phone number**, it **links to the primary contact**.  

### 🏷️ **Case 4: Merging Two Existing Contacts**  
🔹 If two **separate primary contacts** (with the same email & phone) exist, the **older one remains primary**, and the other becomes **secondary**.  

---

## 🎯 Future Improvements  

🔹 Add **authentication** for API security.  
🔹 Implement a **better UI** with loading states.  
🔹 Introduce a **dashboard to visualize contacts**.  

---

## 👨‍💻 Contributors  

- **Ankush** – *Backend & Frontend Development*  

💡 **Feel free to fork & contribute!** 🚀  
