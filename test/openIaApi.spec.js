import { componentePeticion } from "../src/lib/Peticiones.js";

const OpenIAResponse = jest.fn();

// hacer implementación falsa de fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: OpenIAResponse,
  })
);

describe("Endpoint de openIA", () => {
  it("La API es llamada con los datos adecuados", () => {
    OpenIAResponse.mockResolvedValueOnce({ choices: [{ message: "foo" }] });
    localStorage.setItem("ApyKey", "123456")
    const messages = [{ role: "user", content: "foo" }];
    const personajePiloto = {name:"Ayrton"}
    // const inputUsuario = "Hola, quien eres?"
    componentePeticion (personajePiloto, messages);

    expect(global.fetch).toBeCalledWith(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer 123456`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages :[
            {
              role: "system",
              content: `Finge que eres ${personajePiloto.name}, contesta como si fueras ${personajePiloto.name}`,
            },
            {
              role: "user",
              content: messages,
            },
          ],
          
        }),
      }
    );
  });

  it("El edpoint responde de manera correcta", () => {
    const response = {
      choices: [
        {
          message: {
            role: "assistant",
            content: "¡Hola!",
          },
        },
      ],
    };

    OpenIAResponse.mockResolvedValueOnce(response);

    return componentePeticion("12345", [{ role: "user", content: "foo" }]).then(
      (resolved) => {
        console.info("PARSE", resolved)
        expect(resolved).toBe(response);
      
      }
    );
  });
});
