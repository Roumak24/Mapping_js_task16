// Array of student objects (25 students)
const students = [
  { name: "Salmaan Ahmed",    marks: 38, class: "3rd",  address: "India" },
  { name: "Riya Sharma",      marks: 85, class: "10th", address: "123, ABC Colony, Delhi" },
  { name: "Rohan Patel",      marks: 70, class: "12th", address: "456, XYZ Street, Mumbai" },
  { name: "Priya Singh",      marks: 95, class: "8th",  address: "789, PQR Nagar, Bangalore" },
  { name: "Ankit Gupta",      marks: 60, class: "9th",  address: "101, LMN Road, Kolkata" },
  { name: "Neha Verma",       marks: 80, class: "11th", address: "222, DEF Avenue, Chennai" },
  { name: "Manoj Kumar",      marks: 75, class: "10th", address: "333, GHI Lane, Hyderabad" },
  { name: "Pooja Mishra",     marks: 88, class: "12th", address: "444, STU Colony, Pune" },
  { name: "Rajesh Singhania", marks: 92, class: "9th",  address: "555, VWX Street, Jaipur" },
  { name: "Aman Khan",        marks: 67, class: "7th",  address: "12, Park Street, Kolkata" },
  { name: "Sneha Das",        marks: 91, class: "11th", address: "45, Salt Lake, Kolkata" },
  { name: "Vikram Rao",       marks: 55, class: "10th", address: "78, MG Road, Bangalore" },
  { name: "Ananya Iyer",      marks: 97, class: "12th", address: "9, Anna Nagar, Chennai" },
  { name: "Karan Malhotra",   marks: 72, class: "9th",  address: "34, Sector 15, Chandigarh" },
  { name: "Divya Nair",       marks: 83, class: "8th",  address: "21, Marine Drive, Kochi" },
  { name: "Arjun Reddy",      marks: 64, class: "11th", address: "56, Banjara Hills, Hyderabad" },
  { name: "Meera Joshi",      marks: 89, class: "10th", address: "67, Shivaji Nagar, Pune" },
  { name: "Sahil Mehta",      marks: 46, class: "6th",  address: "88, CG Road, Ahmedabad" },
  { name: "Tanvi Kulkarni",   marks: 93, class: "12th", address: "14, FC Road, Pune" },
  { name: "Imran Sheikh",     marks: 58, class: "9th",  address: "23, Bandra West, Mumbai" },
  { name: "Kavya Menon",      marks: 86, class: "7th",  address: "5, MG Road, Thiruvananthapuram" },
  { name: "Harsh Vardhan",    marks: 78, class: "11th", address: "90, Civil Lines, Lucknow" },
  { name: "Ishita Bose",      marks: 94, class: "10th", address: "31, Ballygunge, Kolkata" },
  { name: "Nikhil Saxena",    marks: 52, class: "8th",  address: "17, Hazratganj, Lucknow" },
  { name: "Shreya Banerjee",  marks: 90, class: "9th",  address: "62, Howrah Maidan, Howrah" }
];

const container = document.getElementById("studentContainer");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

// Render cards using map()
function renderStudents(list) {
  if (list.length === 0) {
    container.innerHTML = '<div class="no-result">No students found</div>';
    return;
  }
  container.innerHTML = list.map(s => `
    <div class="card">
      <p>Student Name: <b>${s.name}</b></p>
      <p>Marks: <b>${s.marks}%</b></p>
      <p>Class: <b>${s.class}</b></p>
      <p>Address: <b>${s.address}</b></p>
    </div>
  `).join("");
}

// Filter students by name using filter()
function searchStudents() {
  const text = searchInput.value.trim().toLowerCase();
  const result = students.filter(s => s.name.toLowerCase().includes(text));
  renderStudents(result);
}

// Real-time search while typing + on button click
searchInput.addEventListener("input", searchStudents);
searchBtn.addEventListener("click", searchStudents);

// Initial render
renderStudents(students);