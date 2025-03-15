import { useState } from "react";

export default function App() {
  const [rateButton, setRateButton] = useState(false);
  const [response, setResponse] = useState(false);

  function handleSubmit() {
    if (!rateButton) {
      return alert("Please select a rating 😀");
    }
    setResponse(!response);
  }

  return (
    <div className="container-big">
      {response || (
        <Rate
          rateButton={rateButton}
          setRateButton={setRateButton}
          onSubmit={handleSubmit}
        />
      )}
      {response ? <Thankyou rate={rateButton} /> : ""}
    </div>
  );
}

function Thankyou({ rate }) {
  return (
    <>
      <img
        className="imgCenter"
        src="./illustration-thank-you.svg"
        alt="thankyou"
      />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p className="center orange you-selected">
          You selected {rate} out of 5
        </p>
      </div>
      <h1 className="white center font-b">Thank you!</h1>
      <p style={{ marginTop: "1rem" }} className="light-grey center font-r">
        We appreciate you taking the time to give a rating. If you ever need
        more support don't hesisate to get in Touch
      </p>
    </>
  );
}

function Rate({ rateButton, setRateButton, onSubmit }) {
  return (
    <>
      <img src="./icon-star.svg" alt="star" className="icon" />
      <h1 className="white font-b">How did we do?</h1>
      <p className="light-grey font-r">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="rating-container">
        {[1, 2, 3, 4, 5].map((val) => (
          <Button
            key={val}
            value={val}
            isActive={rateButton === val}
            onClick={() => setRateButton(val)}
          >
            {val}
          </Button>
        ))}
      </div>
      <button className="submit font-b" onClick={onSubmit}>
        Submit
      </button>
    </>
  );
}

function Button({ children, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`light-grey icon font-b ${isActive ? "active" : ""}`}
    >
      {children}
    </button>
  );
}
