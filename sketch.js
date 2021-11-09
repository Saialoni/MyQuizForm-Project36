var canvas, backgroundImage;

var questions;
var bk_song;

var question, contestant, quiz;

function preload(){
  backgroundImage = loadImage("bg.jpg")
  bk_song = loadSound("music.mp3");
}

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.start();
  bk_song.play();
  bk_song.setVolume(0.025);
  
}

function draw(){
  background(backgroundImage);
}
