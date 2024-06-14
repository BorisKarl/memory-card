export default function Hello() {
  const handleGreeting = (e) => {
    e.target.style.display = "none";
  };

  return (
    <>
      <div className="greeting_wrapper" onClick={handleGreeting}>
        <h1 className="greeting">
          Hallo!
          <br /> Klicke jeden Planeten nur ein Mal!
        </h1>
      </div>
    </>
  );
}
