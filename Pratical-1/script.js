const votes = {
    option1: 0,
    option2: 0
};

function vote(option) { 
    if (votes[option] !== undefined) {
        votes[option]++;
        updateVotesUI();
    }
}

function updateVotesUI() {
    document.getElementById('option1-votes').textContent = votes.option1;
    document.getElementById('option2-votes').textContent = votes.option2;
}

function simulateRealTimeVoting() {
    setInterval(() => {
        const randomOption = Math.random() < 0.5 ? 'option1' : 'option2';
        votes[randomOption]++;
        updateVotesUI();
    }, 2000);
}

// Start simulating real-time voting 
simulateRealTimeVoting(); // calling funcion to start the simulation