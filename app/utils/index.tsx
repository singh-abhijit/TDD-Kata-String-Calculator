export const calculateSumOfString = (inputString: string) => {
  if (inputString) {
    inputString = inputString.replace(/\\n/g, "\n");

    // Default Delimeters
    let delimiter = /,|\n/;

    if (inputString.startsWith("//")) {
      const delimiterLineEnd = inputString.indexOf("\n");
      const delimiterPart = inputString.slice(2, delimiterLineEnd);

      // If delimeters in square brackets
      const delimiters = delimiterPart.match(/\[([^\]]+)\]/g);
      if (delimiters && delimiters.length > 0) {
        // Escape special characters
        const escapedDelimiters = delimiters
          .map((d) => d.slice(1, -1))
          // Remove the brackets []
          .map((d) => d.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"))
          // Escape special regex characters
          .join("|");

        delimiter = new RegExp(escapedDelimiters);
      } else {
        delimiter = new RegExp(delimiterPart);
      }

      inputString = inputString.slice(delimiterLineEnd + 1);
    }

    const numbers = inputString.split(delimiter).map(Number);
    console.log("inputString is ", numbers);

    let negativeNumbersArr = [];
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < 0) {
        negativeNumbersArr.push(numbers[i]);
      } else if (numbers[i] <= 1000) {
        sum += numbers[i];
      }
    }

    return { sum, negativeNumbers: negativeNumbersArr };
  }

  return { sum: 0, negativeNumbers: [] };
};
