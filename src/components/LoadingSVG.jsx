export default function Loader() {
    const displayLoadingSVG = () => {
        return (
          <>
            <div className="svg_loading_wrapper">
              <svg
                version="1.1"
                id="L3"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 100 100"
                enableBackground="new 0 0 0 0"
                xmlSpace="preserve"
              >
                <circle
                  fill="none"
                  stroke="#fff"
                  strokeWidth="4"
                  cx="50"
                  cy="50"
                  r="44"
                  style={{ opacity: "0.5" }}
                />
                <circle
                  fill="#fff"
                  stroke="#e74c3c"
                  strokeWidth="3"
                  cx="8"
                  cy="54"
                  r="6"
                >
                  <animateTransform
                    attributeName="transform"
                    dur="2s"
                    type="rotate"
                    from="0 50 48"
                    to="360 50 52"
                    repeatCount="indefinite"
                  />
                </circle>
              </svg>
              <h1>Planeten werden über NASA Api geladen...</h1>
            </div>
          </>
        );
    }
    return displayLoadingSVG();
}
