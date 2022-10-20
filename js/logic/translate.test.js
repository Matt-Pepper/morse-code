import { translate } from "./translate.js"

describe('translating between english and morse code', () => {
    const english = ["HELLO", "SOS SOS SOS"]
    const morse = [".... . .-.. .-.. ---", "... --- ... | ... --- ... | ... --- ..."]

    for (let i = 0; i < english.length; i++) {
        test("english input receives correct morse output", () => {
            expect(translate(english[i])).toBe(morse[i])
        })
        test("morse input receives correct english output", () => {
            expect(translate(morse[i])).toBe(english[i])
        })
    }
    test("returns a string", () => {
        expect(typeof translate(english[0])).toBe("string")
    })
    test("empty string should return empty string", () => {
        expect(translate("")).toBeDefined()
    })
})