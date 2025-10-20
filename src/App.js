import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const inputString = await MissionUtils.Console.readLineAsync();
    const numbers = this.parseInput(inputString);
    const result = this.sumNumbers(numbers);
  }

  sumNumbers(numbers) {
    let sum = 0;

    for (const num in numbers) {
      sum += num;
    }

    return sum;
  }

  parseInput(inputString) {
    console.log(inputString);
    let numbers = null;
    const baseSpliters = ",;";

    let customSpliter = null;

    if (inputString.includes("\n")) {
      const [configString, data] = inputString.split("\n");
      const spliterRegex = /\/\/(.)/;

      customSpliter = configString.match(spliterRegex)[0];
      const spliters = new RegExp(baseSpliters + customSpliter);
      numbers = data.split(spliters);
    } else {
      numbers = inputString.split(baseSpliters);
    }
    numbers.map((n) => parseFloat(n));
  }
}

export default App;
