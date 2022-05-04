function getItems <T>(items : T[] ) : T[] {
    return new Array().concat(items);
}
let arrNumber = getItems<number>([10, 20, 30]);
//let arrNumber = getItems([10, 20, 30]); //tự suy luận ra kiểu của T từ đối số
let arrString = getItems<string>(["Hello", "Javascript"]);
arrNumber.push(40); // Correct
//@ts-ignore
arrNumber.push("Hi! Javascript"); // Compilation Error
arrString.push("Hello TypeScript"); // Correct
//@ts-ignore
arrString.push(50); // Compilation Error
console.log(arrNumber);
console.log(arrString);