document.addEventListener("DOMContentLoaded", function () {
    const storedStudents = JSON.parse(localStorage.getItem('students')) || [];

    
    function saveToLocalStorage(students) {
        localStorage.setItem('students', JSON.stringify(students)); // localStorage lang sakalam ahahahhah
    }

    function displayStudents() {
        const studentContainer = document.getElementById("student-data");
        studentContainer.innerHTML = '';

        const filteredStudents = storedStudents.filter(student => student.minor_org_secretary);

        filteredStudents.forEach((student, index) => {
            const studentDiv = document.createElement("div");
            studentDiv.classList.add("data_td");
            studentDiv.innerHTML = `
                <div>${student.lname}, ${student.fname} ${student.mname}</div>
                <div>${student.course}</div>
                <div>${student.block}</div>
                <div>
                    <label class="switch">
                        <input type="checkbox" ${student.minor_org_pres ? 'checked' : ''} data-index="${index}">
                        <span class="slider"></span>
                    </label>
                </div>
            `;
            studentContainer.appendChild(studentDiv);
        });

        document.querySelectorAll('.switch input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                const index = this.getAttribute('data-index');
                const filteredIndex = storedStudents.findIndex(student => student.fname === filteredStudents[index].fname && student.lname === filteredStudents[index].lname);
                storedStudents[filteredIndex].minor_org_pres = this.checked;
                saveToLocalStorage(storedStudents);
            });
        });
    }

    displayStudents();
});
