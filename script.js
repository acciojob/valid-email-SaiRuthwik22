function validEmail(str) {
  //your JS code here.
	return(/[a-z]*@[a-z]*3\.[a-z \.]/g.test(str))
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
