export default function Login({ setUser }) {



 const handleSubmit = (event) => {
    event.preventDefault()
    const fields = Object.fromEntries(new FormData(event.target))
    setUser(fields.user) 
    
  }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="user" type="text" placeholder="Usuario" />
                <input name="password" type="password" placeholder="Contraseña" />
                <button type="submit">Entrar</button>
            </form>
        </div>
    )
}