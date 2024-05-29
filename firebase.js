document.addEventListener('DOMContentLoaded', (event) => {
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
        databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_PROJECT_ID.appspot.com",
        messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
        appId: "YOUR_APP_ID"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // Referenz zur Firebase-Datenbank
    var database = firebase.database();

    // Funktion, um das Formular zu verarbeiten und die Daten in die Firebase-Datenbank zu speichern
    function saveEvent() {
        var eventName = document.getElementById('eventname').value;
        var websiteLink = document.getElementById('websitelink').value;
        var eventDate = document.getElementById('eventdate').value;
        var startTime = document.getElementById('starttime').value;
        var eventType = document.getElementById('eventtype').value;

        var newEventRef = database.ref('events').push();
        newEventRef.set({
            name: eventName,
            link: websiteLink,
            date: eventDate,
            time: startTime,
            type: eventType
        });
    }

    // Event Listener für das Formular
    document.getElementById('eventForm').addEventListener('submit', function (e) {
        e.preventDefault();
        saveEvent();
        alert('Event gespeichert!');
        displayEvents();
    });

    // Funktion, um Events aus der Firebase-Datenbank abzurufen und anzuzeigen
    function displayEvents() {
        var eventsRef = database.ref('events');
        eventsRef.on('value', function(snapshot) {
            var events = snapshot.val();
            var eventsList = document.getElementById('events-list');
            eventsList.innerHTML = '';

            for (var id in events) {
                var event = events[id];
                var eventItem = document.createElement('div');
                eventItem.innerHTML = `
                    <h3>${event.name}</h3>
                    <p>Link: <a href="${event.link}">${event.link}</a></p>
                    <p>Datum: ${event.date}</p>
                    <p>Zeit: ${event.time}</p>
                    <p>Art: ${event.type}</p>
                `;
                eventsList.appendChild(eventItem);
            }
        });
    }

    // Events beim Laden der Seite anzeigen
    displayEvents();
});

