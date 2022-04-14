const myList = [{ name: "Ali", family: "Ziaei" }, { name: "AmirAli", family: "Gharib" }, { name: "Hossein", family: "Rahimi" }]

const filterList = (list, start, end) => {
    return list.filter(obj => {
        const name = obj.name;
        return name[0] === start && name[name.length - 1] === end; // Check Start the word and end word to match
    });
};
const filtered = filterList(myList, "A", "i");
console.log(filtered);
