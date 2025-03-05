document.addEventListener("DOMContentLoaded", () => {
    fetch("assets/data/students.json")
        .then(response => response.json())
        .then(data => {
            renderAllStudents(data); // Default view: No sorting
            setupFiltering(data);
        })
        .catch(error => console.error("Error loading student data:", error));
});

function renderAllStudents(students) {
    const studentList = document.getElementById("student-list");
    studentList.innerHTML = ""; // Clear previous entries
    studentList.classList.remove("grouped"); // Ensure normal layout

    students.forEach(student => {
        const card = createStudentCard(student);
        studentList.appendChild(card);
    });
}

function setupFiltering(students) {
    document.getElementById("all").addEventListener("click", () => {
        renderAllStudents(students); // Show all without grouping
        setActiveTab("all");
    });

    document.getElementById("university").addEventListener("click", () => {
        renderGroupedData(students, "Host Institution");
        setActiveTab("university");
    });

    document.getElementById("country").addEventListener("click", () => {
        renderGroupedData(students, "Country");
        setActiveTab("country");
    });
}

function renderGroupedData(students, groupBy) {
    const studentList = document.getElementById("student-list");
    studentList.innerHTML = ""; // Clear previous entries
    studentList.classList.add("grouped"); // Apply grouped layout

    const groupedData = students.reduce((acc, student) => {
        const key = student[groupBy] || "Unknown";
        if (!acc[key]) acc[key] = [];
        acc[key].push(student);
        return acc;
    }, {});

    Object.keys(groupedData).forEach(group => {
        const section = document.createElement("div");
        section.classList.add("group-section");

        const heading = document.createElement("h2");
        heading.classList.add("group-heading");
        heading.textContent = group;
        section.appendChild(heading);

        const studentContainer = document.createElement("div");
        studentContainer.classList.add("student-cards-container");


        groupedData[group].forEach(student => {
            const card = createStudentCard(student);
            studentContainer.appendChild(card);
        });

        section.appendChild(studentContainer);
        studentList.appendChild(section);
    });
}

function createStudentCard(student) {
    const card = document.createElement("div");
    card.classList.add("student-card");

    card.innerHTML = `
        <h3>${student.Name}</h3>
        <p><strong>Discipline:</strong> ${student.Discipline}</p>
        <p><strong>Semester:</strong> ${student.Semester}</p>
        <p><strong>Year:</strong> ${student.Year}</p>
        <p><strong>Host Institution:</strong> ${student["Host Institution"]}</p>
        <p><strong>Country:</strong> ${student.Country}</p>
        <p><a href="mailto:${student.Contact}">${student.Contact}</a></p>
    `;

    return card;
}

function setActiveTab(tabId) {
    document.querySelectorAll(".tab-button").forEach(button => button.classList.remove("active-tab"));
    document.getElementById(tabId).classList.add("active-tab");
}
