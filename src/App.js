import { Console, Random } from "@woowacourse/mission-utils";
// Console.readLineAsync() / Console.print() / Random.pickNumberInRange()
import Validation from "./Validation.js";
import Race from "./Race.js";

// 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션은 종료되어야 한다.

class App {
  async run() {
    const CAR_NAME = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    Validation.inputValidate(CAR_NAME, '자동차 이름');
    const MAX_ATTEMPTS = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    Validation.inputValidate(MAX_ATTEMPTS, '시도 횟수'); //attemptsValidate로 수정 필요. 타입 숫자로 변경되도록.

    //, 기준으로 이름 분리와 함께 car(이름, 위치) 오브젝트 생성.
    const CAR_NAME_ARRAY = CAR_NAME.split(',');
    const CAR_POSITION_ARRAY = CAR_NAME_ARRAY.map(n => 0);

    const car = {
      name: CAR_NAME_ARRAY,
      position: CAR_POSITION_ARRAY,
    };

    car.name.forEach(Validation.nameValidate);
    
    Console.print("\n실행 결과");
    // for 반복문이 적절한가? -> 적절하지 않음. 에어비엔비 컨벤션 13.6에 따라 bad code. 수정할것.
    Race.roundProgress(Number(MAX_ATTEMPTS), car);

    const WINNER_POSITION = Math.max(...car.position);
    
    let position = 0;
    const WINNER_ARRAY = []
    while (true){
      let WINNER_INDEX = car.position.indexOf(WINNER_POSITION, position);
      
      if (WINNER_INDEX == -1){
        break;
      }
      WINNER_ARRAY.push(car.name[WINNER_INDEX]);
      position = WINNER_INDEX + 1;
    }

    const WINNER_MESSAGE = WINNER_ARRAY.join(', ');
    Console.print(`최종 우승자 : ${WINNER_MESSAGE}`);

  }
}

export default App;
