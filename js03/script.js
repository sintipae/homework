// task 1: greeting

{
    let name = prompt("Enter your name: ");
    alert("Hello, " + name + "!");
}

// task 2: gopni4ek

{
    let str = prompt("Enter the string: ");
    let string = str.split(",");
    let result = string.join(" блін,");

    alert(result);
}

// task 3: capitalize

{
    let str = "cANBerRa";
    let result;
    let first = str.slice(0, 1).toUpperCase();
    result = first + str.slice(1, str.length).toLowerCase();

    console.log(result);
}

// task 4: word count 

{
    let str = "Hi Hello Good Morning Sun Shine";
    console.log(str.split(" ").length);
}

// task 5: credentials

{
    let name = prompt("Enter your name: ").trim();
    let surname = prompt("Enter your surname: ").trim();
    let middleName = prompt("Enter your middle name: ").trim();

    let fullName = name.charAt(0).toUpperCase() + name.slice(1) + " " + surname.charAt(0).toUpperCase() + surname.slice(1) + " " + middleName.charAt(0).toUpperCase() + middleName.slice(1);
    alert(fullName);
}

// task 6: beer

{
    let str = "Було жарко. Василь пив пиво вприкуску з креветками";
    let result = str.split("пиво").join("чай");

    console.log(result);
}

// task 7: no tag

{
    let str = "якийсь текст, в якому є один тег <br /> і всяке інше";
    let result;
    let openBracket = str.indexOf("<");
    let closeBracket = str.indexOf(">");

    result = str.slice(0, openBracket) + str.slice(closeBracket + 1, str.length);
    console.log(result); 
}

// task 8: big tag

{
    let str = "якийсь текст, в якому є один тег <br /> і всяке інше";
    let result;
    let openBracket = str.indexOf("<");
    let closeBracket = str.indexOf(">");

    result = str.slice(0, openBracket) + str.slice(openBracket, closeBracket + 1).toUpperCase() + str.slice(closeBracket + 1, str.length);
    console.log(result); 
}

// task 8: new line

{
    let str = prompt("Enter the string: ");

    alert(str.split("\\n").join("\n"));
}

// task 9: youtube

{
    let str = prompt("Link: ");
    const regex = /v=([A-Za-z0-9-_]+)/;
    let arr = str.match(regex);
    document.write(`<iframe width="560" height="315" src="https://www.youtube.com/embed/${arr[1]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`);
    console.log(arr);
}