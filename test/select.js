var test = require("tape")
var h = require("hyperscript")

var FormData = require("../index")

test("FormData works with <select> elements", function (assert) {
    var elements = {
        foo: h("select", [
            h("option", { value: "one" })
            , h("option", { value: "two", selected: true })
            , h("option", { value: "three" })
        ])
    }

    var data = FormData(elements)

    assert.deepEqual(data, {
        foo: "two"
    })

    assert.end()
})

test("FormData works when <select> element has a value", function(assert) {
    var elements = {
        foo: h("select", {
            value: "one"
        }, [
            h("option", { value: "two" })
        ])
    }

    var data = FormData(elements)

    assert.deepEqual(data, {
        foo: "one"
    })

    assert.end()
})
