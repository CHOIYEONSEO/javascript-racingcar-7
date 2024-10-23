import { Console, Random } from "@woowacourse/mission-utils";
// Console.readLineAsync() / Console.print() / Random.pickNumberInRange()


// 이름은 5자 이하만 가능하다.
// 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
// 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
// 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션은 종료되어야 한다.

class App {
  async run() {
    // 입력 요청 메소드로 분리 필요해 보인다.
    const CAR_NAME = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    const MAX_ATTEMPTS = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");

    //, 기준으로 이름 분리와 함께 car(이름, 위치) 오브젝트 생성.
    const CAR_NAME_ARRAY = CAR_NAME.split(',');
    const CAR_POSITION_ARRAY = CAR_NAME_ARRAY.map(n => 0);
    const car = {
      name: CAR_NAME_ARRAY,
      position: CAR_POSITION_ARRAY,
    };
    // 분리 후 이름 5자 이하인지 유효성 체크 필요하다.
    
    Console.print("실행 결과");
    // for 반복문이 적절한가? -> 적절하지 않음. 에어비엔비 컨벤션 13.6에 따라 bad code. 수정할것.
    for (var j = MAX_ATTEMPTS; j > 0; j--){
      for (var i = 0; i < CAR_NAME_ARRAY.length; i++){
        //randomNum이 첫 시도에는 undefined라고 나오는 이유?
        let randomNum = Random.pickNumberInRange(0, 9);

        if (randomNum >= 4){
          // depth 3이다. -> 수정할것.
          // 전진
          car.position[i] += 1;
        }

        // 진행과정 출력 메소드 분리 필요
        const RACE_PROGRESS_BAR = '-'.repeat(car.position[i]);
        const RACE_PROGRESS_MESSAGE = `${car.name[i]} : ${RACE_PROGRESS_BAR}`;
        Console.print(RACE_PROGRESS_MESSAGE);
      }
      Console.print("");
    }

    const WINNER_POSITION = Math.max(...car.position);
    
    let position = 0;
    const WINNER_INDEX_ARRAY = []
    while (true){
      let WINNER_INDEX = car.position.indexOf(WINNER_POSITION, position);
      
      if (WINNER_INDEX == -1){
        break;
      }
      WINNER_INDEX_ARRAY.push(WINNER_INDEX);
      position = WINNER_INDEX + 1;
    }

    if (WINNER_INDEX_ARRAY.length == 1){
      Console.print(`최종 우승자 : ${car.name[WINNER_INDEX_ARRAY[0]]}`);
    } 



  }
}

export default App;
