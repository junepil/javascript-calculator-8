import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const inputString = await MissionUtils.Console.readLineAsync();

    const numbers = this.parseInput(inputString);
    const result = this.sumNumbers(numbers);

    MissionUtils.Console.print(`결과 : ${result}`);
    return;
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
