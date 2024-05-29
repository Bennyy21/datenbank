
    // Your web app's Firebase configuration
    const firebaseConfig = {
  apiKey: "AIzaSyC2HQBdHqdRnRlFSzdUbblhmXu8w5L2zSA",
  authDomain: "bentleyseventkalender.firebaseapp.com",
  databaseURL: "https://bentleyseventkalender-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bentleyseventkalender",
  storageBucket: "bentleyseventkalender.appspot.com",
  messagingSenderId: "877220977131",
  appId: "1:877220977131:web:a4ac3d50095f8ec341a1ae"
};
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    document.addEventListener('DOMContentLoaded', (event) => {

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

