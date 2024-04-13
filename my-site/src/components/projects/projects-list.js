import wordle from "../../static/wordle.png"
import website from "../../static/site.png";
import groupRides from "../../static/group-rides.png";

export const projectsList = {
  0: {
    name: "Group Rides",
    description: "App to allow organizations and their members to plan rides to events and organization outings.",
    stack: ["Javascript", "React Native", "Firebase"],
    picture: groupRides,
    additional: "Built for CS 4720 at UVA and found that I really enjoy doing mobile app development. Shoutout to Jaden Kyler-Wank. Lost Firebase access.",
    link: "https://github.com/PeterShin23/GroupRides"
  },
  1: {
    name: "Not Better Than Wordle",
    description: "A Wordle clone. Added a feature to allow the user to play multiple times in a single day.",
    stack: ["Typescript", "React", "Tailwind CSS"],
    picture: wordle,
    additional: "Surprising challenge: Logic for coloring guessed characters.",
    link: "https://notbetterthanwordle.netlify.app/"
  },
  2: {
    name: "Peter Shin Site",
    description: "Personal website to display my experiences and projects",
    stack: ["Javascript", "React", "Tailwind CSS"],
    picture: website,
    additional: "Surprising challenge: Logic for scroll styling and behavior",
    link: "https://peter-shin-website.netlify.app/"
  },
}