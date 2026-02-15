const db = {
  students: [
    {
      id: "23CS1001",
      pin: "20050114",
      name: "Aarav Singh",
      program: "B.Tech CSE",
      semester: "3rd Semester",
      advisor: "Dr. Kavita Rao",
      email: "aarav.singh23@campus.edu",
      status: "Active",
      cgpa: 8.4,
      // Timetable
      timetable: [
        { day: "Monday", slots: [
          { time: "09:00-10:00", subject: "Data Structures", room: "LR-301", faculty: "Dr. Batra" },
          { time: "10:00-11:00", subject: "Discrete Maths", room: "LR-205", faculty: "Prof. Malhotra" },
          { time: "11:00-12:00", subject: "Break", room: "-", faculty: "-" },
          { time: "12:00-01:00", subject: "Digital Logic", room: "LR-102", faculty: "Dr. Ananya" },
          { time: "02:00-04:00", subject: "DSA Lab", room: "Lab-A", faculty: "Dr. Batra" },
        ]},
        { day: "Tuesday", slots: [
          { time: "09:00-10:00", subject: "Data Structures", room: "LR-301", faculty: "Dr. Batra" },
          { time: "10:00-11:00", subject: "Digital Logic", room: "LR-102", faculty: "Dr. Ananya" },
          { time: "11:00-12:00", subject: "Break", room: "-", faculty: "-" },
          { time: "12:00-01:00", subject: "Discrete Maths", room: "LR-205", faculty: "Prof. Malhotra" },
          { time: "02:00-03:00", subject: "Sports", room: "Ground", faculty: "-" },
        ]},
        { day: "Wednesday", slots: [
          { time: "09:00-10:00", subject: "Discrete Maths", room: "LR-205", faculty: "Prof. Malhotra" },
          { time: "10:00-11:00", subject: "Data Structures", room: "LR-301", faculty: "Dr. Batra" },
          { time: "11:00-12:00", subject: "Break", room: "-", faculty: "-" },
          { time: "12:00-02:00", subject: "Digital Logic Lab", room: "Lab-C", faculty: "Dr. Ananya" },
        ]},
        { day: "Thursday", slots: [
          { time: "09:00-10:00", subject: "Digital Logic", room: "LR-102", faculty: "Dr. Ananya" },
          { time: "10:00-11:00", subject: "Data Structures", room: "LR-301", faculty: "Dr. Batra" },
          { time: "11:00-12:00", subject: "Break", room: "-", faculty: "-" },
          { time: "12:00-01:00", subject: "Discrete Maths", room: "LR-205", faculty: "Prof. Malhotra" },
          { time: "02:00-03:00", subject: "Tutorial", room: "LR-101", faculty: "TA" },
        ]},
        { day: "Friday", slots: [
          { time: "09:00-10:00", subject: "Data Structures", room: "LR-301", faculty: "Dr. Batra" },
          { time: "10:00-11:00", subject: "Digital Logic", room: "LR-102", faculty: "Dr. Ananya" },
          { time: "11:00-12:00", subject: "Break", room: "-", faculty: "-" },
          { time: "12:00-01:00", subject: "Discrete Maths", room: "LR-205", faculty: "Prof. Malhotra" },
        ]},
      ],
      // Semester-wise Grades
      grades: [
        {
          semester: "1st Semester",
          courses: [
            { code: "CS101", name: "Programming Fundamentals", credits: 4, grade: "A", gradePoint: 9, obtained: 36 },
            { code: "MA101", name: "Engineering Mathematics I", credits: 4, grade: "A-", gradePoint: 8, obtained: 32 },
            { code: "PH101", name: "Applied Physics", credits: 3, grade: "B+", gradePoint: 7, obtained: 21 },
            { code: "EE101", name: "Basic Electronics", credits: 3, grade: "A", gradePoint: 9, obtained: 27 },
          ],
          sgpa: 8.3,
          totalCredits: 14,
        },
        {
          semester: "2nd Semester",
          courses: [
            { code: "CS102", name: "Data Structures Basics", credits: 4, grade: "A+", gradePoint: 10, obtained: 40 },
            { code: "MA102", name: "Engineering Mathematics II", credits: 4, grade: "A", gradePoint: 9, obtained: 36 },
            { code: "CH101", name: "Engineering Chemistry", credits: 3, grade: "B+", gradePoint: 7, obtained: 21 },
            { code: "ME101", name: "Engineering Mechanics", credits: 3, grade: "A-", gradePoint: 8, obtained: 24 },
          ],
          sgpa: 8.6,
          totalCredits: 14,
        },
        {
          semester: "3rd Semester (Current)",
          courses: [
            { code: "CS201", name: "Data Structures Advanced", credits: 4, grade: "-", gradePoint: 0, obtained: 0 },
            { code: "CS202", name: "Discrete Mathematics", credits: 4, grade: "-", gradePoint: 0, obtained: 0 },
            { code: "CS203", name: "Digital Logic Design", credits: 3, grade: "-", gradePoint: 0, obtained: 0 },
          ],
          sgpa: null,
          totalCredits: 11,
        },
      ],
      attendance: [
        { course: "Data Structures", total: 42, present: 38, faculty: "Dr. Batra" },
        { course: "Discrete Maths", total: 40, present: 35, faculty: "Prof. Malhotra" },
        { course: "Digital Logic", total: 38, present: 34, faculty: "Dr. Ananya" },
      ],
      notices: [
        { title: "Lab Viva", body: "DSA lab viva scheduled on 25 Nov, 2 PM." },
        { title: "Project Submission", body: "Upload milestone-2 by Sunday midnight." },
      ],
    },
    {
      id: "23CS1012",
      pin: "20050609",
      name: "Meera Nair",
      program: "B.Tech CSE (AI)",
      semester: "1st Semester",
      advisor: "Prof. Shweta Pillai",
      email: "meera.nair23@campus.edu",
      status: "Probation",
      cgpa: 7.1,
      timetable: [
        { day: "Monday", slots: [
          { time: "09:00-10:00", subject: "Python Programming", room: "LR-401", faculty: "Dr. Rehan" },
          { time: "10:00-11:00", subject: "Engineering Maths", room: "LR-305", faculty: "Prof. Lahiri" },
          { time: "11:00-12:00", subject: "Break", room: "-", faculty: "-" },
          { time: "12:00-01:00", subject: "Applied Physics", room: "LR-201", faculty: "Dr. Mishra" },
        ]},
        { day: "Tuesday", slots: [
          { time: "09:00-10:00", subject: "Applied Physics", room: "LR-201", faculty: "Dr. Mishra" },
          { time: "10:00-11:00", subject: "Python Programming", room: "LR-401", faculty: "Dr. Rehan" },
          { time: "11:00-12:00", subject: "Break", room: "-", faculty: "-" },
          { time: "02:00-04:00", subject: "Python Lab", room: "Lab-B", faculty: "Dr. Rehan" },
        ]},
        { day: "Wednesday", slots: [
          { time: "09:00-10:00", subject: "Engineering Maths", room: "LR-305", faculty: "Prof. Lahiri" },
          { time: "10:00-11:00", subject: "Python Programming", room: "LR-401", faculty: "Dr. Rehan" },
          { time: "11:00-12:00", subject: "Break", room: "-", faculty: "-" },
          { time: "12:00-01:00", subject: "Applied Physics", room: "LR-201", faculty: "Dr. Mishra" },
        ]},
        { day: "Thursday", slots: [
          { time: "09:00-10:00", subject: "Python Programming", room: "LR-401", faculty: "Dr. Rehan" },
          { time: "10:00-11:00", subject: "Engineering Maths", room: "LR-305", faculty: "Prof. Lahiri" },
          { time: "11:00-12:00", subject: "Break", room: "-", faculty: "-" },
          { time: "12:00-02:00", subject: "Physics Lab", room: "Lab-D", faculty: "Dr. Mishra" },
        ]},
        { day: "Friday", slots: [
          { time: "09:00-10:00", subject: "Applied Physics", room: "LR-201", faculty: "Dr. Mishra" },
          { time: "10:00-11:00", subject: "Engineering Maths", room: "LR-305", faculty: "Prof. Lahiri" },
          { time: "11:00-12:00", subject: "Break", room: "-", faculty: "-" },
          { time: "12:00-01:00", subject: "Python Programming", room: "LR-401", faculty: "Dr. Rehan" },
        ]},
      ],
      grades: [
        {
          semester: "1st Semester (Current)",
          courses: [
            { code: "CS111", name: "Python Programming", credits: 4, grade: "-", gradePoint: 0, obtained: 0 },
            { code: "MA111", name: "Engineering Mathematics", credits: 4, grade: "-", gradePoint: 0, obtained: 0 },
            { code: "PH111", name: "Applied Physics", credits: 3, grade: "-", gradePoint: 0, obtained: 0 },
          ],
          sgpa: null,
          totalCredits: 11,
        },
      ],
      attendance: [
        { course: "Python Programming", total: 28, present: 24, faculty: "Dr. Rehan" },
        { course: "Engineering Maths", total: 30, present: 25, faculty: "Prof. Lahiri" },
        { course: "Applied Physics", total: 30, present: 27, faculty: "Dr. Mishra" },
      ],
      notices: [
        { title: "Mentor Meet", body: "Book a slot with Prof. Pillai this week." },
      ],
    },
    {
      id: "22CS2070",
      pin: "20040422",
      name: "Ishaan Verma",
      program: "B.Tech CSE (Cyber)",
      semester: "5th Semester",
      advisor: "Dr. Pawan Koli",
      email: "ishaan.verma22@campus.edu",
      status: "Active",
      cgpa: 8.9,
      timetable: [
        { day: "Monday", slots: [
          { time: "09:00-10:00", subject: "Operating Systems", room: "LR-501", faculty: "Dr. Kumari" },
          { time: "10:00-11:00", subject: "Computer Networks", room: "LR-405", faculty: "Prof. Fernandes" },
          { time: "11:00-12:00", subject: "Break", room: "-", faculty: "-" },
          { time: "12:00-01:00", subject: "Ethical Hacking", room: "LR-302", faculty: "Dr. Pawan Koli" },
          { time: "02:00-04:00", subject: "OS Lab", room: "Lab-E", faculty: "Dr. Kumari" },
        ]},
        { day: "Tuesday", slots: [
          { time: "09:00-10:00", subject: "Computer Networks", room: "LR-405", faculty: "Prof. Fernandes" },
          { time: "10:00-11:00", subject: "Ethical Hacking", room: "LR-302", faculty: "Dr. Pawan Koli" },
          { time: "11:00-12:00", subject: "Break", room: "-", faculty: "-" },
          { time: "12:00-01:00", subject: "Operating Systems", room: "LR-501", faculty: "Dr. Kumari" },
        ]},
        { day: "Wednesday", slots: [
          { time: "09:00-10:00", subject: "Operating Systems", room: "LR-501", faculty: "Dr. Kumari" },
          { time: "10:00-11:00", subject: "Computer Networks", room: "LR-405", faculty: "Prof. Fernandes" },
          { time: "11:00-12:00", subject: "Break", room: "-", faculty: "-" },
          { time: "12:00-02:00", subject: "Networks Lab", room: "Lab-F", faculty: "Prof. Fernandes" },
        ]},
        { day: "Thursday", slots: [
          { time: "09:00-10:00", subject: "Ethical Hacking", room: "LR-302", faculty: "Dr. Pawan Koli" },
          { time: "10:00-11:00", subject: "Operating Systems", room: "LR-501", faculty: "Dr. Kumari" },
          { time: "11:00-12:00", subject: "Break", room: "-", faculty: "-" },
          { time: "12:00-02:00", subject: "Security Lab", room: "Lab-G", faculty: "Dr. Pawan Koli" },
        ]},
        { day: "Friday", slots: [
          { time: "09:00-10:00", subject: "Computer Networks", room: "LR-405", faculty: "Prof. Fernandes" },
          { time: "10:00-11:00", subject: "Ethical Hacking", room: "LR-302", faculty: "Dr. Pawan Koli" },
          { time: "11:00-12:00", subject: "Break", room: "-", faculty: "-" },
          { time: "12:00-01:00", subject: "Operating Systems", room: "LR-501", faculty: "Dr. Kumari" },
        ]},
      ],
      grades: [
        {
          semester: "1st Semester",
          courses: [
            { code: "CS101", name: "Programming Fundamentals", credits: 4, grade: "A+", gradePoint: 10, obtained: 40 },
            { code: "MA101", name: "Engineering Mathematics I", credits: 4, grade: "A", gradePoint: 9, obtained: 36 },
            { code: "PH101", name: "Applied Physics", credits: 3, grade: "A", gradePoint: 9, obtained: 27 },
            { code: "EE101", name: "Basic Electronics", credits: 3, grade: "A+", gradePoint: 10, obtained: 30 },
          ],
          sgpa: 9.5,
          totalCredits: 14,
        },
        {
          semester: "2nd Semester",
          courses: [
            { code: "CS102", name: "Data Structures", credits: 4, grade: "A+", gradePoint: 10, obtained: 40 },
            { code: "MA102", name: "Engineering Mathematics II", credits: 4, grade: "A", gradePoint: 9, obtained: 36 },
            { code: "CH101", name: "Engineering Chemistry", credits: 3, grade: "A-", gradePoint: 8, obtained: 24 },
            { code: "ME101", name: "Engineering Mechanics", credits: 3, grade: "A", gradePoint: 9, obtained: 27 },
          ],
          sgpa: 9.1,
          totalCredits: 14,
        },
        {
          semester: "3rd Semester",
          courses: [
            { code: "CS201", name: "Algorithms", credits: 4, grade: "A", gradePoint: 9, obtained: 36 },
            { code: "CS202", name: "Database Systems", credits: 4, grade: "A+", gradePoint: 10, obtained: 40 },
            { code: "CS203", name: "Computer Organization", credits: 3, grade: "A-", gradePoint: 8, obtained: 24 },
          ],
          sgpa: 9.1,
          totalCredits: 11,
        },
        {
          semester: "4th Semester",
          courses: [
            { code: "CS301", name: "Software Engineering", credits: 4, grade: "A", gradePoint: 9, obtained: 36 },
            { code: "CS302", name: "Web Technologies", credits: 4, grade: "A", gradePoint: 9, obtained: 36 },
            { code: "CS303", name: "Theory of Computation", credits: 3, grade: "B+", gradePoint: 7, obtained: 21 },
          ],
          sgpa: 8.5,
          totalCredits: 11,
        },
        {
          semester: "5th Semester (Current)",
          courses: [
            { code: "CS401", name: "Operating Systems", credits: 4, grade: "-", gradePoint: 0, obtained: 0 },
            { code: "CS402", name: "Computer Networks", credits: 4, grade: "-", gradePoint: 0, obtained: 0 },
            { code: "CS403", name: "Ethical Hacking", credits: 3, grade: "-", gradePoint: 0, obtained: 0 },
          ],
          sgpa: null,
          totalCredits: 11,
        },
      ],
      attendance: [
        { course: "Operating Systems", total: 36, present: 35, faculty: "Dr. Kumari" },
        { course: "Computer Networks", total: 34, present: 33, faculty: "Prof. Fernandes" },
        { course: "Ethical Hacking", total: 32, present: 31, faculty: "Dr. Pawan Koli" },
      ],
      notices: [
        { title: "Capture The Flag", body: "CTF qualifiers on 21 Nov, register by 18 Nov." },
      ],
    },
  ],
  events: [
    { title: "Winter Hackathon", description: "48-hour coding sprint for all branches.", date: "24 Nov" },
    { title: "Placement Masterclass", description: "Resume + mock interviews by TPO cell.", date: "26 Nov" },
    { title: "Cultural Night", description: "Auditions for annual fest performances.", date: "30 Nov" },
  ],
  notices: [
    { title: "Exam Forms", body: "Odd semester exam forms close 28 Nov." },
    { title: "Library Hours", body: "Central library now open till midnight during exams." },
  ],
  busRoutes: [
    {
      id: "RJ-01",
      route: "Ajmeri Gate ⇄ MUJ Campus",
      departure: "06:30 AM",
      arrival: "07:45 AM",
      fare: "₹60",
      slots: ["06:30 AM", "06:45 AM", "07:00 AM"],
    },
    {
      id: "RJ-05",
      route: "Malviya Nagar ⇄ MUJ Campus",
      departure: "08:00 AM",
      arrival: "09:00 AM",
      fare: "₹70",
      slots: ["08:00 AM", "08:30 AM", "05:30 PM"],
    },
    {
      id: "RJ-12",
      route: "Sindhi Camp ⇄ MUJ Campus",
      departure: "05:00 PM",
      arrival: "06:15 PM",
      fare: "₹80",
      slots: ["05:00 PM", "05:30 PM", "06:00 PM"],
    },
  ],
};

