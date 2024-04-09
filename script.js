// Handle the functionality selection within each language section
document.querySelectorAll('.selection').forEach(selectElement => {
    selectElement.addEventListener('change', () => {
        // Ensure all subwrappers are hidden initially
        document.querySelectorAll('.subwrapper').forEach((element) => {
            element.classList.add('hidden');
        });

        // Show the selected functionality based on the chosen option
        const chosenOption = selectElement.value;
        document.querySelectorAll(`.${chosenOption}`).forEach((element) => {
            element.classList.remove('hidden');
        });
    });
});

// Handle language version selection
const selectLanguage = document.getElementById('language-version');

selectLanguage.addEventListener('change', () => {
    // Hide both language sections initially
    document.querySelectorAll('.english, .russian').forEach((element) => {
        element.style.display = 'none';
    });

    // Show the selected language section
    const chosenLanguage = selectLanguage.value;
    document.querySelector(`.${chosenLanguage}`).style.display = 'block';
});

// Initialize the page to show the correct sections based on the default selections
document.dispatchEvent(new Event('DOMContentLoaded', {
    bubbles: true,
    cancelable: true
}));

// After the language version selection change, ensure the correct subwrapper visibility
selectLanguage.dispatchEvent(new Event('change'));
