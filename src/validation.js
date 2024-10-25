class Validation {
    constructor() {}

    static inputValidate(input, type) {
        if (!input) {
            const errMessage = `[ERROR] ${type} 값을 입력해주세요(Empty Input)`;
            throw new Error(errMessage);
        }
    }

    static nameValidate(name) {
        if (name.length > 5) {
            const errMessage = `[ERROR] 자동차 이름을 5자 이하로 작성해주세요`;
            throw new Error(errMessage);
        }
    }
}

export default Validation;