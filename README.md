# Rate Limiter Simulator

## 📌 Project Description
This project is a **simple Python rate limiter simulator**.
It processes a list of user requests with timestamps and determines whether each request is **ALLOWED** or **BLOCKED** based on a fixed rate limit rule.

The script simulates rate limiting logic commonly used in APIs.

---

## 🎯 Purpose of the Project
This project is:
- ✅ A learning exercise
- ✅ A rate limiting simulation
- ❌ Not a production-ready rate limiter

It is designed to demonstrate how rate limiting works using time windows.

---

## 🛠 Tech Stack
- **Language:** Python
- **Libraries:** datetime, csv
- **Execution:** Python script
- **Output Format:** CSV

---

## 🏗 How the Code Works
- A predefined list of requests contains:
  - Timestamp
  - User ID
- Each user is allowed **up to 5 requests per minute**
- Requests beyond this limit are marked as **BLOCKED**
- Allowed and blocked requests are stored with a status and reason
- Results are written to an output CSV file

---

## 📂 Project Files
project/
│
├── ratte_limiter.py # Rate limiter script
├── output.csv # Generated output file
├── README.md # Project documentation

Run the script using Python:
```bash
python ratte_limiter.py
Output

The script generates a file named output.csv with the following columns:
timestamp
user
status
reason

Example output (output.csv)
timestamp,user,status,reason
2025-12-16 10:00:01,user1,ALLOWED,
2025-12-16 10:00:50,user1,BLOCKED,Rate limit exceeded

🧪 Console Output
Each request result is also printed to the console during execution.

⚠️ Limitations
Request data is hardcoded in the script
Rate limit values are fixed
No command-line arguments
No automated tests

📌 Conclusion
This project demonstrates a basic rate limiting algorithm using Python and time-based windows.
It is useful for understanding how rate limiting logic can be implemented.
