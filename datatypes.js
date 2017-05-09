function dataTypes(inputValue){
	if (typeof inputValue === "string"){
		return inputValue.length;
	}
	else if ((typeof inputValue === "undefined") || (inputValue === null)){
		return "no value";
	}
	else if (typeof inputValue === "boolean"){
		return inputValue;
	}
	else if (typeof inputValue === "number"){
		if (inputValue < 100){
			return ("less than 100");
		}
		else if (inputValue === 100){
			return ("equal to 100");
		}
		else {
			return ("more than 100");
		}

	}
	else if (Array.isArray(inputValue)){
		if (inputValue.length <= 3){
			return inputValue[2];
		}
		else {
			return ("undefined");
		}
	}
	else if (typeof inputValue === "function"){
		inputValue(true);
		return "called callback";
	}
	else{
		return;
	}
	
}
console.log(dataTypes(null));
console.log(dataTypes(undefined));
console.log(dataTypes(true));
console.log(dataTypes(false));
console.log(dataTypes(44));
console.log(dataTypes(144));
console.log(dataTypes(100));
console.log(dataTypes('tergiverstae'));
console.log(dataTypes('555'));
console.log(dataTypes(''));
console.log(dataTypes([]));
console.log(dataTypes([0,1,2]));
console.log(dataTypes([2,3]));

