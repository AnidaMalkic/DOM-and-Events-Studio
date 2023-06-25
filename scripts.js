// Write your JavaScript code here.
// Remember to pay attention to page loading!

// add load event handler to window
window.addEventListener("load", function() {
    // put DOM code here to ensure elements have been loaded


    let takeoff = document.getElementById('takeoff');
    takeoff.addEventListener("click", function (event) {
        window.alert("Confirm that the shuttle is ready for takeoff.")

        let ps = document.getElementById("flightStatus")
        ps.replaceWith('Shuttle in Flight');

        let ph = document.getElementById("spaceShuttleHeight")
        ph.replaceWith('10000')

        let shuttleBackground = document.getElementById('shuttleBackground')
        shuttleBackground.setAttribute('style', 'background-color: blue')

    
    });

    let landing = document.getElementById('landing');
    landing.addEventListener("click", function (event) {
        window.alert("The shuttle is landing. Landing gear engaged.")

        let pls = document.getElementById("flightStatus")
        pls.replaceWith('The shuttle has landed');

        let pg = document.getElementById("spaceShuttleHeight")
        pg.replaceWith('0')

        let shuttleBackground = document.getElementById('shuttleBackground')
        shuttleBackground.setAttribute('style', 'background-color: green')
    
    });

    let missionAbort = document.getElementById('missionAbort');
    missionAbort.addEventListener("click", function (event) {
        window.alert('Confirm that you want to abort the mission')

        let pas = document.getElementById("flightStatus")
        pas.replaceWith('Mission aborted');

        let pah = document.getElementById("spaceShuttleHeight")
        pah.replaceWith('0')

        let shuttleBackground = document.getElementById('shuttleBackground')
        shuttleBackground.setAttribute('style', 'background-color: green')

    
    });


    right.addEventListener("click", function (event) {
    let right = document.getElementById('rocket');
    right.setAttribute('style', 'padding-left: 10px')
    });


    left.addEventListener("click", function (event) {
    let left = document.getElementById('rocket');
    left.setAttribute('style', 'padding-right: 10px')
    });

    up.addEventListener("click", function (event) {
    let up = document.getElementById('spaceShuttleHeight');
    up += 10000
    });

    down.addEventListener("click", function (event) {
    let down = document.getElementById('spaceShuttleHeight');
    down -= 10000 
    });
});