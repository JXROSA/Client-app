input_name = []



// Age Verification
ageCheck = window.prompt("please enter your age:")
Name = window.prompt("please enter your Name:")

if (ageCheck < 18) {
 window.alert("You Submitted that you are " + ageCheck + " years old" + Name + ".")
 window.alert("Age must be 18 or older to visit this site")
}
else if (ageCheck >= 18 && ageCheck < 127) {
 window.alert("You are old enough to access this site.")
 window.alert("Welcome " + Name + "!")
}
else {
 window.alert("You must be honest about your age, " + Name + "!")
}