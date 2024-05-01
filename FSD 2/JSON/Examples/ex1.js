/* write a script to define two json object name div1 and div2 having an array to store the names of the students this name should be sorted alphabetically in the object and should be return to the file at last both div object should be visible with names sorted alphabetically in the file */

let div1 = {
    "name" : ["Z","M","P"]
};
let div2 = {
    "name" : ["X","A","Y"]
}

let names = div1.name
names = names.concat(div2.name)
console.log(names.sort());