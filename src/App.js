import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const inputString =
      await Console.readLineAsync(
        '덧셈할 문자열을 입력해 주세요.\n',
      );

    const numbers = this.parseInput(inputString);
    const result = this.sumNumbers(numbers);

    Console.print(`결과 : ${result}`);
  }

  sumNumbers(numbers) {
    let sum = 0;

    for (const num of numbers) {
      if (num <= 0 || isNaN(num))
        throw Error(`[ERROR] ${num} is not a positive number`);
      sum += num ;
    }

    return sum;
  }

  parseInput(inputString) {
    let numbers = null;
    const SEPERATOR = "\\n";

    if (inputString.includes(SEPERATOR)) {
      const [configString, data] = inputString.split(SEPERATOR);
      const SPLITER_REGEX = /\/\/(.)/;

      const customSpliter = configString.match(SPLITER_REGEX)[1];
      const spliters = new RegExp(`,|:|${customSpliter}`);
      numbers = data.split(spliters);
    } else {
      numbers = inputString.split(/,|:/);
    }
    return numbers.map(n => parseFloat(n));
  }
}

export default App;
