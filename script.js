document.addEventListener('DOMContentLoaded', () => {
    // Logic for the 'Home' page button
    const toggleButton = document.getElementById('toggle-text-btn');
    const interactiveText = document.getElementById('interactive-text');
    if (toggleButton && interactiveText) {
        toggleButton.addEventListener('click', () => {
            interactiveText.style.display = interactiveText.style.display === 'block' ? 'none' : 'block';
        });
    }

    // Logic for the 'About Us' page button
    const alertButton = document.getElementById('alert-button');
    if (alertButton) {
        alertButton.addEventListener('click', () => {
            const name = "Rajit Mohan Shrivastava"; 
            const regNo = "240962378"; 
            const phoneNo = "7021946415";
            
            alert(`Name: ${name}\nRegistration Number: ${regNo}\nPhone Number: ${phoneNo}`);
        });
    }
});