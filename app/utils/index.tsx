export const calculateSumOfString = (inputString: string) => {
  if (inputString) {
    inputString = inputString.replace(/\\n/g, "\n");

    // Default Delimeters
    let delimiter = /,|\n/;

    if (inputString.startsWith("//")) {
      // If custom delimeter is provided
      const delimiterLineEnd = inputString.indexOf("\n");
      const customDelimiter = inputString.slice(2, delimiterLineEnd);
      delimiter = new RegExp(customDelimiter);

      inputString = inputString.slice(delimiterLineEnd + 1);
    }

    const numbers = inputString
      .split(delimiter)
      .map((currentItem) => Number(currentItem) || 0);

    let negativeNumbersArr = [];
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < 0) {
        negativeNumbersArr.push(numbers[i]);
      } else {
        sum += numbers[i];
      }
    }

    return { sum, negativeNumbers: negativeNumbersArr };
  }
  return { sum: 0, negativeNumbers: [] };
};