const state = {
  currentStudent: null,
  busBookings: [],
};

const selectors = {
  loginForm: document.getElementById("login-form"),
  studentCard: document.getElementById("student-card"),
  attendanceCard: document.getElementById("attendance-card"),
  attendanceTableBody: document.querySelector("#attendance-table tbody"),
  feedback: document.getElementById("login-feedback"),
  studentName: document.getElementById("student-name"),
  studentProgram: document.getElementById("student-program"),
  studentSemester: document.getElementById("student-semester"),
  studentAdvisor: document.getElementById("student-advisor"),
  studentEmail: document.getElementById("student-email"),
  studentStatus: document.getElementById("student-status"),
  studentCgpa: document.getElementById("student-cgpa"),
  studentOverall: document.getElementById("student-overall"),
  attendanceUpdated: document.getElementById("attendance-updated"),
  eventsList: document.getElementById("events-list"),
  noticesList: document.getElementById("notices-list"),
  demoAccountsList: document.getElementById("demo-accounts"),
  busTableBody: document.getElementById("bus-table-body"),
  busForm: document.getElementById("bus-booking-form"),
  busName: document.getElementById("bus-name"),
  busRoute: document.getElementById("bus-route"),
  busDate: document.getElementById("bus-date"),
  busSlot: document.getElementById("bus-slot"),
  busFeedback: document.getElementById("bus-feedback"),
  busBookings: document.getElementById("bus-bookings"),
};

