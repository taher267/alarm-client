import { useState, useEffect } from "react";
import { useAlert } from "react-alert";
import DateTime from "react-datetime-picker";

import moment from "moment";
import axios from "axios";
import { useAuth } from "../context/AuthProvider";
import MainLayout from "./../Layouts/MainLayout";
import { useNavigate } from "react-router-dom";
const options = {
  minDate: new Date(Date.now()),
  format: "y-MM-dd h:mm:ss a",
};

// console.log(new Date().getMinutes() + 10);

export function Alerm() {
  const navigate = useNavigate();
  const { currentUser, fireLoading } = useAuth();
  const alert = useAlert();
  const [schedules, setSchedules] = useState([]);
  const [message, setMessage] = useState("");
  const [datetime, setDataTime] = useState(
    new Date(moment().add(20, "seconds")._d)
  );
  const fetchSchedules = () => {
    axios
      .get(`http://localhost:1001/my-schedule/${currentUser.email}`)
      .then(({ data }) => {
        setSchedules(data);
      })
      .catch((e) => {
        console.log(e);
        alert.error(e.message);
      });
  };
  const submitHander = (e) => {
    e.preventDefault();

    if (checkDateTime()) {
      axios
        .post(`http://localhost:1001/add-schedule`, {
          datetime,
          message: message || "Alarm ",
          email: currentUser.email,
          name: currentUser.displayName,
        })
        .then(({ data }) => {
          alert.success(
            `Alhamdu lillah, Schedule has been added, successfully`
          );
          fetchSchedules();
        })
        .catch((e) => {
          console.error(e);
        });
    }
  };
  const checkDateTime = () => {
    if (!datetime) {
      alert.error(`Time Should be provide`);
      return false;
    }
    const add20 = moment(datetime);
    if (15000 > add20.diff(moment())) {
      alert.error(
        `Time Should be ${moment().add(20, "seconds").format("h:mm:ss")}`
      );
      return false;
    }
    return true;
  };

  if (schedules && schedules.length) {
    schedules.forEach((item) => {
      if (moment(item.datetime).diff(moment()) > 0) {
        setTimeout(() => {
          alert.success(
            `${item.message} Time is ${moment(item.datetime).format("h:mm:ss")}`
          );
        }, moment(item.datetime).diff(moment()));
      }
    });
  }
  useEffect(() => {
    if (fireLoading === false && !currentUser?.email) {
      navigate("/login");
    }
  }, []);
  useEffect(() => {
    if (currentUser?.email) {
      fetchSchedules();
    }
  }, [currentUser]);

  if (fireLoading) return "Check Authentication!";
  if (!fireLoading && !currentUser?.email)
    return "Should be logged in to access this resouce!";
  return (
    <MainLayout title="Schedule">
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                style={{
                  display: "grid",
                  gap: "10px",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                }}
              >
                <div>Avatar</div>

                <div>
                  {currentUser?.photoURL && (
                    <img
                      src={currentUser?.photoURL}
                      alt={currentUser?.displayName}
                    />
                  )}
                </div>
                <div>Name: </div>
                <div>{currentUser?.displayName} </div>
                <div>Email: </div>
                <div>{currentUser?.email} </div>

                {/* <div>
                <div>Email: </div>
                <div>{currentUser?.email} </div>
              </div> */}
              </div>
            </div>

            <div className="col-lg-6">
              {currentUser?.email && (
                <form
                  onSubmit={submitHander}
                  style={{
                    display: "grid",
                    width: "30vw",
                    // margin: "auto",
                    gap: "1rem",
                  }}
                >
                  <h3>Alerm</h3>
                  <DateTime
                    onChange={setDataTime}
                    {...options}
                    value={datetime}
                  />
                  <textarea
                    type="text"
                    placeholder="Write a message"
                    name="message"
                    onChange={({ target: { value } }) => {
                      setMessage(value);
                    }}
                  />
                  <button type="submit">Submit</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
