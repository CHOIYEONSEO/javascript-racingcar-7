import { Console, Random } from "@woowacourse/mission-utils";
// Console.readLineAsync() / Console.print() / Random.pickNumberInRange()
import Validate from "./Validate.js";

// 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션은 종료되어야 한다.

class App {
  async run() {
    const CAR_NAME = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    const MAX_ATTEMPTS = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");

    //, 기준으로 이름 분리와 함께 car(이름, 위치) 오브젝트 생성.
    const CAR_NAME_ARRAY = CAR_NAME.split(',');
    const CAR_POSITION_ARRAY = CAR_NAME_ARRAY.map(n => 0);
    const car = {
      name: CAR_NAME_ARRAY,
      position: CAR_POSITION_ARRAY,
    };

    car.name.forEach(Validate.nameValidate);

    Console.print("\n실행 결과");
    // for 반복문이 적절한가?
    for (var j = MAX_ATTEMPTS; j > 0; j--){
      for (var i = 0; i < CAR_NAME_ARRAY.length; i++){
        let randomNum = Random.pickNumberInRange(0, 9);

        if (randomNum >= 4){
          // 전진 -> depth 3. 수정할 것.
          car.position[i] += 1;
        }

        // 진행과정 출력 메서드 분리 필요
        const RACE_PROGRESS_BAR = '-'.repeat(car.position[i]);
        const RACE_PROGRESS_MESSAGE = `${car.name[i]} : ${RACE_PROGRESS_BAR}`;
        Console.print(RACE_PROGRESS_MESSAGE);
      }
      Console.print("");
    }  

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
