document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('survey-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const birthdate = document.getElementById('birthdate').value;
        const gender = document.getElementById('gender').value;
        const preference = document.querySelector('input[name="preference"]:checked').value;
        const email = document.getElementById('email').value;
        const suggestions = document.getElementById('suggestions').value;
        
        const resultSection = document.getElementById('result');
        resultSection.innerHTML = `
            <h2>Hasil Survey</h2>
            <p><strong>Nama:</strong> ${name}</p>
            <p><strong>Tanggal Lahir:</strong> ${birthdate}</p>
            <p><strong>Jenis Kelamin:</strong> ${gender}</p>
            <p><strong>Preferensi:</strong> ${preference}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Saran:</strong> ${suggestions}</p>
        `;
    });
});
