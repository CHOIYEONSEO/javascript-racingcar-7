import { Console, Random } from "@woowacourse/mission-utils";
// Console.readLineAsync() / Console.print() / Random.pickNumberInRange()
import Validation from "./Validation.js";
import Race from "./Race.js";
import Winner from "./Winner.js";

class App {
  async run() {
    const CAR_NAME = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    Validation.inputValidate(CAR_NAME, '자동차 이름');
    let maxAttempts = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    maxAttempts = Validation.attemptsValidate(maxAttempts, '시도 횟수');

    //, 기준으로 이름 분리와 함께 car(이름, 위치) 오브젝트 생성.
    const CAR_NAME_ARRAY = CAR_NAME.split(',');
    const CAR_POSITION_ARRAY = CAR_NAME_ARRAY.map(n => 0);

    const car = {
      name: CAR_NAME_ARRAY,
      position: CAR_POSITION_ARRAY,
    };

    car.name.forEach(Validation.nameValidate);
    
    Console.print("\n실행 결과");
    Race.roundProgress(maxAttempts, car);

    const WINNER_ARRAY = Winner.findWinner(car);
    Winner.printWinner(WINNER_ARRAY);

  }
}

export default App;
