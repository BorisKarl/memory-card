import { useState } from "react";

export default function Cards() {
  const [count, setCount] = useState(0);
  const [clickedImages, setClickedImages] = useState([]);
  // const [test, setTest] = useState([]);

  const initialValue = [
    { src: "/img_1.JPG", id: 1 },
    { src: "/img_2.JPG", id: 2 },
    { src: "/img_3.JPG", id: 3 },
    { src: "/img_4.JPG", id: 4 },
    { src: "/img_5.JPG", id: 5 },
    { src: "/img_6.JPG", id: 6 },
    { src: "/img_7.JPG", id: 7 },
    { src: "/img_8.JPG", id: 8 },
  ];

  const newRandomArray = (object) => {
    let keys = Object.keys(object);
    let lenght = keys.length;
    for (let i = lenght - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [keys[i], keys[j]] = [keys[j], keys[i]];
    }
    return keys;
  };

  const newValueOrder = (oldOrder, newOrder) => {
    let newArray = [];
    for (let i = 0; i < newOrder.length; i++) {
      newArray[i] = oldOrder[newOrder[i]];
    }
    return newArray;
  };
  const newOrderArray = newRandomArray(initialValue);
  const values = Object.values(initialValue);
  const newObject = newValueOrder(values, newOrderArray);

  const handleInput = (e) => { 
      setClickedImages((prev) => [
        ...prev,
        { clickedImage: e.target.src, id: e.target.id },
      ]);
      setCount(count + 1);
      console.log("handleInput: ");
      console.log(clickedImages);
  };

  const checkForDouble = (e) => {
    // if (clickedImages.length === 0) return;
      if (clickedImages.some((image) => image.id === e.target.id)) {
        console.log("Doppelt");
        setCount(0);
        setClickedImages([]);
      } 
    };

  return (
    <>
      <div className="flexCDontainer">
        <div className="counter">
          <h1>Count = {count}</h1>
        </div>
        <div className="card_grid">
          {newObject.map(function (el) {
            return (
              <div key={el.id} className="card">
                <img
                  src={el.src}
                  id={el.id}
                  alt="img"
                  onClick={(e) => {
                    handleInput(e);
                    checkForDouble(e);
                    
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

/*

checkForDouble Function ...
 setTest([
      ...test,
      {
        doubleTest: e.target.id,
      },
    ]);
    console.log(test);
    if (test.length > 1) {
      for (let i = 0; i < test.length; i++) {
        if (test[i].doubleTest === e.target.id) {
          console.log("Doppelt");
          console.log(test.doubleTest);
          setClickedImages([]);
          setTest([]);
          setCount(0);
        }
  const initialImage = [
    {
      image1: "",
      image2: "",
      image3: "",
      image4: "",
      image5: "",
      image6: "",
      image7: "",
      image8: "",
    }
  ]
*/

// const [clickedImages, setClickedImages] = useState([]);
/*
  const initialImages = [
   [ {
      image: "",
      id: 0
    }]
  ]

import { useState, useEffect } from "react";

export default function Cards() {
  const [count, setCount] = useState(0);
  const [clickedImages, setClickedImages] = useState([]);
  const [test, setTest] = useState([]);

  const initialValue = [
    { src: "/img_1.JPG", id: 1 },
    { src: "/img_2.JPG", id: 2 },
    { src: "/img_3.JPG", id: 3 },
    { src: "/img_4.JPG", id: 4 },
    { src: "/img_5.JPG", id: 5 },
    { src: "/img_6.JPG", id: 6 },
    { src: "/img_7.JPG", id: 7 },
    { src: "/img_8.JPG", id: 8 },
  ];

  const newRandomArray = (object) => {
    let keys = Object.keys(object);
    let length = keys.length;
    for (let i = length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [keys[i], keys[j]] = [keys[j], keys[i]];
    }
    return keys;
  };

  const newValueOrder = (oldOrder, newOrder) => {
    let newArray = [];
    for (let i = 0; i < newOrder.length; i++) {
      newArray[i] = oldOrder[newOrder[i]];
    }
    return newArray;
  };

  const newOrderArray = newRandomArray(initialValue);
  const values = Object.values(initialValue);
  const newObject = newValueOrder(values, newOrderArray);

  const handleInput = (e) => {
    const src = e.target.src;
    setClickedImages([...clickedImages, { clickedImage: src, id: e.target.id }]);
    setCount(count + 1);
  };

  const checkForDouble = (e) => {
    setTest((prevTest) => {
      if (prevTest.some((item) => item.doubleTest === e.target.id)) {
        console.log("Doppelt");
        setCount(0);
        setClickedImages([]);
      }
      return [...prevTest, { doubleTest: e.target.id }];
    });
  };

  return (
    <>
      <div className="flexContainer">
        <div className="counter">
          <h1>Count = {count}</h1>
        </div>
        <div className="card_grid">
          {newObject.map((el) => (
            <div key={el.id} className="card">
              <img
                src={el.src}
                id={el.id}
                alt="img"
                onClick={(e) => {
                  checkForDouble(e);
                  handleInput(e);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}




*/

// if (double) alert("GAME OVER MAN!!!");
// console.log("hello wrold!");
// console.log(test);
