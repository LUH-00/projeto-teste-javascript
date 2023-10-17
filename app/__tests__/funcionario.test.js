const funcionario = require("../funcionario")

test("Salario será verdadeiro ao ser igual a um falor passado", ()=>{
    expect(funcionario.getSalario()).toBe(1300)
})