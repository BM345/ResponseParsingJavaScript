
export class ValueError extends Error {
    constructor(...params) {
        super(...params);
    }
}

export class Messages {
    constructor(messagesFile = "") {

        this.messagesFile = messagesFile;
        this.messages = [];

        if (messagesFile === "") {
            return;
        }

        var httpRequest = new XMLHttpRequest();

        httpRequest.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {

                var domParser = new DOMParser();
                var xmlDocument = domParser.parseFromString( httpRequest.responseXML);
                console.log(xmlDocument);
                var xmlElements = xmlDocument.getElementsByTagName("message");

                for (let xmlElement of xmlElements) {
                    var i = xmlElement.getAttribute("id");
                    var text = xmlElement.textContent;

                    this.messages.push({ "id": i, "text": text });
                }
            }
        }

        httpRequest.timeout = 3000;
        httpRequest.open("GET", this.messagesFile);
        httpRequest.send();
    }

    getMessageById(i, parameters = []) {
        if (this.messages.filter(m => m["id"] == i).length == 0) {
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