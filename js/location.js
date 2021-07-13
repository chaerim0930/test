var container = document.querySelector("#map");
var t_on= document.querySelectorAll(".traffic li")[0];
var t_off= document.querySelectorAll(".traffic li")[1];

var drag = true;
var zoom = true;

var options = { 
	center: new kakao.maps.LatLng(37.57589689342959,126.97689500245646), 
	level: 4 //지도크기 조정
};