const authenticate = (studentId, pin) =>
  db.students.find(
    (student) => student.id.toLowerCase() === studentId.toLowerCase() && student.pin === pin
  );

const calcOverallAttendance = (attendance) => {
  const totals = attendance.reduce(
    (acc, session) => {
      acc.total += session.total;
      acc.present += session.present;
      return acc;
    },
    { total: 0, present: 0 }
  );
  if (!totals.total) return 0;
  return Math.round((totals.present / totals.total) * 100);
};

const formatPercent = (present, total) => {
  if (!total) return "0%";
  return `${Math.round((present / total) * 100)}%`;
};

const formatPinAsDate = (pin) => {
  const year = pin.slice(0, 4);
  const month = pin.slice(4, 6);
  const day = pin.slice(6, 8);
  return `${day}-${month}-${year}`;
};

const renderStudentCard = (student) => {
  selectors.studentName.textContent = student.name;
  selectors.studentProgram.textContent = student.program;
  selectors.studentSemester.textContent = student.semester;
  selectors.studentAdvisor.textContent = student.advisor;
  selectors.studentEmail.textContent = student.email;
  selectors.studentStatus.textContent = student.status;
  selectors.studentStatus.classList.toggle("status-warning", student.status !== "Active");
  selectors.studentCgpa.textContent = student.cgpa.toFixed(1);
  selectors.studentOverall.textContent = `${calcOverallAttendance(student.attendance)}%`;
  selectors.studentCard.classList.remove("hidden");
};

