import { Console } from "@woowacourse/mission-utils";

class Winner {
    constructor() {}

    static findWinner(myObject) {
        const WINNER_POSITION = Math.max(...myObject.position);

        return Winner.findAllWinners(myObject, WINNER_POSITION);
    }

    static findAllWinners(myObject, element) {
        let fromIdx = 0;
        const WINNER_ARRAY = []

        while (true){
            let winnerIdx = myObject.position.indexOf(element, fromIdx);
            
            if (winnerIdx == -1){
              break;
            }

            WINNER_ARRAY.push(myObject.name[winnerIdx]);
            fromIdx = winnerIdx + 1;
        }

        return WINNER_ARRAY;
    }

    static printWinner(myArray) {
        const WINNER_MESSAGE = myArray.join(', ');

        Console.print(`최종 우승자 : ${WINNER_MESSAGE}`);
    }
}

export default Winner;