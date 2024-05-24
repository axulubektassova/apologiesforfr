const compliments = [
    "Kind",
    "Beautiful",
    "Breathtaking",
    "Intelligent",
    "Inspiring",
    "Caring",
    "Wise",
    "Creative",
    "Supportive",
    "Motivating",
    "Positive",
    "Warm-hearted",
    "Talented",
    "Energetic",
    "Empathetic",
    "Fair-minded",
    "Sincere",
    "Harmonious",
    "Charismatic",
    "Optimistic",
    "Irreplaceable",
    "Marvelous",
    "Stunning",
    "Gorgeous"
];

let index = 0;

function showCompliment() {
    const complimentElement = document.getElementById("compliment");
    complimentElement.textContent = compliments[index];
    index = (index + 1) % compliments.length;
}