const renderAttendance = (attendance) => {
  selectors.attendanceTableBody.innerHTML = "";
  attendance.forEach((course) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${course.course}</td>
      <td>${course.total}</td>
      <td>${course.present}</td>
      <td>${formatPercent(course.present, course.total)}</td>
      <td>${course.faculty}</td>
    `;
    selectors.attendanceTableBody.appendChild(row);
  });
  selectors.attendanceUpdated.textContent = `Updated ${new Date().toLocaleDateString()}`;
  selectors.attendanceCard.classList.remove("hidden");
};

const renderTimetable = (timetable) => {
  const timetableBody = document.getElementById("timetable-body");
  const timetableCard = document.getElementById("timetable-card");
  
  timetableBody.innerHTML = "";
  
  timetable.forEach((day) => {
    day.slots.forEach((slot, index) => {
      const row = document.createElement("tr");
      if (index === 0) {
        row.innerHTML = `
          <td class="day-cell" rowspan="${day.slots.length}">${day.day}</td>
          <td>${slot.time}</td>
          <td class="${slot.subject === 'Break' ? 'break-cell' : ''}">${slot.subject}</td>
          <td>${slot.room}</td>
          <td>${slot.faculty}</td>
        `;
      } else {
        row.innerHTML = `
          <td>${slot.time}</td>
          <td class="${slot.subject === 'Break' ? 'break-cell' : ''}">${slot.subject}</td>
          <td>${slot.room}</td>
          <td>${slot.faculty}</td>
        `;
      }
      timetableBody.appendChild(row);
    });
  });
  
  timetableCard.classList.remove("hidden");
};

const getGradeClass = (grade) => {
  if (grade === 'A+' || grade === 'A') return 'grade-a';
  if (grade === 'A-' || grade === 'B+') return 'grade-b';
  if (grade === 'B' || grade === 'B-') return 'grade-c';
  return 'grade-pending';
};

const renderGrades = (grades, cgpa) => {
  const gradesContainer = document.getElementById("grades-container");
  const gradesCard = document.getElementById("grades-card");
  const studentCgpaDisplay = document.getElementById("student-cgpa-display");
  
  studentCgpaDisplay.textContent = cgpa.toFixed(2);
  gradesContainer.innerHTML = "";
  
  grades.forEach((sem) => {
    const semesterDiv = document.createElement("div");
    semesterDiv.className = "semester-section";
    
    const header = document.createElement("div");
    header.className = "semester-header";
    header.innerHTML = `
      <h4>${sem.semester}</h4>
      ${sem.sgpa !== null ? `<span class="sgpa-badge">SGPA: ${sem.sgpa.toFixed(2)}</span>` : '<span class="sgpa-badge ongoing">Ongoing</span>'}
    `;
    semesterDiv.appendChild(header);
    
    const table = document.createElement("table");
    table.className = "grades-table";
    table.innerHTML = `
      <thead>
        <tr>
          <th>Code</th>
          <th>Course Name</th>
          <th>Credits</th>
          <th>Grade</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        ${sem.courses.map(course => `
          <tr>
            <td>${course.code}</td>
            <td>${course.name}</td>
            <td>${course.credits}</td>
            <td><span class="grade-badge ${getGradeClass(course.grade)}">${course.grade}</span></td>
            <td>${course.grade === '-' ? '-' : course.obtained}</td>
          </tr>
        `).join('')}
      </tbody>
    `;
    
    semesterDiv.appendChild(table);
    gradesContainer.appendChild(semesterDiv);
  });
  
  gradesCard.classList.remove("hidden");
};

const renderEvents = () => {
  selectors.eventsList.innerHTML = "";
  db.events.forEach((event) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${event.title}</strong>
      <p>${event.description}</p>
      <span>${event.date}</span>`;
    selectors.eventsList.appendChild(li);
  });
};

