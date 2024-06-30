document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const submitButton = document.getElementById('submit-form');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const data = {};

        for (const [key, value] of formData.entries()) {
            data[key] = value;
        }

        localStorage.setItem('studentEvaluationData', JSON.stringify(data));

        form.reset();

        alert('Evaluation data saved locally.');

        const storedData = localStorage.getItem('studentEvaluationData');
        const evaluationData = JSON.parse(storedData);
        console.log(evaluationData);
    });
});
