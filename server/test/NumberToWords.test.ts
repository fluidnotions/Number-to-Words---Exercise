import { NumberToWords } from "NumberToWords"

describe('NumberToWords', () => {

    it('converts 10 → ten', () => {
        const input = 10
        const expected = 'ten'
        const result = NumberToWords.convert(input)
        expect(result).toEqual(expected)
    })

    it('converts 7 → seven', () => {
        const input = 7
        const expected = 'seven'
        const result = NumberToWords.convert(input)
        expect(result).toEqual(expected)
    })
    it('converts 22 → twenty two', () => {
        const input = 22
        const expected = 'twenty two'
        const result = NumberToWords.convert(input)
        expect(result).toEqual(expected)
    })
    it('converts 289 → two hundred and eighty nine', () => {
        const input = 289
        const expected = 'two hundred and eighty nine'
        const result = NumberToWords.convert(input)
        expect(result).toEqual(expected)
    })
    
    it('converts 902 → nine hundred and two', () => {
        const input = 902
        const expected = 'nine hundred and two'
        const result = NumberToWords.convert(input)
        expect(result).toEqual(expected)

    })
    
    
})