document.addEventListener("DOMContentLoaded", function () {
    // Function to get student data by ID
    function getStudentById(id) {
        const students = JSON.parse(localStorage.getItem('students')) || [];
        return students.find(student => student.id === id);
    }

    // display student info
    function displayStudentInfo(student) {
        const studentInfo = document.getElementById('student_info');
        studentInfo.textContent = `${student.lname}, ${student.fname} ${student.mname} - ${student.course} (${student.year})`;
        
        if(student.minor_org_secretary && student.minor_org_pres && student.minor_org_dean === true) {
            passed = true;
        }else{
            passed = false;
        }

        const studentData = document.getElementById('student-data');
        studentData.innerHTML = `
            <div class="data_td">
                <div>Minor Organization</div>
                <div style="color: ${student.minor_org_secretary ? 'green' : 'blue'}">${student.minor_org_secretary ? 'Approved' : 'Pending'}</div>
                <div style="color: ${student.minor_org_pres ? 'green' : 'blue'}">${student.minor_org_pres ? 'Approved' : 'Pending'}</div>
                <div style="color: ${student.minor_org_dean ? 'green' : 'blue'}">${student.minor_org_dean ? 'Approved' : 'Pending'}</div>
                <div style="color: ${passed ? 'green' : 'red'}; font-weight: bold">${passed ? 'COMPLETE' : 'INCOMPLETE'}</div>
            </div>
        `;
    }

    // PALITAN AND VALUE PARA MAKUWA SU SPECIFIC NA STUDENT BY ID
    const studentId = 1;  

    // Fetch the student data
    const student = getStudentById(studentId);

    if (student) {
        displayStudentInfo(student);
    } else {
        console.log('Student not found');
    }
});