const renderNotices = (studentNotices = []) => {
  selectors.noticesList.innerHTML = "";
  const combined = [...studentNotices, ...db.notices];

  combined.forEach((notice) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${notice.title}</strong><p>${notice.body}</p>`;
    selectors.noticesList.appendChild(li);
  });
};

const renderDemoAccounts = () => {
  selectors.demoAccountsList.innerHTML = "";
  db.students.forEach((student) => {
    const li = document.createElement("li");
    li.innerHTML = `<code>${student.id}</code> → DOB ${formatPinAsDate(student.pin)}`;
    selectors.demoAccountsList.appendChild(li);
  });
};

const renderBusSchedule = () => {
  selectors.busTableBody.innerHTML = "";
  db.busRoutes.forEach((route) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${route.route}</td>
      <td>${route.departure}</td>
      <td>${route.arrival}</td>
      <td>${route.fare}</td>
    `;
    selectors.busTableBody.appendChild(row);
  });
};

const renderBusRoutes = () => {
  selectors.busRoute.innerHTML = "";
  db.busRoutes.forEach((route, index) => {
    const option = document.createElement("option");
    option.value = route.id;
    option.textContent = `${route.route} (${route.id})`;
    if (index === 0) option.selected = true;
    selectors.busRoute.appendChild(option);
  });
  updateSlotOptions(selectors.busRoute.value);
};

