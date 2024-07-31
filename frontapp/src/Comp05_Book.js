import { useState } from "react";

function Header(props) {
  console.log(props);
  const handlerClick = (event) => {
    event.preventDefault();
    props.onChangeMode();
  };
  return (
    <>
      <header>
        <h1>
          <a href="/" onClick={handlerClick}>
            {props.title}
          </a>
        </h1>
      </header>
    </>
  );
}

function Nav(props) {
  const handlerClick = (event) => {
    event.preventDefault();
    props.onChangeMode(event.target.id);
  };
  const lis = props.topic.map((t) => (
    <li key={t.id}>
      <a href={"/read/" + t.id} onClick={handlerClick} id={t.id}>
        {t.title}
      </a>
    </li>
  ));
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}

function Article({ title, body }) {
  return (
    <article>
      <h2>{title}</h2>
      {body}
    </article>
  );
}

function Create({ onCreate }) {
  return (
    <article>
      <h2>Create</h2>
      {/* form onSubmit={(event)=>{
          event.preventDefault}} */}
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const title = event.target.title.value;
          const body = event.target.body.value;
          onCreate(title, body);
        }}
      >
        <p>
          <input type="text" name="title" placeholder="title" />
        </p>
        <p>
          <textarea name="body" placeholder="body" />
        </p>
        <p>
          <input type="submit" value="Create" />
        </p>
      </form>
    </article>
  );
}

function Update(props) {
  return (
    <article>
      <h2>Update</h2>
      <form>
        <p>
          <input
            type="text"
            name="title"
            placeholder="title"
            value={props.title}
          />
        </p>
        <p>
          <textarea name="body" placeholder="body" value={props.title} />
        </p>
        <p>
          <input type="submit" value="Create" />
        </p>
      </form>
    </article>
  );
}
//====================================
export default function Book(props) {
  let [topic, setTopic] = useState([
    { id: 1, title: "html", body: "html is..." },
    { id: 2, title: "css", body: "css is..." },
    { id: 3, title: "javascript", body: "javascript is..." },
  ]);
  let [lastId, setLastId] = useState(4);
  let [mode, setMode] = useState("WELCOME");
  let [id, setID] = useState(2);
  let content;
  if (mode === "CREATE") {
    content = (
      <Create
        onCreate={(title, body) => {
          setTopic([...topic, { lastId, title, body }]);
          setLastId(lastId + 1);
        }}
      />
    );
  } else if (mode === "UPDATE") {
    content = <Update title="test" body="test is ..." />;
  } else if (mode === "WELCOME") {
    content = (
      <>
        <Article title="Welcome" body="Hello,WEB" />
        <button
          onClick={() => {
            setMode("CREATE");
            setLastId(lastId + 1);
          }}
        >
          create
        </button>
      </>
    );
  } else if (mode === "READ") {
    let temp = topic.find((ele) => id === ele.id);
    content = (
      <>
        <Article title={temp.title} body={temp.body} />
        <button
          onClick={() => {
            setMode("UPDATE");
          }}
        >
          update
        </button>
      </>
    );
  }

  return (
    <>
      <Header
        title="WEB"
        onChangeMode={() => {
          setMode("WELCOME");
        }}
      />
      <Nav
        topic={topic}
        onChangeMode={(id) => {
          setMode("READ");
          setID("_id");
        }}
      />
      {content}
    </>
  );
}
