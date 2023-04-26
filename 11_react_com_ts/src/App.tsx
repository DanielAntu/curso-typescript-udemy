// 4 - importação do componente
import { createContext } from "react";
import Destructuring, { Category } from "./components/Destructuring";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import State from "./components/State";
import Context from "./components/Context";

// 8 - type
type textOrNull = string | null;

// 9 - context
interface IAppContext {
    language: string;
    framework: string;
    projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
    // 1 - variavel
    const name: string = "Daniel";
    const age: number = 30;
    const isWorking: boolean = true;

    // 2 - funções
    const userGreeting = (name: string): string => {
        return `Olá, ${name}`;
    };

    // 8 - type
    const myText: textOrNull = "tem algum texto aqui";
    let mysecondText: textOrNull = null;

    // 9 - context
    const contextValue: IAppContext = {
        language: "JavaScript",
        framework: "Express",
        projects: 5,
    };

    return (
        <AppContext.Provider value={contextValue}>
            <div className="App">
                <h1>TypeScript com react</h1>
                <h2>Nome: {name}</h2>
                <p>Idade: {age}</p>
                {isWorking && <p>Está trabalhando!</p>}
                <h3>{userGreeting(name)}</h3>
                <FirstComponent />
                <SecondComponent name="Segundo" />
                <Destructuring
                    title="Primeiro Post"
                    content="Algum conteúdo"
                    commentQty={10}
                    tags={["ts", "js"]}
                    category={Category.TS}
                />
                <Destructuring
                    title="Segundo Post"
                    content="Mais outro conteudo"
                    commentQty={5}
                    tags={["python"]}
                    category={Category.P}
                />
                <State />
                {myText && <p>Tem texto na variavel</p>}
                {mysecondText && <p>Tem texto na variavel</p>}
                <Context />
            </div>
        </AppContext.Provider>
    );
}

export default App;
