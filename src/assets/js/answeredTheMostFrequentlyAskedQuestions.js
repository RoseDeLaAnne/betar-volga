const answeredTheMostFrequentlyAskedQuestionsToggle = (name) => {
    var p = document.getElementById(`${name}-p`);
    var svg = document.getElementById(`${name}-svg`);

    p.classList.toggle("max-h-96");
    svg.classList.toggle("stroke-gray");
};
