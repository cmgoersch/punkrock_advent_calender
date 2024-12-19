const calendar = document.querySelector('.calendar');
const today = new Date();
const todayDate = today.getDate();

// Track-Liste für die Türchen
const trackList = [
  { track: "Song 1", title: " Midnight Dipper", link: "https://open.spotify.com/intl-de/track/21jmykqS340CuvBBoNCUsU?si=b373ef314cf948ac" },
  { track: "Song 2", link: "https://open.spotify.com/track/2" },
  { track: "Song 3", link: "https://open.spotify.com/track/3" },
  { track: "Song 4", link: "https://open.spotify.com/track/4" },
  { track: "Song 5", link: "https://open.spotify.com/track/4" },
  { track: "Song 6", link: "https://open.spotify.com/track/4" },
  { track: "Song 7", link: "https://open.spotify.com/track/4" },
  { track: "Song 8", link: "https://open.spotify.com/track/4" },
  { track: "Song 9", link: "https://open.spotify.com/track/4" },
  { track: "Song 10", link: "https://open.spotify.com/track/4" },
  { track: "Song 11", link: "https://open.spotify.com/track/4" },
  { track: "Song 12", link: "https://open.spotify.com/track/4" },
  { track: "Song 13", link: "https://open.spotify.com/track/4" },
  { track: "Song 14", link: "https://open.spotify.com/track/4" },
  { track: "Song 15", link: "https://open.spotify.com/track/4" },
  { track: "Song 16", link: "https://open.spotify.com/track/4" },
  { track: "Song 17", link: "https://open.spotify.com/track/4" },
  { track: "Song 18", link: "https://open.spotify.com/track/4" },
  { track: "Song 19", link: "https://open.spotify.com/track/4" },
  { track: "Song 20", title: " arbeit si, samba no", link: "https://open.spotify.com/intl-de/track/5D10FM3DbnOz16Ou4OXvsC?si=888a89a8ad414f00" },
  { track: "Song 21", link: "https://open.spotify.com/track/4" },
  { track: "Song 22", link: "https://open.spotify.com/track/4" },
  { track: "Song 23", link: "https://open.spotify.com/track/4" },
  { track: "Song 24", link: "https://open.spotify.com/track/4" },

];

// Zufällige Anordnung der Türchen
const shuffledDays = Array.from({ length: 24 }, (_, i) => i + 1)
  .sort(() => Math.random() - 0.5);

// Karten generieren
shuffledDays.forEach((day, index) => {
  const card = document.createElement('div');
  card.className = 'card';

  const cardInner = document.createElement('div');
  cardInner.className = 'card-inner';

  const cardFront = document.createElement('div');
  cardFront.className = 'card-front';
  cardFront.textContent = day;

  const lockIcon = document.createElement('span');
  lockIcon.className = 'lock-icon';
  lockIcon.textContent = '🔒';
  cardFront.appendChild(lockIcon);

  const cardBack = document.createElement('div');
  cardBack.className = 'card-back';

  if (trackList[day - 1]) {
    const trackData = trackList[day - 1];

    // Track-Name anzeigen
    const track = document.createElement('div');
    track.textContent = trackData.track; // Song-Name anzeigen
    track.style.marginBottom = '5px'; // Leichter Abstand zum Titel

    // Titel des Tracks anzeigen (optional)
    if (trackData.title) {
        const title = document.createElement('div');
        title.textContent = trackData.title; // Titel anzeigen
        title.style.fontWeight = 'bold'; // Stil für besseren Fokus
        cardBack.appendChild(track); // Track zuerst hinzufügen
        cardBack.appendChild(title); // Titel danach hinzufügen
    } else {
        cardBack.appendChild(track); // Nur Track hinzufügen, wenn kein Titel vorhanden ist
    }

    // Spotify-Link
    const link = document.createElement('a');
    link.href = trackData.link;
    link.target = '_blank';
    link.textContent = '🎵 Spotify öffnen';

    // Probehören-Button
    const button = document.createElement('button');
    button.textContent = 'Probehören';
    button.onclick = () => alert(`Probehören: ${trackData.track}`);

    // Restliche Elemente hinzufügen
    cardBack.appendChild(button);
    cardBack.appendChild(link);
}

  cardInner.appendChild(cardFront);
  cardInner.appendChild(cardBack);
  card.appendChild(cardInner);

  // Status-Logik
  if (day < todayDate) {
    // Türchen vor heute: Geöffnet
    cardInner.classList.add('flipped');
  } else if (day === todayDate) {
    // Türchen für heute: Aktiv
    card.addEventListener('click', () => {
      cardInner.classList.add('flipped');
    });
  } else {
    // Türchen ab morgen: Geschlossen
    card.addEventListener('click', () => {
      cardFront.classList.add('locked');
      lockIcon.classList.add('visible');
      setTimeout(() => cardFront.classList.remove('locked'), 400);
    });
  }

  calendar.appendChild(card);
});