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

    for(const num of numbers) {
      sum += num ;
    }

    return sum;
  }

  parseInput(inputString) {
    let numbers = null;
    const seperator = "\\n";

    if (inputString.includes(seperator)) {
      const [configString, data] = inputString.split(seperator);
      const spliterRegex = /\/\/(.)/;

      const customSpliter = configString.match(spliterRegex)[1];
      const spliters = new RegExp(",|:|" + customSpliter);
      numbers = data.split(spliters);
    } else {
      numbers = inputString.split(/,|:/);
    }
    return numbers.map(n => parseFloat(n));
  }
}

export default App;
