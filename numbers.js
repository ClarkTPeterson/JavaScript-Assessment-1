//1. provide the sum of the following variables 
var num10 = 10;
var string8 = '8';
var one = 1;
var sum = num10+string8+one;
sum;

//2. write a loop that will log only numbers divisible by 3 between 20 - 100

var numbers=[];
for(var i = 20;i<100;i++){
	if((i % 3) === 0){
		numbers.push(i);
	}
}
numbers;



//3. find the class average given the following test scores

var scores = [88, 84, 100, 92, 70, 76, 76, 84, 86, 98]; 
var sum = 0;
for(var i = 0;i<scores.length;i++){
    sum = sum + scores[i];
}
sum = sum/scores.length;
sum;
