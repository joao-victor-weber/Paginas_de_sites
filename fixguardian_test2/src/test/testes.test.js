const soma = require('./soma')
//comando que tras as funções a serem testadas
const { vaNome, vaEmail, vaIdade } = require('./valida');
describe("Validando soma", () => {
    test('soma 2+3 deve ser 5', () => {
        expect(soma(2, 3)).toBe(5);
    });
    test('soma negativos', () => {
        expect(soma(-1, -6)).toBe(-7);
    });
    test('soma numero e letra', () => {
        expect(soma("a", 1)).toBe("a1");
    });
});
//Conjunto de testes validando a função vaNome que é o campo onde o usuario colocarão o nome
describe("Validando Nome", () => {
//teste validando a entrada de dados certa
    test("Nome Valido", () => {
//essa linha ta mandando para a função vaNome os dados 'Francio Carlos Almeida da Silva' e espera que a função retorne 'true' que significa que a função aprovol os dados
        expect(vaNome("Francio Carlos Almeida da Silva")).toBe(true);
    });
//teste validando a entrada de dados em branco
    test("Nome em Branco", () => {
//essa linha ta mandando para a função vaNome os dados '' e espera que a função retorne 'false' que significa que a função deu erro nos dados porque eles estão vazios
        expect(vaNome("")).toBe(false);
    });
//teste para nome curto
    test("Nome curto", () => {
//essa linha ta mandando para a função vaNome os dados 'Jo' e espera que a função retorne 'false' que significa que a função deu erro nos dados porque eles são muito curtos
        expect(vaNome("Jo")).toBe(false);
    });
//teste para dados de formato errado
    test("Não é Nome", () => {
//essa linha ta mandando para a função vaNome os dados '12345' e espera que a função retorne 'false' que significa que a função deu erro nos dados porque a fonção vio que o formato dos dados estava errada
        expect(vaNome(12345)).toBe(false);
    });
});
//Conjunto de testes validando a função vaEmail que é o campo onde o usuario colocarão o Gmail
describe("Validando Email", () => {
//essa linha ta mandando para a função vaEmail os dados 'jotaro@gmail.com' e espera que a função retorne 'true' o que significa que os dados que entraram eram esperados pela função
    test("Email Valido", () => {
        expect(vaEmail("jotaro@gmail.com")).toBe(true);
    });
//essa linha ta mandando para a função vaEmail os dados '' e espera que a função retorne 'false' o que significa que os dados que entraram não eram esperados pela função/eram dados incoretos e dariam erro no sistema
    test("Email em Branco", () => {
        expect(vaEmail("")).toBe(false);
    });
//essa linha ta mandando para a função vaEmail os dados 'dayamo@gmail' e espera que a função retorne 'false' o que significa que os dados que entraram não eram esperados pela função/eram dados incoretos e dariam erro no sistema
    test("Email sem o '.com'", () => {
        expect(vaEmail("dayamo@gmail")).toBe(false);
    });
//essa linha ta mandando para a função vaEmail os dados 'jozefe@@gmail.com' e espera que a função retorne 'false' o que significa que os dados que entraram não eram esperados pela função/eram dados incoretos e dariam erro no sistema
    test("Email Com duplo @@", () => {
        expect(vaEmail("jozefe@@gmail.com")).toBe(false);
    });
//essa linha ta mandando para a função vaEmail os dados 'gmail.com' e espera que a função retorne 'false' o que significa que os dados que entraram não eram esperados pela função/eram dados incoretos e dariam erro no sistema
    test("Email só Email", () => {
        expect(vaEmail("gmail.com")).toBe(false);
    });
});
//Conjunto de testes validando a função vaIdade que é o campo onde o usuario colocarão a idade
describe("Validadendo Idade", () => {
//essa linha ta mandando para a função vaIdade os dados '20' e espera que a função retorne 'true' o que significa que os dados que entraram eram esperados pela função/eram dados corretos
    test("Idade Valido", () => {
        expect(vaIdade(20)).toBe(true);
    });
//essa linha ta mandando para a função vaIdade os dados '' e espera que a função retorne 'false' o que significa que os dados que entraram não eram esperados pela função/eram dados incoretos e dariam erro no sistema
    test("Idade em Branco", () => {
        expect(vaIdade()).toBe(false);
    });
//essa linha ta mandando para a função vaIdade os dados '8' e espera que a função retorne 'false' o que significa que os dados que entraram não eram esperados pela função/eram dados incoretos e dariam erro no sistema
    test("Muito Jovem", () => {
        expect(vaIdade(8)).toBe(false);
    });
//essa linha ta mandando para a função vaIdade os dados '159' e espera que a função retorne 'false' o que significa que os dados que entraram não eram esperados pela função/eram dados incoretos e dariam erro no sistema
    test("Esta vivo?", () => {
        expect(vaIdade(159)).toBe(false);
    });
//essa linha ta mandando para a função vaIdade os dados 'Vinte e quatro' e espera que a função retorne 'false' o que significa que os dados que entraram não eram esperados pela função/eram dados incoretos e dariam erro no sistema
    test("Idade não é?", () => {
        expect(vaIdade("Vinte e quatro")).toBe(false);
    });
});