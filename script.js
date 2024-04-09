const selectElement = document.getElementById('selection');

selectElement.addEventListener('change', () => {
    document.querySelectorAll('.subwrapper').forEach((element) => {
        element.classList.add('hidden');
    });

    const chosenOption = selectElement.value;
    document.querySelector(`.${chosenOption}`).classList.remove('hidden');
});
