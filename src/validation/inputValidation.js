export default function inputValidation(input, type) {
    if (!input) {
        const errMessage = `[ERROR] ${type} 값을 입력해주세요(Empty Input)`;
        throw new Error(errMessage);
    }
}