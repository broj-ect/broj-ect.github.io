import React, { useState, useEffect } from "react";


export function App() {
  setInterval(updatetime, 5000);
  const now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);

  function updatetime() {
    const newtime = new Date().toLocaleTimeString();
    setTime(newtime);
  }

  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch("https://api.broject.cc/v1/locker", {})
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPhotos(data.Result.Data);
        //console.log(data.Result.Data);
      });
  }, [time]);

  const [screen, setScreen] = useState(0);
  if(photos != null )
    return (
      <>
        <div
          style={{ padding: 15, fontSize: 120, color: "white" }}
          className="empty"
        >
          Front
        </div>
        <div className="wrapper" style={{ marginTop: 0 }}>
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
                  <p>
                    {photo.Char} {photo.Locker.Num}
                  </p>
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
                  background: "white",
                  border: "solid",
                }}
              >
                <p>
                  {photo.Char} {photo.Locker.Num}
                </p>
              </div>
            );
          })}
        </div>
        <div style={{ padding: 75 }} className="empty"></div>
        <div
          style={{ padding: 15, fontSize: 120, color: "white" }}
          className="empty"
        >
          Back
        </div>
        <div className="wrapper flipped" style={{ marginTop: 0 }}>
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
                  }}
                  style={{
                    border: "solid black",
                    fontWeight: "bold",
                    background: "red",
                    color: "white",
                  }}
                >
                  <p>
                    {photo.Char} {photo.Locker.Num}
                  </p>
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
                }}
                style={{
                  fontWeight: "bold",
                  background: "white",
                  border: "solid",
                }}
              >
                <p>
                  {photo.Char} {photo.Locker.Num}
                </p>
              </div>
            );
          })}
        </div>
        <div style={{ padding: 75 }} className="empty"></div>
        <form onSubmit={()=>{
        fetch("https://api.broject.cc/v1/locker/"+screen, {
              method: "POST",
            });
        }} >
          <label style={{ color: "white" }}>
            Screen start position: 0-7 / 17-23 :
            <input
              type="number"
              style={{ width: 50 }}
              min="0"
              max="23"
              value={screen}
              onChange={(e) => setScreen(e.target.value)}
            />
            <input type="submit" value="Add module" />
          </label>
        </form>
        <div style={{ padding: 5 }} className="empty"></div>
        <button
          onClick={() => {
            fetch("https://api.broject.cc/v1/locker", {
              method: "DELETE",
            });
          }}
        >
          Remove last module
        </button>
      </>
    );
  else
    return (
      <>
        <div style={{ padding: 75 }} className="empty"></div>
        <form onSubmit={()=>{
        fetch("https://api.broject.cc/v1/locker/"+screen, {
              method: "POST",
            });
        }} >
          <label style={{ color: "white" }}>
            Screen start position: 0-7 / 17-23 :
            <input
              type="number"
              style={{ width: 50 }}
              min="0"
              max="23"
              value={screen}
              onChange={(e) => setScreen(e.target.value)}
            />
            <input type="submit" value="Add module" />
          </label>
        </form>
        <div style={{ padding: 5 }} className="empty"></div>
        <button
          onClick={() => {
            fetch("https://api.broject.cc/v1/locker", {
              method: "DELETE",
            });
          }}
        >
          Remove last module
        </button>
      </>
    );
}
export default App;
