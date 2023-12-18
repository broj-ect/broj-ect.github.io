import React, { useState, useEffect } from "react";

export function App() {
  setInterval(updatetime, 10000);
  const now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);

  function updatetime() {
    const newtime = new Date().toLocaleTimeString();
    setTime(newtime);
  }

  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch("https://api.broject.cc/v1/locker",{})
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPhotos(data.Result.Data);
        //console.log(data.Result.Data);
      });
  }, [time]);

  return (
    <> <div className="wrapper" style={{ marginTop: 150 }}>
        {photos.map((photo, index) => {
          if (photo.Locker.Size === "screen")
            return (
              <div
                key={photo.Locker.Num}
                className={photo.Locker.Size}
                style={{
                  border: "solid black",
                  fontWeight: "bold",
                }}
              ></div>
            );
          if (photo.Locker.State) {
            return (
              <div
                key={photo.Locker.Num}
                className={photo.Locker.Size}
                onClick={() => {
                  fetch(
                    "https://api.broject.cc/v1/locker/" + photo.Locker.Num,
                    {
                      method: "PATCH",
                    },
                  );
                  /*setTimeout(() => {
                    window.location.reload(false);
                  }, 100);*/
                }}
                style={{
                  border: "solid black",
                  fontWeight: "bold",
                  background: "red",
                  color: "white",
                }}
              >
                <p>{photo.Char} {photo.Locker.Num}</p>
              </div>
            );
          }
          return (
            <div
              key={photo.Locker.Num}
              className={photo.Locker.Size}
              onClick={() => {
                fetch("https://api.broject.cc/v1/locker/" + photo.Locker.Num, {
                  method: "PATCH",
                });
                /*setTimeout(() => {
                  window.location.reload(false);
                }, 100);*/
              }}
              style={{
                fontWeight: "bold",
                border: "solid",
              }}
            >
              <p>{photo.Char} {photo.Locker.Num}</p>
            </div>
          );
        })}
      </div>
      <div style={{padding:150}}></div>
      <div className="wrapper flipped" style={{ marginTop: 150 }}>
        {photos.map((photo, index) => {
          if (photo.Locker.Size === "screen")
            return (
              <div
                key={photo.Locker.Num}
                className={photo.Locker.Size}
                style={{
                  border: "solid black",
                  fontWeight: "bold",
                }}
              ></div>
            );
          if (photo.Locker.State) {
            return (
              <div
                key={photo.Locker.Num}
                className={photo.Locker.Size}
                onClick={() => {
                  fetch(
                    "https://api.broject.cc/v1/locker/" + photo.Locker.Num,
                    {
                      method: "PATCH",
                    },
                  );
                  /*setTimeout(() => {
                    window.location.reload(false);
                  }, 100);*/
                }}
                style={{
                  border: "solid black",
                  fontWeight: "bold",
                  background: "red",
                  color: "white",
                }}
              >
                <p>{photo.Char} {photo.Locker.Num}</p>
              </div>
            );
          }
          return (
            <div
              key={photo.Locker.Num}
              className={photo.Locker.Size}
              onClick={() => {
                fetch("https://api.broject.cc/v1/locker/" + photo.Locker.Num, {
                  method: "PATCH",
                });
                /*setTimeout(() => {
                  window.location.reload(false);
                }, 100);*/
              }}
              style={{
                fontWeight: "bold",
                border: "solid",
              }}
            >
              <p>{photo.Char} {photo.Locker.Num}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default App;
