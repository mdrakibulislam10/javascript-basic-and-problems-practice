function isJavaScriptFile(fileName) {
    if (fileName.endsWith(".js")) {
        return true;
    }
    else {
        return false;
    }
};
const fileName = isJavaScriptFile("index.png");
console.log(fileName);