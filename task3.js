function BaseNumberConvertor(number, m) {
    let numberInput = number
    let baseNumber = m
    let outPut;
    outPut = numberInput.toString(baseNumber)
    console.log(outPut);
}
// if numberInput = 2  convert to  Binary
// if numberInput = 8  convert to  Octal
// if numberInput = 16  convert to  Hexadecimal

BaseNumberConvertor(20, 2)
