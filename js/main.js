function setCharAt(str, index, chr) {
	return str.substr(0, index) + chr + str.substr(index + 1)
}

function adjustChar(char) {
	char = String.fromCharCode(char.charCodeAt(0) + 1)

	return char
}

function decrypt(str) {
	var i = str.length
	while (i) {
		var index = i - 1
		var newChar = adjustChar(str[index])
		str = setCharAt(str, index, newChar)
		i--
	}

	return str
}
