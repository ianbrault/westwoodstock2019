/*
 * lineup.js
 */

let lineup_title = document.getElementById("lineup-title");
let lineup_switch = document.getElementById("lineup-switch");
let lineup_body = document.getElementById("lineup-text-wrapper");

const lineup_2018 = [
    "ANIMVLZ", "Blue Apples", "Dio Lewis", "My Friend Ryan", "Munir Griffin", "The Dreads",
    "Triangle Fire", "Ascanio", "Cerulean", "Drew Karperos", "Nightswimmers", "Officer Gavin",
    "BEL", "Cole Heramb & The Flame Train", "Miles Gibson", "Temme Scott", "Tree Down Kelton"
];

const lineup_2017_maj = [
    "Alec Be", "Austin Gatus", "Cassie Thompson", "Colin Tandy", "Girl Friday",
    "Global Soul Collective", "Griff Klawson", "GUP TRUP", "Miles Gibson", "Shawn Dawg",
    "Semichrome", "Temme Scott", "Triangle Fire", "97 Caravan"
];

const lineup_2017_min = [
    "AVTR", "Ear Ringers", "Good Luck Club", "Griff Klawson", "Kendirck", "Laura Savage",
    "Lost City Ratio", "Nightswimmers", "Putrifiers", "Rey Matthews", "Reyma", "The Rosewaters",
    "Ryan Chen", "Santiago’s Trip", "Stefan Dismond and the Love Supreme", "Tharp’s Logg",
    "Torso Twin", "Uncharted Territory", "Voodoo", "Willow and the Rain", "4kei"
];

const join_artist_strings = (lineup) => lineup.join(" <span class=\"dot\">•</span> ");

let lineup_p_2018 = document.createElement("p");
lineup_p_2018.id = "lineup2018";
lineup_p_2018.innerHTML = join_artist_strings(lineup_2018);

let lineup_p_2017_maj = document.createElement("p");
lineup_p_2017_maj.id = "lineup2017-maj";
lineup_p_2017_maj.innerHTML = join_artist_strings(lineup_2017_maj);

let lineup_p_2017_min = document.createElement("p");
lineup_p_2017_min.id = "lineup2017-min";
lineup_p_2017_min.innerHTML = join_artist_strings(lineup_2017_min);

const unset_lineup = () => {
    while (lineup_body.firstChild)
        lineup_body.removeChild(lineup_body.firstChild);
};

let current_lineup = 2018;
const set_lineup = (year) => {
    lineup_title.innerHTML = `${year} Lineup`;
    lineup_switch.innerHTML = `click to see ${year === 2018 ? "last year's" : "this year's"} lineup`;

    if (year === 2018) {
        lineup_body.appendChild(lineup_p_2018);
    } else {
        lineup_body.appendChild(lineup_p_2017_maj);
        lineup_body.appendChild(lineup_p_2017_min);
    }

    current_lineup = year;
};

const swap_lineups = () => {
    unset_lineup();
    set_lineup(current_lineup === 2018 ? 2017 : 2018);
};

lineup_title.onclick = swap_lineups;
document.getElementById("lineup-switch").onclick = swap_lineups;

set_lineup(2018);