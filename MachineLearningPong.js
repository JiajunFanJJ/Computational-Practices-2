// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Webcam Image Classification using a pre-trained customized model and p5.js
This example uses p5 preload function to create the classifier
=== */

// Classifier Variable
let classifier;
// Model URL
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/45rJgeaj/';

// Video
let video;
let flippedVideo;
// To store the classification
let label = "";

var x, y;
var vx, vy;
var leftPaddle;
var rightPaddle;
var vleftPaddle = 0;
var vrightPaddle = 0;
var labelState = 1;

// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
}

function setup() {
  createCanvas(320, 260);
  // Create the video
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();

  flippedVideo = ml5.flipImage(video)
  // Start classifying
  classifyVideo();

  x = width / 2;
  y = height / 2;
  vx = 3;
  vy = 1.2;

  leftPaddle = height / 2;
  rightPaddle = height / 2;

  rectMode(CENTER);
}

function draw() {
  background(0);
  // Draw the video
  image(flippedVideo, 0, 0);

  // Draw the label
  fill(255);
  textSize(16);
  textAlign(CENTER);
  text(label, width / 2, height - 4);

  rect(20, leftPaddle, 10, 50);
  rect(width - 20, rightPaddle, 10, 50);

  ellipse(x, y, 20);

  x = x + vx;
  y = y + vy;

  if (y < 10) {
    vy = -vy;
  }
  if (y > height - 10) {
    vy = -vy;
  }
  if (x < 35) {
    if (y < leftPaddle + 25 && y > leftPaddle - 25) {
      vx = -vx;
    } else {
      // game over
    }
  }
  if (x > width - 35) {
    if (y < rightPaddle + 25 && y > rightPaddle - 25) {
      vx = -vx;
    } else {
      // game over
    }
  }

  leftPaddle = constrain(leftPaddle + vleftPaddle, 25, height - 25);
  rightPaddle = constrain(rightPaddle + vrightPaddle, 25, height - 25);

  if (label == "Rock") {
    vleftPaddle = vrightPaddle = 3;
  }
  if (label == "Paper") {
    vleftPaddle = vrightPaddle = -3;
  }
  if (label == "Empty") {
    vleftPaddle = vrightPaddle = 0;
  }
}


// Get a prediction for the current video frame
function classifyVideo() {
  flippedVideo = ml5.flipImage(video)
  classifier.classify(flippedVideo, gotResult);
}

// When we get a result
function gotResult(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  // console.log(results[0]);
  label = results[0].label;
  
  if (label == "Rock" || label == "Paper") {
    labelState == 2;
  } else{
    labelState == 1;
  }
  
  // Classifiy again!
  if (labelState == 1) {
    classifyVideo();
  }
}
