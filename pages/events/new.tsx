import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import styles from "../../styles/Events.module.scss";
import Button from "../../components/IndigoButton";
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

interface location {
  name: String;
  amount: Number;
  no_tickets: Number;
  color: Object;
}

interface event {
  name: String;
  date: DatePicker;
  location: String;
}

export default function EventNew() {
  const [startDate, setStartDate] = useState(new Date());
  const [locations, setLocations] = useState<location[]>();
  const [currentLocation, setCurrentLocation] = useState<location>();
  const [currentEvent, setCurrentEvent] = useState<event>();

  const colors = [
    "#264653",
    "#2a9d8f",
    "#e9c46a",
    "#f4a261",
    "#e76f51",
    "#cdb4db",
    "#ffc8dd",
    "#ffafcc",
    "#bde0fe",
    "#a2d2ff",
    "#e07a5f",
    "#3d405b",
    "#81b29a",
    "#f2cc8f",
    "#003049",
    "#d62828",
    "#f77f00",
    "#fcbf49",
    "#390099",
    "#ff5400",
    "#ffbd00",
    "#3a86ff",
    "#a0c4ff",
  ];

  const invertHex = function (hex: String) {
    hex = hex.substring(1);
    return (Number(`0x1${hex}`) ^ 0xffffff)
      .toString(16)
      .substr(1)
      .toUpperCase();
  };

  const addLocation = () => {
    if (
      !currentLocation?.amount ||
      !currentLocation.name ||
      !currentLocation.no_tickets
    ) {
      return false;
    }
    // currentLocation.color = colors[randomInt(0, 39)];
    const index = Math.floor(Math.random() * 23);
    currentLocation.color = {
      background:
        "radial-gradient(circle," +
        colors[index] +
        " 0%, " +
        colors[Math.floor(Math.random() * 23)] +
        " 100%)",
      color: "#" + invertHex(colors[index]),
    };
    let local_locations: location[] = locations ? locations : [];
    local_locations = [currentLocation, ...local_locations];
    setCurrentLocation({
      name: "",
      amount: 0,
      no_tickets: 0,
      color: "",
    });
    setLocations(local_locations);
  };

  const saveEvent = () => {
    console.log("Save event");
  };

  return (
    <>
      <div className="isolate bg-white">
        <Navbar />
        <main className="text-gray-900 min-h-screen mx-20 my-20 ">
          <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-4xl pt-10 pb-24 sm:pt-18 sm:pb-24">
              <div
                className={
                  styles.boxFacts + " bg-white pt-12 sm:pt-32 lg:pt-20 "
                }
              >
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  <div>
                    <div className="flex grid-cols-2 justify-around">
                      <div>
                        <h2 className="font-medium mb-4">Event details</h2>
                        <label className="block">
                          <span className="block text-sm font-medium text-slate-700">
                            Name
                          </span>
                          <input
                            value={currentEvent?.name!}
                            onChange={(event) => {
                              setCurrentEvent({
                                name: event.target.value,
                                date: currentEvent?.date,
                                location: currentEvent?.location,
                              });
                            }}
                            type="text"
                            placeholder="Awesome event"
                            className="bg-white py-1 px-1 mt-1 border-slate-500 border-solid border-2 rounded-md placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"
                          />
                        </label>
                        <label className="block mt-4">
                          <span className="block text-sm font-medium text-slate-700">
                            Date
                          </span>
                          <DatePicker
                            selected={currentEvent?.date}
                            onChange={(date) => {
                              setCurrentEvent({
                                date: date,
                                name: currentEvent?.name,
                                location: currentEvent?.location,
                              });
                            }}
                            todayButton="Today"
                            className="bg-white border-slate-500 border-solid border-2 rounded-md py-1 px-1"
                          />
                        </label>
                        <label className="block mt-4">
                          <span className="block text-sm font-medium text-slate-700">
                            Location
                          </span>
                          <input
                            value={currentEvent?.location!}
                            onChange={(event) => {
                              setCurrentEvent({
                                location: event.target.value,
                                date: currentEvent?.date,
                                name: currentEvent?.name,
                              });
                            }}
                            type="text"
                            className="bg-white py-1 px-1 mt-1 border-slate-500 border-solid border-2 rounded-md placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"
                          />
                        </label>
                      </div>
                      <div>
                        <h2 className="font-medium  mb-4">Add location</h2>
                        <label className="block">
                          <span className="block text-sm font-medium text-slate-700">
                            Name
                          </span>
                          <input
                            value={currentLocation?.name!}
                            onChange={(event) => {
                              setCurrentLocation({
                                amount: currentLocation?.amount!,
                                no_tickets: currentLocation?.no_tickets!,
                                name: event.target.value,
                                color: "",
                              });
                            }}
                            placeholder="The beach"
                            className="bg-white py-1 px-1 mt-1 border-slate-500 border-solid border-2 rounded-md placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"
                          />
                        </label>
                        <label className="block mt-4">
                          <span className="block text-sm font-medium text-slate-700">
                            Price
                          </span>
                          <input
                            value={currentLocation?.amount!}
                            onChange={(event) => {
                              setCurrentLocation({
                                amount: parseFloat(event.target.value),
                                name: currentLocation?.name!,
                                no_tickets: currentLocation?.no_tickets!,
                                color: "",
                              });
                            }}
                            type="number"
                            step="0.01"
                            min="0"
                            className="bg-white py-1 px-1 mt-1 border-slate-500 border-solid border-2 rounded-md placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"
                          />
                        </label>
                        <label className="block mt-4">
                          <span className="block text-sm font-medium text-slate-700">
                            Number of tickets
                          </span>
                          <input
                            value={currentLocation?.no_tickets!}
                            onChange={(event) => {
                              setCurrentLocation({
                                no_tickets: parseFloat(event.target.value),
                                amount: currentLocation?.amount!,
                                name: currentLocation?.name!,
                                color: "",
                              });
                            }}
                            type="number"
                            step="1"
                            min="0"
                            className="bg-white py-1 px-1 mt-1 border-slate-500 border-solid border-2 rounded-md placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"
                          />
                        </label>
                        <Button className="mt-4" onClick={addLocation}>
                          Add location
                        </Button>
                      </div>
                    </div>
                    <div>
                      {locations ? (
                        <div>
                          <br />
                          <hr />
                          <br />
                          <div className="block">
                            <p className="font-medium">Last added locations</p>
                            <ul>
                              {locations.map((location_, i) => {
                                return (
                                  <li
                                    key={i}
                                    className="border-b-2 pb-8 w-max pt-8"
                                  >
                                    <>
                                      <div>
                                        <>
                                          {location_.name} - ${location_.amount}{" "}
                                          - Tickets: {location_.no_tickets}
                                        </>
                                      </div>
                                      <p>Preview Autogenerated NFT</p>
                                      <small>
                                        You can always replace it with your own
                                        cool designs
                                      </small>
                                      <div
                                        style={location_.color}
                                        className="h-[20rem] w-[20rem] bg-red border-solid border-2 flex justify-center items-center content-center"
                                      >
                                        <div className="text-center bg-gray-500 border-solid border-2 text-white p-4 rounded-md">
                                          {currentEvent?.name} -{" "}
                                          {currentEvent?.location}
                                          <br />
                                          {currentEvent?.date.toLocaleDateString(
                                            "es-GT"
                                          )}{" "}
                                          - SKU
                                        </div>
                                        <br />
                                        <br />
                                        <hr />
                                      </div>
                                    </>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
                <div
                  className={
                    styles.boxFacts +
                    " bg-white pr-2 py-4 text-right  bottom-0 z-10 rounded-md sticky mt-4"
                  }
                >
                  <Button onClick={() => {}}>Save</Button>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
