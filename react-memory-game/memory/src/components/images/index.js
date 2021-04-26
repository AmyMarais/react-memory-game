//import 6 different images to create 6 pairs of matching cards
import Facebook from "./1.jpg";
import Twitter from "./2.jpg";
import Instagram from "./3.jpg";
import LinkedIn from "./4.jpg";
import Spotify from "./5.jpg";
import AppleMusic from "./6.jpg";
import back from "./back.jpg";


//let all images remain "unflipped" in intial state
export let images = [
    {
        name: "Facebook",
        pic: Facebook,
        flipped: false,
    },
    {
        name: "Twitter",
        pic: Twitter,
        flipped: false,
    },
    {
        name: "Instagram",
        pic: Instagram,
        flipped: false,
    },
    {
        name: "LinkedIn",
        pic: LinkedIn,
        flipped: false,
    },
    {
        name: "Spotify",
        pic: Spotify,
        flipped: false,
    },
    {
        name: "AppleMusic",
        pic: AppleMusic,
        flipped: false,
    },
    {
        name: "Facebook", //create a double batch of cards to create 6 pairs user needs to match
        pic: Facebook,
        flipped: false,
    },
    {
        name: "Twitter",
        pic: Twitter,
        flipped: false,
    },
    {
        name: "Instagram",
        pic: Instagram,
        flipped: false,
    },
    {
        name: "LinkedIn",
        pic: LinkedIn,
        flipped: false,
    },
    {
        name: "Spotify",
        pic: Spotify,
        flipped: false,
    },
    {
        name: "AppleMusic",
        pic: AppleMusic,
        flipped: false,
    },
];
//export images in an array structure to access them better
export const blankCard = back;