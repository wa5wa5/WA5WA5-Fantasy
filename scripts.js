document.addEventListener("DOMContentLoaded", function() {
    const playerList = document.getElementById('player-list');
    const teamList = document.getElementById('team-list');
    const tripleCaptainBtn = document.getElementById('triple-captain-btn');
    const doubleCaptainBtn = document.getElementById('double-captain-btn');

    let tripleCaptainUsed = false;
    let selectedPlayers = [];

    // Default player information
    const defaultPlayers = [
        { id: 1, name: 'Tony', points: 12, selected: false, characteristic: 'Forward', audioSrc: 'Tony_alert.mp3' },
        { id: 2, name: 'Saher', points: 10, selected: false, characteristic: 'Defender', audioSrc: 'Saher_alert.mp3' },
        { id: 3, name: 'Hossam', points: 17, selected: false, characteristic: 'Defender', audioSrc: 'Hossam_alert.mp3' },
        { id: 4, name: 'Shafie', points: 23, selected: false, characteristic: 'Defender', audioSrc: 'Shafie_alert.mp3' },
        { id: 5, name: 'Ahmed', points: 30, selected: false, characteristic: 'Forward', audioSrc: 'Ahmed_alert.mp3' },
        { id: 6, name: 'Amr', points: 19, selected: false, characteristic: 'Forward', audioSrc: 'Amr_alert.mp3' },
        { id: 7, name: 'Youssef', points: 38, selected: false, characteristic: 'Midfielder', audioSrc: 'Youssef_alert.mp3' },
        { id: 8, name: 'Omar Mohamed', points: 0, selected: false, characteristic: 'Forward', audioSrc: 'Omar_Mohamed_alert.mp3' },
        { id: 9, name: 'Omar', points: 11, selected: false, characteristic: 'Defender', audioSrc: 'Omar_alert.mp3' },
{ id: 10, name: 'unkown player', points: 24, selected: false, characteristic: 'Midfielder', audioSrc: 'Omar_alert.mp3' }
    ];

    // Populate player list
    defaultPlayers.forEach(player => {
        const playerItem = document.createElement('div');
        playerItem.classList.add('player');
        playerItem.innerHTML = `<p>${player.name} (${player.points} points)</p>`;
        playerItem.addEventListener('click', () => selectPlayer(player));
        playerList.appendChild(playerItem);
    });

    // Select player and trigger audio alert
    function selectPlayer(player) {
        if (!player.selected && selectedPlayers.length < 5) {
            player.selected = true;
            selectedPlayers.push(player);
            playAudio(player.audioSrc);
            updateSelectedPlayerList();
        } else if (player.selected) {
            alert('Player already selected.');
        } else {
            alert('You can only select 5 players.');
        }
    }

    // Update selected player list
    function updateSelectedPlayerList() {
        teamList.innerHTML = '';
        selectedPlayers.forEach(player => {
            const teamItem = document.createElement('li');
            teamItem.textContent = `${player.name} (${player.points} points)`;
            teamList.appendChild(teamItem);
        });
    }

    // Play audio
    function playAudio(audioSrc) {
        const audio = new Audio(audioSrc);
        audio.play();
    }

    // Triple Captain functionality
    tripleCaptainBtn.addEventListener('click', function() {
        if (!tripleCaptainUsed) {
            const selectedPlayer = prompt('Choose a player to triple captain (name or id):');
            const player = defaultPlayers.find(p => p.name === selectedPlayer || p.id === parseInt(selectedPlayer));
            if (player) {
                player.points *= 3;
                alert(`${player.name} is now triple captain!`);
                tripleCaptainUsed = true;
                updateSelectedPlayerList();
            } else {
                alert('Invalid player selection.');
            }
        } else {
            alert('You have already used Triple Captain.');
        }
    });

    // Double Captain functionality
    doubleCaptainBtn.addEventListener('click', function() {
        const selectedPlayer = prompt('Choose a player to captain (name or id):');
        const player = defaultPlayers.find(p => p.name === selectedPlayer || p.id === parseInt(selectedPlayer));
        if (player) {
            player.points *= 2;
            alert(`${player.name} is now captain!`);
            updateSelectedPlayerList();
        } else {
            alert('Invalid player selection.');
        }
    });

    // Populate Ranking Table
    const rankingList = document.getElementById('ranking-list');
    const rankingData = [
        { name: 'Ahmed', points: 159 },
        { name: 'Amr', points: 153 },
        { name: 'Hossam', points: 153 },
        { name: 'Youssef', points: 151 },
        { name: 'Shafie', points: 151 },
        { name: 'Saher', points: 139 },
        { name: 'Omar', points: 153 },
        { name: 'Tony', points: 120 }
    ];
    rankingData.forEach((player, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}-${player.name}: ${player.points} points`;
        rankingList.appendChild(listItem);
    });
});
