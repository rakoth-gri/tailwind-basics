function App() {
  return (
    <>
      <h1 className="text-slate-500 bg-teal p-3gri md:text-yellow-500">
        Hello world!
      </h1>
      <form className="form">
        <p>
          <input type="text" placeholder="Имя:" className={"input"} />
        </p>
        <p>
          <input type="text" placeholder="Фамилия:" className={"input"} />
        </p>
        <p>
          <input type="submit" />
        </p>
      </form>
      <div>
        <button className="gri-btn"> HELLO FROM GRI </button>
      </div>
    </>
  );
}

export default App;
