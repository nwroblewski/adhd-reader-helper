const createBoldSpan = (text) => {
    const boldSpan = document.createElement("span");
    boldSpan.style.fontWeight = 900;
    boldSpan.textContent = text;
    return boldSpan;
} 

const createSpanElementWithText = (text) => {
    const spanElement = document.createElement("span");
    spanElement.textContent = text;
    return spanElement;
}

const clearElementTextContent = (element) => {
    element.textContent = "";
} 

const makeThreeLettersBig = (element) => {

    const splittedText = element.textContent.split(" ");

    element.textContent = "";

    splittedText.forEach(word => {
        var firstThreeLetters = word.slice(0,3);
        console.log(firstThreeLetters);
        var rest = word.slice(3, word.length) + " ";
        
        var boldSpan = createBoldSpan(firstThreeLetters);
        var spanElement = createSpanElementWithText(rest);
        element.appendChild(boldSpan);
        element.appendChild(spanElement);
    });
}

const getAllH4Headers = () => {
    return Array.from(document.getElementsByTagName("h4"));
}

const getAllH3Headers = () => {
    return Array.from(document.getElementsByTagName("h3"));
}

const getAllH2Headers = () => {
    return Array.from(document.getElementsByTagName("h2"));
}

const getAllH1Headers = () => {
    return Array.from(document.getElementsByTagName("h1"));
}

const getAllHeaders = () => {
    return getAllH1Headers().concat(getAllH2Headers()).concat(getAllH3Headers()).concat(getAllH4Headers());
}

const getAllPTags = () => {
    return Array.from(document.getElementsByTagName("p"));
}

const findAllElements = () => {
    var elements = getAllPTags();
    elements.concat(getAllHeaders());
    return elements;
}

const allElements = findAllElements();
allElements.forEach(element => makeThreeLettersBig(element));