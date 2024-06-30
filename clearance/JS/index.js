document.addEventListener("DOMContentLoaded", function () {
    const storedStudents = JSON.parse(localStorage.getItem('students')) || [
        { id: 0, fname: "John", lname: "Doe", mname: "M.", course: "Computer Science", year: 1, block: "A", minor_org_secretary: false, minor_org_pres: false, minor_org_dean: false },
        { id: 1, fname: "Jane", lname: "Smith", mname: "S.", course: "Information Technology", year: 2, block: "B", minor_org_secretary: false, minor_org_pres: false, minor_org_dean: false },
        { id: 2, fname: "Samuel", lname: "Green", mname: "G.", course: "Electrical Engineering", year: 3, block: "C", minor_org_secretary: false, minor_org_pres: false, minor_org_dean: false },
        { id: 3, fname: "Emily", lname: "Brown", mname: "B.", course: "Architecture", year: 4, block: "D", minor_org_secretary: false, minor_org_pres: false, minor_org_dean: false }
    ];

    function saveToLocalStorage(students) {
        localStorage.setItem('students', JSON.stringify(students));
    }

    function displayStudents() {
        const studentContainer = document.getElementById("student-data");
        studentContainer.innerHTML = '';

        storedStudents.forEach((student, index) => {
            const studentDiv = document.createElement("div");
            studentDiv.classList.add("data_td");
            studentDiv.innerHTML = `
                <div>${student.lname}, ${student.fname} ${student.mname}</div>
                <div>${student.course}</div>
                <div>${student.block}</div>
                <div>
                    <label class="switch">
                        <input type="checkbox" ${student.minor_org_secretary ? 'checked' : ''} data-index="${index}">
                        <span class="slider"></span>
                    </label>
                </div>
            `;
            studentContainer.appendChild(studentDiv);
        });

        document.querySelectorAll('.switch input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                const index = this.getAttribute('data-index');
                const student = storedStudents[index];
                student.minor_org_secretary = this.checked;
                
                // if  yung minor_org_secretary is false, yung minor_org_pres and minor_org_dean will also be false
                if (!this.checked) {
                    student.minor_org_pres = false;
                    student.minor_org_dean = false;
                }

                saveToLocalStorage(storedStudents);
            });
        });
    }

    displayStudents();
});
