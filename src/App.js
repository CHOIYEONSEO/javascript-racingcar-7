import { Console, Random } from "@woowacourse/mission-utils";
// Console.readLineAsync() / Console.print() / Random.pickNumberInRange()


// n대의 자동차는 전진 또는 멈출 수 있다.
// 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
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

    
    }





  }
}

export default App;
