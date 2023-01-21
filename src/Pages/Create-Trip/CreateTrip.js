import React, { useState } from "react";
import Navigation from "../../Components/Navigation/Navigation";
import "./createtrip.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function CreateTrip() {
  const [time, setTime] = useState(null);
  const [date, setDate] = useState(null);
  const [campusSite, setCampusSite] = useState(null);
  const [styleIsGoing, setStyleIsGoing] = useState("buttons mts-4");
  const [isGoing, setIsGoing] = useState(0);
  const [rideType, setRideType] = useState("Ride");
  const navigate = useNavigate();
  const options = [
    { value: "CITY", text: "CITY" },
    { value: "1", text: "Baabda" },
    { value: "2", text: "Borj el Brajneh" },
    { value: "3", text: "Hazmieh" },
    { value: "4", text: "Hadath" },
    { value: "5", text: "Hammana" },
    { value: "6", text: "Chebanieh" },
    { value: "7", text: "Ras el Matn" },
    { value: "8", text: "Chiyah" },
    { value: "9", text: "Ghbeireh" },
    { value: "10", text: "Falougha" },
    { value: "11", text: "Furn el Chebbak" },
    { value: "12", text: "Kornayel" },
    { value: "13", text: "Kfarchima" },
    { value: "14", text: "Wadi Chahrour" },
    { value: "15", text: "Abadiyeh" },
    { value: "16", text: "Salima" },
    { value: "17", text: "Jdeideh" },
    { value: "18", text: "Bourj Hammoud" },
    { value: "19", text: "Bauchrieh" },
    { value: "20", text: "Antelias" },
    { value: "21", text: "Brummana" },
    { value: "22", text: "Baabdat" },
    { value: "23", text: "Bikfaya" },
    { value: "24", text: "Beit Chabab" },
    { value: "25", text: "Beit Mery" },
    { value: "26", text: "Chewyeh" },
    { value: "27", text: "Jal el Dib" },
    { value: "28", text: "Dekwaneh" },
    { value: "29", text: "Zalka" },
    { value: "30", text: "Sin el Fil" },
    { value: "31", text: "Dbayeh" },
    { value: "32", text: "Kornet Chehwan" },
    { value: "33", text: "Aintoura" },
    { value: "34", text: "Choueir" },
    { value: "35", text: "Khenchara" },
    { value: "36", text: "Bteghrine" },
    { value: "37", text: "Baskinta" },
    { value: "38", text: "Abey - Ain Drafil" },
    { value: "39", text: "Aghmid" },
    { value: "40", text: "Ain Dara" },
    { value: "41", text: "Ain el Remmaneh" },
    { value: "42", text: "Ain el Sayde" },
    { value: "43", text: "Ain Jedideh" },
    { value: "44", text: "Ain Ksour" },
    { value: "45", text: "Ain Onoub" },
    { value: "46", text: "Ainab" },
    { value: "47", text: "Aley" },
    { value: "48", text: "Aramoun el Ghareb" },
    { value: "49", text: "Baawerta" },
    { value: "50", text: "Badghan" },
    { value: "51", text: "Baissour" },
    { value: "52", text: "Bassatine" },
    { value: "53", text: "Bchamoun" },
    { value: "54", text: "Bdadoun" },
    { value: "55", text: "Bemkine" },
    { value: "56", text: "Bennieh" },
    { value: "57", text: "Bhamdoun el Balda" },
    { value: "58", text: "Bhamdoun el Mhatta" },
    { value: "59", text: "Bkhechtey" },
    { value: "60", text: "Bleibel" },
    { value: "61", text: "Bmahray" },
    { value: "62", text: "Bserrine" },
    { value: "63", text: "Bsouss" },
    { value: "64", text: "Btalloun" },
    { value: "65", text: "Btater" },
    { value: "66", text: "Chanay" },
    { value: "67", text: "Charoun" },
    { value: "68", text: "Chartoun" },
    { value: "69", text: "Chemlan" },
    { value: "70", text: "Choueifat" },
    { value: "71", text: "Deir Koubel" },
    { value: "72", text: "Dfoun" },
    { value: "73", text: "Eitat" },
    { value: "74", text: "Houmal" },
    { value: "75", text: "Kehaleh" },
    { value: "76", text: "Keyfoun" },
    { value: "77", text: "Kfaraamey" },
    { value: "78", text: "Kfarmatta" },
    { value: "79", text: "Kommatyeh" },
    { value: "80", text: "Majdelbaana" },
    { value: "81", text: "Mansourieh - Ain el Marej" },
    { value: "82", text: "Mecherfeh" },
    { value: "83", text: "Mejdlaya" },
    { value: "84", text: "Rajmeh" },
    { value: "85", text: "Ramlieh" },
    { value: "86", text: "Rechmaya" },
    { value: "87", text: "Remhala" },
    { value: "88", text: "Rouaysset el Neeman" },
    { value: "89", text: "Saoufar" },
    { value: "90", text: "Souk el Ghareb" },
    { value: "91", text: "Taazanieh" },
    { value: "92", text: "Achqout" },
    { value: "93", text: "Adonis" },
    { value: "94", text: "Ain el Rihaneh" },
    { value: "95", text: "Aintoura" },
    { value: "96", text: "Ajaltoun" },
    { value: "97", text: "Akaybeh" },
    { value: "98", text: "Aramoun" },
    { value: "99", text: "Azra & Ozor" },
    { value: "100", text: "Ballouneh" },
    { value: "101", text: "Batha" },
    { value: "102", text: "Bekaatat Achkout" },
    { value: "103", text: "Bouar" },
    { value: "104", text: "Bezhel & Mradyeh" },
    { value: "105", text: "Chahtoul & Jouret Mehad" },
    { value: "106", text: "Chnaniir" },
    { value: "107", text: "Daraya" },
    { value: "108", text: "Daraoun - Harissa" },
    { value: "109", text: "Dlebta" },
    { value: "110", text: "Faitroun" },
    { value: "111", text: "Faraya" },
    { value: "112", text: "Fatka" },
    { value: "113", text: "Ghazir" },
    { value: "114", text: "Ghbaleh" },
    { value: "115", text: "Ghedrass" },
    { value: "116", text: "Ghosta" },
    { value: "117", text: "Ghyneh" },
    { value: "118", text: "Hiyata" },
    { value: "119", text: "Hosein" },
    { value: "120", text: "Hrajel" },
    { value: "121", text: "Jdeideh - Harharaya - Kattine" },
    { value: "122", text: "Jeita" },
    { value: "123", text: "Jounieh" },
    { value: "124", text: "Jouret Termos" },
    { value: "125", text: "Kfardebian" },
    { value: "126", text: "Kfour" },
    { value: "127", text: "Klayaat" },
    { value: "128", text: "Maaysra" },
    { value: "129", text: "Mayrouba" },
    { value: "130", text: "Raachine" },
    { value: "131", text: "Rayfoun" },
    { value: "132", text: "Batha" },
    { value: "133", text: "Sehay" },
    { value: "134", text: "Tabarja - Adma - Dafne - Kfaryassine" },
    { value: "135", text: "Wata el Jawz" },
    { value: "136", text: "Yahchouch" },
    { value: "137", text: "Zaaytre" },
    { value: "138", text: "Zeytoun" },
    { value: "139", text: "Zouk Mikael" },
    { value: "140", text: "Zouk Mosbeh" },
    { value: "141", text: "Ainbal" },
    { value: "142", text: "Ain Kani" },
    { value: "143", text: "Ain Wzein" },
    { value: "144", text: "Ain Zhalta" },
    { value: "145", text: "Amatour" },
    { value: "146", text: "Ammik" },
    { value: "147", text: "Anout" },
    { value: "148", text: "Atrine" },
    { value: "149", text: "Baakline" },
    { value: "150", text: "Baasir" },
    { value: "151", text: "Barja" },
    { value: "152", text: "Barouk - Freydiss" },
    { value: "153", text: "Bater" },
    { value: "154", text: "Batloun" },
    { value: "155", text: "Bchetfine" },
    { value: "156", text: "Beiteddine" },
    { value: "157", text: "Berjein & Mreyjat" },
    { value: "158", text: "Bireh" },
    { value: "159", text: "Botme" },
    { value: "160", text: "Bsaba El Chouf" },
    { value: "161", text: "Chehim" },
    { value: "162", text: "Daher el Mghara" },
    { value: "163", text: "Dalhoun" },
    { value: "164", text: "Damour" },
    { value: "165", text: "Daraya" },
    { value: "166", text: "Debbieh" },
    { value: "167", text: "Deir Dourit" },
    { value: "168", text: "Deir el Qamar" },
    { value: "169", text: "Deir Kouche" },
    { value: "170", text: "Dmit" },
    { value: "171", text: "Fouara" },
    { value: "172", text: "Gharife" },
    { value: "173", text: "Haret Jandal" },
    { value: "174", text: "Hasrout" },
    { value: "175", text: "Khraybeh" },
    { value: "176", text: "Jadra" },
    { value: "177", text: "Jahlieh" },
    { value: "178", text: "Jbeih" },
    { value: "179", text: "Jdeidet el Chouf" },
    { value: "180", text: "Jiyeh" },
    { value: "181", text: "Joun" },
    { value: "182", text: "Kahlounie" },
    { value: "183", text: "Ketermaya" },
    { value: "184", text: "Kfarfakoud" },
    { value: "185", text: "Kfarhim" },
    { value: "186", text: "Kfarkatra" },
    { value: "187", text: "Kfarnabrakh" },
    { value: "188", text: "Kfarniss" },
    { value: "189", text: "Knayse" },
    { value: "190", text: "Maasser Beiteddine" },
    { value: "191", text: "Maasser el Chouf" },
    { value: "192", text: "Majdel Meouch" },
    { value: "193", text: "Mazboud" },
    { value: "194", text: "Baatharan" },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("CITY");
  const filteredOptions = options.filter((option) =>
    option.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const [seatCount, setSeatCount] = useState(1);
  function incremeantSeat() {
    setSeatCount(seatCount + 1);
  }
  function decremeantSeat() {
    if (seatCount > 1) setSeatCount(seatCount - 1);
  }
  function isGoingFun() {
    if (isGoing == 0) {
      setStyleIsGoing("rotate");
      setIsGoing(1);
    }
    if (isGoing == 1) {
      setStyleIsGoing("buttons");
      setIsGoing(0);
    }
  }
  function popSome() {
    if (
      location != "CITY" &&
      campusSite != null &&
      date != null &&
      time != null
    ) {
      var Trip = {
        location: location,
        campus: campusSite,
        date: date,
        time: time,
        seats: seatCount,
        isGoing: isGoing,
        rideType: rideType,
      };
      navigate("/main");
      //BACK END CODE HERE
    }
  }

  // function register() {
  //   axios
  //     .post("http://localhost:8000/api/trips", {
  //       LIU_ID: ID,
  //       password: pass,
  //       confirm_password: cpass,
  //       is_LIU: isLIU,
  //     })
  //     .then((response) => console.log(response))
  //     .catch((error) => console.error(error));

  //   if (conditions()) {
  //     navigate("/verify", {
  //       state: { id: ID, password: pass, isLIU: isLIU },
  //     });
  //   }
  // }

  return (
    <>
      <Navigation />

      <div className="create-trip">
        <main>
          <h1 className="title mt-5">CREATE TRIP</h1>
          <div className="container mt-5 main-container">
            <div className="row inputs mt-5 d-flex justify-content-center">
              <div className="col-12 col-lg-5 p-lg-4 py-4 px-3">
                <div>
                  <input
                    class="form-control btn btn-outline-primary location-btn"
                    list="datalistOptions"
                    id="exampleDataList"
                    placeholder="SEARCH FOR CITY"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setLocation(e.target.value);
                    }}
                  />
                  <datalist id="datalistOptions">
                    {filteredOptions.map((option) => (
                      <option key={option.value} value={option.value.text}>
                        {option.text}
                      </option>
                    ))}
                  </datalist>
                </div>
              </div>
              <div className="arrow-container col-3 col-lg-2 d-flex justify-content-center p-lg-4 py-4 px-3 m-lg-0 ">
                <button onClick={() => isGoingFun()} className={styleIsGoing}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="42.05"
                    height="34.858"
                    viewBox="0 0 42.05 34.858"
                  >
                    <path
                      id="arrow_1_"
                      data-name="arrow (1)"
                      d="M1,14.894H38.05M24.156,1,38.05,14.894,24.156,28.787"
                      transform="translate(1.5 2.536)"
                      fill="none"
                      stroke="#ffb019"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="5"
                      fill-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div className="col-12 col-lg-5 p-lg-4 py-4 px-3">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  value={campusSite}
                  onChange={(e) => setCampusSite(e.target.value)}
                >
                  <option selected>CAMPUS SITE</option>
                  <option value="1">BEIRUT</option>
                  <option value="2">BEKAA</option>
                  <option value="3">HALBA</option>
                  <option value="4">MOUNT LEBANON</option>
                  <option value="5">NABATIEH</option>
                  <option value="6">RAYAK</option>
                  <option value="7">SAIDA</option>
                  <option value="8">TRIPOLI</option>
                  <option value="9">TYRE</option>
                </select>
              </div>
              <div className="col-12 col-lg-6 p-lg-4 py-4 px-3">
                <input
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  type="date"
                  className="btn btn-outline-primary location-btn"
                ></input>
              </div>
              <div className="col-12 col-lg-6 p-lg-4 py-4 px-3">
                <input
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  type="time"
                  className="btn btn-outline-primary form-btn"
                ></input>
              </div>
              <div className="col-12 col-lg-6 p-lg-4 py-4 px-3">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  value={rideType}
                  onChange={(e) => setRideType(e.target.value)}
                >
                  <option selected>SELECT RIDE TYPE</option>
                  <option value="CAR">CAR</option>
                  <option value="SUV">SUV</option>
                  <option value="PICK-UP">PICK-UP</option>
                  <option value="MOTOR-CYCLE">MOTOR-CYCLE</option>
                  <option value="VAN">VAN</option>
                  <option value="MINI-VAN">MINI-VAN</option>
                  <option value="BUS">BUS</option>
                </select>
              </div>
              <div className="col-12 col-lg-6 p-lg-4 py-4 px-3">
                <div className="input-group">
                  <span className="input-group-text seat-label px-xxl-5">
                    SEATS AVAILABLE
                  </span>
                  <button
                    onClick={() => decremeantSeat()}
                    className="btn btn-outline-secondary add p-0"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="4.5"
                      viewBox="0 0 22 4.5"
                    >
                      <line
                        id="minus"
                        x2="22"
                        transform="translate(0 2.25)"
                        fill="none"
                        stroke="#ffb019"
                        strokeWidth="4.5"
                      />
                    </svg>
                  </button>
                  <input
                    type="text"
                    className="form-control number"
                    value={seatCount}
                  />
                  <button
                    onClick={() => incremeantSeat()}
                    className="btn btn-outline-secondary add p-0"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                    >
                      <g
                        id="Group_226"
                        data-name="Group 226"
                        transform="translate(-500 -645)"
                      >
                        <line
                          id="minus"
                          x2="22"
                          transform="translate(500 656)"
                          fill="none"
                          stroke="#ffb019"
                          strokeWidth="4.5"
                        />
                        <line
                          id="minus-2"
                          data-name="minus"
                          x2="22"
                          transform="translate(511 645) rotate(90)"
                          fill="none"
                          stroke="#ffb019"
                          strokeWidth="4.5"
                        />
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="container d-flex justify-content-lg-end justify-content-center">
            <button className="create" onClick={() => popSome()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="138"
                height="64"
                viewBox="0 0 138 64"
              >
                <defs>
                  <filter
                    id="Rectangle_11"
                    x="0"
                    y="0"
                    width="138"
                    height="64"
                    filterUnits="userSpaceOnUse"
                  >
                    <feOffset dx="-1" dy="2" input="SourceAlpha" />
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feFlood floodColor="#143d6d" floodOpacity="0.502" />
                    <feComposite operator="in" in2="blur" />
                    <feComposite in="SourceGraphic" />
                  </filter>
                </defs>
                <g
                  id="Group_17"
                  data-name="Group 17"
                  transform="translate(-1026 -569)"
                >
                  <g
                    transform="matrix(1, 0, 0, 1, 1026, 569)"
                    filter="url(#Rectangle_11)"
                  >
                    <rect
                      id="Rectangle_11-2"
                      data-name="Rectangle 11"
                      width="120"
                      height="46"
                      rx="8"
                      transform="translate(10 7)"
                      fill="#143d6d"
                    />
                  </g>
                  <text
                    id="CREATE"
                    transform="translate(1064 606)"
                    fill="#ffb019"
                    fontSize="18"
                    fontFamily="SegoeUI-Bold, Segoe UI"
                    fontWeight="700"
                  >
                    <tspan x="0" y="0">
                      CREATE
                    </tspan>
                  </text>
                </g>
              </svg>
            </button>
          </div>
          <div
            className="modal fade"
            id="map-modal"
            tabindex="-1"
            aria-labelledby="map-modal"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="address-label">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <a className="skiplink" href="#map">
                    Go to map
                  </a>
                  <div id="map" className="map" tabindex="0"></div>
                  <button id="zoom-out">Zoom out</button>
                  <button id="zoom-in">Zoom in</button>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
