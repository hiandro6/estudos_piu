import { useState } from "react";

export default function Login() {
    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");

    // função chamada quando o formulário for enviado
    const handleSubmit = (event) => {
        event.preventDefault(); // evita que a página recarregue
        console.log("Login:", login);
        console.log("Senha:", senha);
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <h2>Tela de Login</h2>
                <input
                    type="text"
                    placeholder="Digite seu login"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Digite sua senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
}
