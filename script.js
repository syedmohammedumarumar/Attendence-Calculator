function generateInputFields() {
    const numSubjects = document.getElementById('numSubjects').value;
    const subjectInputsDiv = document.getElementById('subjectInputs');
    subjectInputsDiv.innerHTML = '';

    for (let i = 0; i < numSubjects; i++) {
        const input = document.createElement('input');
        input.type = 'number';
        input.placeholder = `subject-${i + 1}`;
        input.id = `subject${i + 1}`;
        input.min = 0;
        input.max = 100;
        subjectInputsDiv.appendChild(input);
    }

    document.getElementById('calculateBtn').style.display = 'block';
}

function calculateAverageAttendance() {
    const numSubjects = document.getElementById('numSubjects').value;
    let totalPer = 0.0;

    for (let i = 0; i < numSubjects; i++) {
        const per = parseFloat(document.getElementById(`subject${i + 1}`).value);
        totalPer += per;
    }

    const avgPer = totalPer / numSubjects;
    document.getElementById('result').innerText = `Your attendance percentage is: ${avgPer.toFixed(2)}%`;
}
