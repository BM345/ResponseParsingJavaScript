
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

export class ValueError extends Error {
    constructor(...params) {
        super(...params);
    }
}


export class Messages {
    constructor(messagesFile = "../rp/messages.en-gb.xml") {

        this.messagesFile = messagesFile;
        this.messages = [];

        return;

        var httpRequest = new XMLHttpRequest();

        httpRequest.timeout = 3000;
        httpRequest.open("GET", this.messagesFile, false);
        httpRequest.send();

        var xmlDocument = httpRequest.responseXML;
        var xmlElements = xmlDocument.getElementsByTagName("message");

        for (let xmlElement of xmlElements) {
            var i = xmlElement.getAttribute("id");
            var text = xmlElement.textContent;

            this.messages.push({ "id": i, "text": text });
        }
    }

    getMessageById(i, parameters = []) {
        if (this.messages.filter(m => m["id"] == i).length == 0) {
            return "";
            throw new ValueError("There is no message with the id '" + i.toString() + "' in " + this.messagesFile + ".");
        }

        var text = this.messages.filter(m => m["id"] == i)[0]["text"];

        var n = 0;

        for (let parameter of parameters) {
            n += 1;
            var tag = "#p" + n.toString() + "#";
            text = text.replace(tag, parameter.toString());
        }

        return text;
    }
}