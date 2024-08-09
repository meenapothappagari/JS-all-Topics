// String => strings are Immutable (we can't chnage it) or it is a Primitive data type.

// ...........................STRING METHODS..................

// 1.Length => It is used to Return the length of the string.
// let a="meena"
// console.log(a.length)

// 2.to UpperCase() => It is used to convert a string to uppercase.
// let a="meennaaa";
// console.log(a.toLowerCase());

// 3.toLowerCase() => It is used to convert a string to lowercase.
// let a="Meenaaa";
// console.log(a.toLowerCase());

// 4.charAt() => It is used to return the character at a specified Index.
// let a="meena";
// console.log(a.charAt(3));

// 5.Trim() => It is used to remove white space from both ends of a string.
// I.Trim Start() => It is used to remove white space from starting of a string.
// II.Trim End() => It is used to remove white space from  end of a string.
// let a="   meena   ";
// console.log(a.trim());
// console.log(a.trimStart());
// console.log(a.trimEnd());

// 5.slice() => It is used to extract a part of a string and return a new string.
// let a="meena";
// console.log(a.slice(2,5)); last di tiskodhu endukante using of Index

// 6.substring() => It is used to extract a part of a string and return a new string.
let a="meena";
console.log(a.substring(-4,4)); 

// 7.replace() => It is used to replace a specified value with another value in astring.
// let a="hi meena";
// let b="meena";
// console.log(a.replace("meena","vijji"))

// 8.replace() => It is used to replace all the accurence of specified value with another value ina string.
// let a=" hi hello meena";
// console.log(a.replace("hi","meena");

// 9.repeat() => It is used to repeat a string a specified number of times.
// let a="meena"
// console.log(a.repeat(10));

// 10.split() => It is used to split a string into an array of a substring.(IMPORTANT)
// let a="meena,mee,vijji,kamala,phani";
// console.log(a.split());

// 11.includes() => It is used to check wether a string contains a specified value..



// String => Primitive data type, "" or '' or ` ${}`, Immutable
//String Methods.

//1. length => It is used to return the length of a string. str.length

// let a = "Hello World";
// console.log(a.length, "This is the length of a string");

//2. toUpperCase() => It is used to convert a string to uppercase. str.toUpperCase()
// let b = "Hello World";
// console.log(b.toUpperCase(), "This is the string in uppercase");

//3. toLowerCase() => It is used to convert a string to lowercase. str.toLowerCase()
// let c = "Hello World";
// console.log(b.toLowerCase(), "This is the string in uppercase");

//4. charAt() => It is used to return the character at a specified index. str.charAt(index)
// console.log(a.charAt(0), "This is the character at a specified index");

//5. charCodeAt() => It is used to return the Unicode of the character at a specified index. str.charCodeAt(index)
// console.log(c.charCodeAt(1), "This is the Unicode of the character at a specified index");

//6. concat() => It is used to join two or more strings. str.concat(string1, string2, string3)
// let text = "Helllo";

// let bcs = "World";

// console.log(text.concat(" ", bcs), "This is the joined string"); + operator

//Trim => It is used to remove the white spaces from both ends of a string. str.trim()
// Trim start => It is used to remove the white spaces from the start of a string. str.trimStart()
// Trim end => It is used to remove the white spaces from the end of a string. str.trimEnd()
// let string = "   Hello World   ";

// console.log(string.trimEnd(), "This is the trimmed string");

//7. slice method => It is used to extract a part of a string and returns a new string. str.slice(start, end)
// let string = "Hello World";
// console.log(string.slice(2,8));

//8. substring() => It is used to extract a part of a string and returns a new string. str.substring(start, end)
// console.log(string.substring(4,1), "This is the sliced string");

//9. substr() => It is used to extract a part of a string and returns a new string. str.substr(start, length)
// console.log(string.substr(1,3), "This is the sliced string");

//replace() => It is used to replace a specified value with another value in a string. str.replace(value1, value2)

// let string = "Hello World";
// console.log(string.replace("Hello", "Hi"), "This is the replaced string");


//10. replaceAll() => It is used to replace all the occurrences of a specified value with another value in a string. str.replaceAll(value1, value2)
// console.log(string.replaceAll("Hello", "Hi"), "This is the replaceAll string");


//11. repeat() => It is used to repeat a string a specified number of times. str.repeat(count)

// console.log(string.repeat(2), "This is the repeated string");


//12. split() => It is used to split a string into an array of substrings. str.split(separator, limit)
// let string = "Hello World ";
// console.log(string.split(" "), "This is the split string");
 

