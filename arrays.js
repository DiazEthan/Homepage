var arr = new Array()

arr[0] = "Zack";
arr[1] = "Aaron";
arr[2] = "Jonathan";
arr[3] = "Grace";

console.log(arr);

var number = prompt("Give me a number");
var number_2 = prompt("Give me a other number");
const Add = 1;
const number1 = number;
const number2 = number_2;

function AddOne(selector) {
    const single =+ number1 + Add;
    console.log(single);
}

const single = AddOne(number1);

function Both(AddOne, number) {
    const FinalNumber =+ number2 + 1;
    console.log(FinalNumber);
}

if (number2%2 == 0)
{
    const second = Both(number2);
}
else
{
    document.write("The second number is odd");
}


for (let i in arr) {

    const Value = AddOne(Both(i))
    console.log(arr[i]);

}