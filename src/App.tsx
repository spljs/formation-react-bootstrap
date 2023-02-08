function App() {

    fetch('http://localhost:3000/posts').then(r => r.json()).then(console.log)

    return (
        <div className="App">
            <h1>My app</h1>
        </div>
    )
}

export default App
