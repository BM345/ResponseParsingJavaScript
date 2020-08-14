
export class RPNode {
    constructor(nodeType) {
        this.supernode = null;
        this.depth = 0;

        this.type = nodeType;
        this.subtype = "";

        this.start = 0;
        this.end = 0;
        this._text = "";

        this._latex = "";
        this._asciiMath = "";
        this._mathML = "";
    }

    get length() {
        return this.end - this.start;
    }

    get text() {
        return this._text;
    }

    get latex() {
        return this._latex;
    }

    get asciiMath() {
        return this._asciiMath;
    }

    get mathML() {
        return this._mathML;
    }

    get subnodes() {
        return [];
    }

    set subnodes(value) { }

    setDepth(depth = 0) {
        this.depth = depth;

        this.subnodes.forEach(subnode => {
            subnode.supernode = this;
            subnode.setDepth(depth + 1);
        })
    }

    copyTo(node) {
        node.supernode = this.supernode;
        node.depth = this.depth;
        node.type = this.type;
        node.subtype = this.subtype;
        node.start = this.start;
        node.end = this.end;
        node._text = this._text;
        node._latex = this._latex;
        node._asciiMath = this._asciiMath;
        node._mathML = this._mathML;
    }
}

export class RPWhiteSpaceNode extends RPNode {
    constructor() {
        super("whiteSpace");

        this.value = "";
    }
}

export class RPNumberNode extends RPNode {
    constructor() {
        super("number");

        this.value = "";
        this.integralPart = "";
        this.decimalPart = "";
        this.sign = "";
        this.signIsExplicit = false;
        this.isZero = false;
        this.integralPartIsZero = false;
        this.decimalPartIsZero = false;
        this.numberOfLeadingZeros = 0;
        this.numberOfTrailingZeros = 0;
        this.minimumNumberOfSignificantFigures = 0;
        this.maximumNumberOfSignificantFigures = 0;
        this.numberOfDecimalPlaces = 0;
    }

    get latex() {
        return this.value;
    }

    get asciiMath() {
        return this.value;
    }

    copyTo(node) {
        super.copyTo(node);

        node.value = this.value;
        node.integralPart = this.integralPart;
        node.decimalPart = this.decimalPart;
        node.sign = this.sign;
        node.signIsExplicit = this.signIsExplicit;
        node.isZero = this.isZero;
        node.integralPartIsZero = this.integralPartIsZero;
        node.decimalPartIsZero = this.decimalPartIsZero;
        node.numberOfLeadingZeros = this.numberOfLeadingZeros;
        node.numberOfTrailingZeros = this.numberOfTrailingZeros;
        node.minimumNumberOfSignificantFigures = this.minimumNumberOfSignificantFigures;
        node.maximumNumberOfSignificantFigures = this.maximumNumberOfSignificantFigures;
        node.numberOfDecimalPlaces = this.numberOfDecimalPlaces;
    }
}

export class RPCurrencyValueNode extends RPNumberNode {
    constructor() {
        super();

        this.currency = "";
    }

    static fromNumberNode(numberNode) {
        var currencyValueNode = new RPCurrencyValueNode();

        numberNode.copyTo(currencyValueNode);

        return currencyValueNode;
    }
}