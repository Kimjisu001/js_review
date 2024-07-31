function Button({ onclick, children }) {
  return <button onClick={onClick}>{children}</button>;
}
function PlayButton({ children }) {
  return (
    <Button
      onclick={() => {
        alert("play");
      }}
    >
      {children}
    </Button>
  );
}
function UploadButton({ children }) {
  return (
    <Button
      onclick={() => {
        alert("upload");
      }}
    >
      {children}
    </Button>
  );
}
export default function Toolbar() {
  return (
    <>
      <PlayButton>play</PlayButton>
      <UploadButton>upload</UploadButton>
    </>
  );
}