const updateSlotOptions = (routeId) => {
  const route = db.busRoutes.find((r) => r.id === routeId);
  selectors.busSlot.innerHTML = "";
  if (!route) return;
  route.slots.forEach((slot) => {
    const option = document.createElement("option");
    option.value = slot;
    option.textContent = slot;
    selectors.busSlot.appendChild(option);
  });
};

const renderBusBookings = () => {
  selectors.busBookings.innerHTML = "";
  if (!state.busBookings.length) {
    const li = document.createElement("li");
    li.textContent = "No bookings yet. Submit the form to generate one.";
    selectors.busBookings.appendChild(li);
    return;
  }
  state.busBookings.slice(-3).reverse().forEach((booking) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${booking.name}</strong>
      <p>${booking.route.route} • ${new Date(booking.date).toLocaleDateString()} • ${booking.slot}</p>`;
    selectors.busBookings.appendChild(li);
  });
};

selectors.loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const studentId = document.getElementById("student-id").value.trim();
  const pin = document.getElementById("student-pin").value.trim();

  const student = authenticate(studentId, pin);

  if (!student) {
    selectors.feedback.textContent = "Invalid credentials. Try again with the demo accounts.";
    selectors.feedback.classList.add("error");
    selectors.feedback.classList.remove("success");
    return;
  }

  state.currentStudent = student;
  selectors.feedback.textContent = `Welcome, ${student.name.split(" ")[0]}! Dashboard unlocked.`;
  selectors.feedback.classList.remove("error");
  selectors.feedback.classList.add("success");
  renderStudentCard(student);
  renderAttendance(student.attendance);
  renderNotices(student.notices);
  renderTimetable(student.timetable);
  renderGrades(student.grades, student.cgpa);
});

selectors.busRoute.addEventListener("change", (event) => {
  updateSlotOptions(event.target.value);
});

selectors.busForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = selectors.busName.value.trim();
  const routeId = selectors.busRoute.value;
  const date = selectors.busDate.value;
  const slot = selectors.busSlot.value;

  if (!name || !routeId || !date || !slot) {
    selectors.busFeedback.textContent = "Please fill all fields before booking.";
    selectors.busFeedback.classList.add("error");
    selectors.busFeedback.classList.remove("success");
    return;
  }

  const route = db.busRoutes.find((r) => r.id === routeId);
  const booking = {
    name,
    route,
    date,
    slot,
    reference: `MUJ-${Math.floor(1000 + Math.random() * 9000)}`,
  };

  state.busBookings.push(booking);
  selectors.busFeedback.textContent = `Seat blocked for ${route.route}. Ref: ${booking.reference}`;
  selectors.busFeedback.classList.remove("error");
  selectors.busFeedback.classList.add("success");
  renderBusBookings();
  selectors.busForm.reset();
  updateSlotOptions(routeId);
});

renderEvents();
renderNotices();
renderDemoAccounts();
renderBusSchedule();
renderBusRoutes();
renderBusBookings();