class OperationAdd {
	constructor() {
		
	}
	
	doOperation(num1, num2) {
		return num1 + num2;
	}
}

class OperationSubstract {
	constructor() {
		
	}
	
	doOperation(num1, num2) {
		return num1 - num2;
	}
}

class OperationMultiply {
	constructor() {
		
	}
	
	doOperation(num1, num2) {
		return num1 * num2;
	}
}

class Context {
	constructor(strategy) {
		this.strategy = strategy;
	}
	
	executeStrategy(num1, num2) {
		return (this.strategy.doOperation(num1, num2));
	}
}

const context_add = new Context(new OperationAdd());
console.log(context_add.executeStrategy(10, 5));

const context_substract = new Context(new OperationSubstract());
console.log(context_substract.executeStrategy(10, 5));

const context_multiply = new Context(new OperationMultiply());
console.log(context_multiply.executeStrategy(10, 5));