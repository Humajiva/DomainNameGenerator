/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let extensions = [".com", ".net", ".us", ".io"];
  let domain = [];
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  var htmlElement = document.getElementById("domain-list");

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < extensions.length; l++) {
          domain.push(pronoun[i] + adj[j] + noun[k] + extensions[l]);
        }
      }
    }
  }
  console.log(domain);
  for (let i = 0; i < domain.length; i++) {
    htmlElement.innerHTML += "<li>" + domain[i] + "</li>";
  }
};
