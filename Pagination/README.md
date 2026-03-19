# 📄 Pagination (React)

## 📌 What is Pagination?

Pagination is a technique used to divide a large set of data into smaller chunks (pages).
Instead of displaying all data at once, we show a limited number of items per page (e.g., 10 items), making the UI more user-friendly and performant.

---

## 🚀 Features

* Display limited items per page
* Navigate using page numbers
* Next / Previous buttons
* Dynamic page generation

---

## Live Link:
"https://glittery-lollipop-9ad462.netlify.app/"
## 🛠️ Concepts I Learned

### 1. State Management using `useState`

I learned how to store API data (or any list of items) inside React state and update it dynamically.

```js
const [data, setData] = useState([]);
```

---

### 2. Dynamic Page Number Generation

Instead of manually writing page numbers, I used:

```js
Array.from({ length: totalPages }, (_, i) => i + 1)
```

This helped me generate page numbers dynamically based on data length.

---

### 3. Array Methods: `slice()` + `map()`

I used `slice()` to limit the number of items per page:

```js
const currentItems = data.slice(startIndex, startIndex + itemsPerPage);
```

Then used `map()` to render them:

```js
currentItems.map(item => <li>{item}</li>)
```

👉 This helped me show only **10 items per page**

---

### 4. Pagination Logic

* Calculate starting index:

```js
const startIndex = (currentPage - 1) * itemsPerPage;
```

* Calculate total pages:

```js
const totalPages = Math.ceil(data.length / itemsPerPage);
```

---

## 🧠 Key Learnings

* How to break large data into smaller chunks
* How to handle UI state efficiently
* Writing clean and dynamic logic instead of hardcoding
* Importance of reusable logic in frontend development

---

## ▶️ How to Run

```bash
npm install
npm run dev
```

---

## 🔮 Future Improvements

* Add API-based pagination (server-side)
* Add ellipsis (...) for large page numbers
* Improve UI/UX design
* Add loading states

---

## 👨‍💻 Author

Aman Uniyal
LinkedIn: https://www.linkedin.com/in/aman-uniyal-1280b628b
