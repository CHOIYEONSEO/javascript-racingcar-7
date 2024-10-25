export default function nameValidation(name) {
    if (name.length > 5) {
        const errMessage = `[ERROR] 자동차 이름을 5자 이하로 작성해주세요`;
        throw new Error(errMessage);
    }
}
