document.getElementById('coverLetterForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    const companyName = document.getElementById('companyName').value;
    const jobTitle = document.getElementById('jobTitle').value;
    const applicantName = document.getElementById('applicantName').value;
    const experience = document.getElementById('experience').value;
    
    const coverLetter = `
    Dear Hiring Manager,

    I am writing to express my interest in the ${jobTitle} position at ${companyName}. 
    With ${experience} years of experience in the industry, I am confident in my ability 
    to contribute effectively to your team. 

    I am eager to bring my expertise in [Your Skills or Experience] to ${companyName} 
    and help achieve your goals. 

    Thank you for considering my application. I look forward to the opportunity 
    to discuss how my skills and experiences align with the needs of your team.

    Sincerely,
    ${applicantName}
    `;

    document.getElementById('coverLetterOutput').value = coverLetter;
});
