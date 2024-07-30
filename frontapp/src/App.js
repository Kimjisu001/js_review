import "./App.css";
import Toolbar from "./Event";
//===============================================================
//배운것: props, 컴포넌트(사용자정의태그)
//참고자료
//https://ko.react.dev/learn/passing-props-to-a-component props
//===============================================================

//컴포넌트
function Header(props) {
  const clickHandler = (event) => {
    event.preventDefault();
    alert("클릭됨");
    props.onChangeMode();
  };
  return (
    <header>
      <h2 style={{ color: props.color }}>
        <a href="/" onClick={clickHandler}>
          {props.title}
        </a>
      </h2>
    </header>
  );
} //Header end

function Nav({ topics }) {
  const lis = topics.map((topic) => <li>{topic.title}</li>);
  //const lis = [];
  //for (let i = 0; i < topic.length; i++) lis.push(<li>{topic[i].title}</li>);
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}

function Article(props) {
  const lis = props.fruits.map((ele) => <li>{ele}</li>);
  return (
    <article>
      <h2>
        {props.content.title}
        {props.content.body}
        {props.content.name}
      </h2>
      <ul>{lis}</ul>
      Hello, WEB
    </article>
  );
}

// function Article({ content }) {
//   return (
//     <article>
//       <h2>
//         {content.title}
//         {content.body}
//         {content.name}
//       </h2>
//       Hello, WEB
//     </article>
//   );
// }

const topic = [
  { id: 1, title: "html", body: "html is..." },
  { id: 2, title: "css", body: "css is..." },
  { id: 3, title: "javascript", body: "javascript is..." },
];

function Profile(props) {
  return <Avatar {...props} />;
}

function Avatar({ name, width, height, src }) {
  return (
    <img
      className="avatar"
      src={src}
      alt={name}
      width={width}
      height={height}
    />
  );
}
//=================================================================
//                          출력
//=================================================================
function App() {
  return (
    <div className="App">
      <Profile name="톰" width="100" height="100" src="logo512.png" />
      <Header
        title="Web"
        onChangeMode={() => {
          console.log("change");
        }}
      />
      <Nav topics={topic} />
      <Article
        content={{ title: "Hello", body: "Welcome", name: "Tom" }}
        fruits={["바나나", "사과", "포도"]}
      />
    </div>
  );
}

export default App;
