document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('teacher-form');
    const submitButton = document.getElementById('submit-teacher');

    if (submitButton) {
        submitButton.addEventListener('click', function(event) {
            event.preventDefault();

            const formData = new FormData(form);
            const data = {};

            for (const [key, value] of formData.entries()) {
                data[key] = value;
            }

            localStorage.setItem('teacherEvaluationData', JSON.stringify(data));

            form.reset();

            alert('Evaluation data of teacher saved locally.');

            const storedData = localStorage.getItem('teacherEvaluationData');
            const evaluationData = JSON.parse(storedData);
            console.log(evaluationData);
        });
    }
});
