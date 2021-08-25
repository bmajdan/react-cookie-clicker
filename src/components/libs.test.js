const libs = require("./libs")
// @ponicode
describe("libs.buyItem", () => {
    test("0", () => {
        let callFunction = () => {
            libs.buyItem("Michael", 977.00, [10, 1000, 1, 10, 1, 1, 1000, 1000])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            libs.buyItem("Jean-Philippe", 25.00, [1000, 10, 10, 1, 1, 1000, 10, 1])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            libs.buyItem("Jean-Philippe", 977.00, [10, 1000, 1000, 1000, 1000, 1, 1000, 1])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            libs.buyItem("Anas", 392.00, [1, 1, 1, 10, 10, 10, 1, 1000])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            libs.buyItem("Michael", 571.00, [1000, 1, 10, 1, 1000, 1, 1000, 1000])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            libs.buyItem("", undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("libs.chanceCalculation", () => {
    test("0", () => {
        let callFunction = () => {
            libs.chanceCalculation(10.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            libs.chanceCalculation(0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            libs.chanceCalculation(10.23)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            libs.chanceCalculation(-1.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            libs.chanceCalculation(-29.45)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            libs.chanceCalculation(Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("libs.levelCalculation", () => {
    test("0", () => {
        let callFunction = () => {
            libs.levelCalculation("https://accounts.google.com/o/oauth2/revoke?token=%s")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            libs.levelCalculation(9)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            libs.levelCalculation("www.google.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            libs.levelCalculation("https://")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            libs.levelCalculation(-1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            libs.levelCalculation(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("libs.achievementsChecker", () => {
    test("0", () => {
        let callFunction = () => {
            libs.achievementsChecker("user@host:300")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            libs.achievementsChecker("something.example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            libs.achievementsChecker("bed-free@tutanota.de")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            libs.achievementsChecker("something@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            libs.achievementsChecker("email@Google.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            libs.achievementsChecker(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("libs.encode", () => {
    test("0", () => {
        let callFunction = () => {
            libs.encode({ length: 0 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            libs.encode({ length: 1 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            libs.encode({ length: 3 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            libs.encode({ length: 5 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            libs.encode({ length: 10 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            libs.encode({ length: NaN })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("libs.decode", () => {
    test("0", () => {
        let callFunction = () => {
            libs.decode("foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            libs.decode(123456789)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            libs.decode("\"#'{7855663]}ééàà")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            libs.decode("p")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            libs.decode("This is a String1")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            libs.decode(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
