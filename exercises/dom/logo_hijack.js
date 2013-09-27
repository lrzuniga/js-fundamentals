// EXERCISE: The Logo Hijack

// No homepage is safe from the logo bandit!

// Open up www.google.com in Chrome or Firefox, and open up the console.
// Find the Google logo and store it in a variable.
// Modify the source of the logo IMG so that it's a Yahoo logo instead.
// Find the Google search button and store it in a variable.
// Modify the text of the button so that it says "Yahooo!" instead.

//Javascript Logo Change
document.getElementById("hplogo").style.background = "url(http://l.yimg.com/rz/d/yahoo_frontpage_en-CA_s_f_p_101x50_frontpage.png) no-repeat";

//Javascript Button Change
document.getElementById("gbqfsa").innerText = "Yahoo Search";


