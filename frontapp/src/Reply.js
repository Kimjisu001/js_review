function Reply(props) {
  return (
    <>
      <spen>{props.id}</spen>
      <span>{props.title}</span>
      <spen>{props.writer}</spen>
    </>
  );
}

export default function Replys({ datas }) {
  const reply = datas.map((ele) => (
    <div key={ele.id}>
      <Reply id={ele.id} title={ele.title} writer={ele.writer} />
    </div>
  ));
  return <>{reply}</>;
}
