import {Math} from './Math'
describe('Testing Math library', ()=>{
    it('should sum two numbers correctly', ()=>{
        const response = Math.sum(5,10)
        expect(response).toBe(15)
    })

    it('should subtract two numbers correctly', ()=>{
        const response = Math.sub(10,5)
    expect(response).toBe(5)
    })

    it('should divide two numbers correctly', ()=>{
        const response = Math.div(50, 10)
    expect(response).toBe(5)

    const response2 = Math.div(3,0)
    expect(response2).toBe(false)
    })

    it('should multiply two numbers correctly', ()=>{
        const response = Math.multi(5,10)
    expect(response).toBe(50)
    })

    // TIPOS DE MATCHES
    it('contar quantos caracteres tem na string', ()=>{
        const response = 'DENIED'
        expect(response).toHaveLength(6)
    })

    it.only('verifica se tem a propriedade idade', ()=>{
        const response = {
            name: 'Henrique',
            email: 'henrique@teste.com'
        }
        expect(response).toHaveProperty('idade')
    })

})
