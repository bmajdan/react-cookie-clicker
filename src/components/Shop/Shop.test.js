const Shop = require("./Shop")
// @ponicode
describe("componentDidMount", () => {
    let inst

    beforeEach(() => {
        inst = new Shop.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})
