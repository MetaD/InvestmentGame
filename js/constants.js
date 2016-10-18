
var CLOSE_WINDOW_ALERT = 'Do you want to leave this page? Your progress will not be saved.';

var EARNING_TEXT = 'Your total earnings: $';

var allImgs = ['img/player_img/AF-234.jpg', 'img/player_img/AM-228.jpg', 'img/player_img/AM-243.jpg',
               'img/player_img/BF-036.jpg', 'img/player_img/BF-040.jpg', 'img/player_img/BM-010.jpg',
               'img/player_img/LF-229.jpg', 'img/player_img/LF-230.jpg', 'img/player_img/LM-211.jpg',
               'img/player_img/LM-225.jpg', 'img/player_img/WF-039.jpg', 'img/player_img/WM-230.jpg',
               'img/practice_img/usericon1.png', 'img/practice_img/usericon2.png', 'img/practice_img/usericon3.png',
               'img/practice_img/usericon4.png', 'img/practice_img/usericon5.png', 'img/practice_img/usericon6.png',
               'img/player_example_1.png', 'img/player_example_2.png', 'img/unknown_friend.png', 'img/unknown.png'];

var players = [['img/player_img/AF-234.jpg', 'Jessica'],
               ['img/player_img/AM-228.jpg', 'Michael'],
               ['img/player_img/AM-243.jpg', 'Chris'],
               ['img/player_img/BF-036.jpg', 'Sarah'],
               ['img/player_img/BF-040.jpg', 'Amanda'],
               ['img/player_img/BM-010.jpg', 'Matt'],
               ['img/player_img/LF-229.jpg', 'Samantha'],
               ['img/player_img/LF-230.jpg', 'Ashley'],
               ['img/player_img/LM-211.jpg', 'Josh'],
               ['img/player_img/LM-225.jpg', 'Nick'],
               ['img/player_img/WF-039.jpg', 'Emily'],
               ['img/player_img/WM-230.jpg', 'Jacob']];

var MAX_MONEY = 10;

var BLOCK_1_NUM_PLAYERS = 4;
var BLOCK_2_NUM_PLAYERS = 8;

var BLOCK_1_NUM_TRIALS_PER_PLAYER = 2;
var BLOCK_2_NUM_TRIALS_PER_PLAYER = 2;

var TRUSTWORTHY_RECI_MEAN = 0.5;
var UNTRUSTWORTHY_RECI_MEAN = 0.05;

var BLOCK_1_RECI_VAR = 0.04;
var HIGH_RECI_VAR = 0.12;
var LOW_RECI_VAR = 0.01;

var DEFAULT_RETURN_WAIT_TIME_MIN = 2000;
var DEFAULT_RETURN_WAIT_TIME_MAX = 6000;

var ASSIGNMENT_WAIT_TIME_MIN = 2500;
var ASSIGNMENT_WAIT_TIME_MAX = 4500;

var FIND_PARTNER_TIME_MIN = 10000;
var FIND_PARTNER_TIME_MAX = 25000;
