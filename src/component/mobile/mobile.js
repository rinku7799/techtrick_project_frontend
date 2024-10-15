import mobile from "../../assets/mobile2.png";
import Flags from "react-flags-select";
// import 'react-flags-select/css/react-flags-select.css';
import "./mobile.css";
import { useState } from "react";
import { Container } from "react-bootstrap";

const Mobile = () => {
  const [selectedCountry, setSelectedCountry] = useState('IN');
  const [selected, setSelected] = useState("IN");

  const handleSelect = (countryCode) => {
    setSelectedCountry(countryCode);
  };
  return (
    <div className="mobile-wrapper">
      <div className="d-flex flex-column align-items-center">
        <p className="h1 mt-4 fw-bolder text-center">Download the all-in-one TTHC App</p>
        <p>Digital Care, Health at Home</p>
        <div className="row p-0 m-0">
          <div className="col">
            <div className="input-group mb-3" style={{ borderRadius: "50px" }}>
              <button type="button" className="btn btn-outline-secondary btn-light border-0 action" style={{ borderRadius: "50px 0 0 50px" }}>
                <Flags
                  selected={selectedCountry}
                  onSelect={(code) => setSelectedCountry(code)}
                />
              </button>
              <ul className="dropdown-menu">
                <li key={selectedCountry}><a className="dropdown-item" href="#" onClick={() => handleSelect(selectedCountry)}><Flags country={selectedCountry} /></a></li>
              </ul>
              <input type="text" className="form-control border-0" aria-label="Text input with segmented dropdown button" placeholder='Phone number' />
              <button className='btn btn-primary' style={{ borderRadius: "0 50px 50px 0" }}>Text me the app</button>
            </div>
          </div>
        </div>
        <p>Available in the app store and PLAY STORE</p>
      </div>

      <Container>
        <div className="row mt-3">
          <div className="col-lg-4 col-12 text-start">
            <div className="d-flex justify-content-center mt-5">
              <svg
                width="65"
                height="65"
                viewBox="0 0 65 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_128_3663)">
                  <path
                    d="M57.7901 30.8001C57.7901 16.8825 46.5077 5.6001 32.5901 5.6001C18.6726 5.6001 7.39014 16.8825 7.39014 30.8001C7.39014 44.7177 18.6726 56.0001 32.5901 56.0001C46.5077 56.0001 57.7901 44.7177 57.7901 30.8001Z"
                    stroke="#1463F3"
                    stroke-width="0.8"
                    shape-rendering="crispEdges"
                  />
                </g>
                <path
                  d="M37.3898 16.3999H27.7898C26.0225 16.3999 24.5898 17.8326 24.5898 19.5999V41.9999C24.5898 43.7672 26.0225 45.1999 27.7898 45.1999H37.3898C39.1572 45.1999 40.5898 43.7672 40.5898 41.9999V19.5999C40.5898 17.8326 39.1572 16.3999 37.3898 16.3999Z"
                  fill="#1463F3"
                />
                <defs>
                  <filter
                    id="filter0_d_128_3663"
                    x="0.490234"
                    y="0.200195"
                    width="64.1997"
                    height="64.2"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="1.5" />
                    <feGaussianBlur stdDeviation="3.25" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0784314 0 0 0 0 0.388235 0 0 0 0 0.952941 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_128_3663"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_128_3663"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <div className="ms-4">
                <p className="fw-bolder">Book Services in a Few Clicks</p>
                <p>Better recovery is just a tap away.</p>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-5">
              <svg
                width="65"
                height="65"
                viewBox="0 0 65 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_128_3663)">
                  <path
                    d="M57.7896 30.9C57.7896 16.9824 46.5072 5.69995 32.5896 5.69995C18.6721 5.69995 7.38965 16.9824 7.38965 30.9C7.38965 44.8175 18.6721 56.1 32.5896 56.1C46.5072 56.1 57.7896 44.8175 57.7896 30.9Z"
                    stroke="#1463F3"
                    stroke-width="0.8"
                  />
                </g>
                <path
                  d="M19.79 27.2895C19.79 26.7867 20.1536 26.3576 20.6495 26.2749L26.4735 25.3043C27.1004 25.1998 27.6712 25.6832 27.6712 26.3188V38.6707C27.6712 39.2388 27.2106 39.6992 26.6425 39.6992H20.8186C20.2505 39.6992 19.79 39.2388 19.79 38.6707V27.2895Z"
                  fill="#9EC0FC"
                />
                <path
                  d="M36.7197 32.1248C36.7197 31.5989 37.1163 31.1577 37.6392 31.102L43.4631 30.4808C44.0709 30.416 44.6008 30.8923 44.6008 31.5036V38.6714C44.6008 39.2395 44.1403 39.7 43.5722 39.7H37.7483C37.1802 39.7 36.7197 39.2395 36.7197 38.6714V32.1248Z"
                  fill="#9EC0FC"
                />
                <path
                  d="M28.2554 20.2849C28.2554 19.782 28.6189 19.353 29.1149 19.2703L34.9388 18.2996C35.5658 18.1952 36.1365 18.6786 36.1365 19.3142V38.6715C36.1365 39.2396 35.6759 39.7 35.1079 39.7H29.2839C28.7159 39.7 28.2554 39.2396 28.2554 38.6715V20.2849Z"
                  fill="#1463F3"
                />
                <defs>
                  <filter
                    id="filter0_d_128_3663"
                    x="0.589746"
                    y="0.500049"
                    width="63.9997"
                    height="64"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="1.6" />
                    <feGaussianBlur stdDeviation="3.2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0784314 0 0 0 0 0.388235 0 0 0 0 0.952941 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_128_3663"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_128_3663"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <div className="ms-4">
                <p className="fw-bolder">Track Your Health</p>
                <p>Stay updated with your progress</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12 text-center">
            <img src={mobile} width={"300px"} height={"430px"} />
          </div>
          <div className="col-lg-4 col-12 text-start">
            <div className="d-flex justify-content-center mt-5">
              <svg
                width="64"
                height="65"
                viewBox="0 0 64 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_128_3663)">
                  <path
                    d="M57.1998 30.9297C57.1998 17.0122 45.9174 5.72974 31.9998 5.72974C18.0822 5.72974 6.7998 17.0122 6.7998 30.9297C6.7998 44.8473 18.0822 56.1297 31.9998 56.1297C45.9174 56.1297 57.1998 44.8473 57.1998 30.9297Z"
                    stroke="#1463F3"
                    stroke-width="0.8"
                  />
                </g>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M30.3169 19.6274L28.5089 21.4338C28.3629 21.5798 28.1649 21.6621 27.9585 21.6626H25.1137C23.7985 21.6626 22.7329 22.7282 22.7329 24.0434V26.8882C22.7325 27.0951 22.6502 27.2935 22.5041 27.4402L20.6961 29.2466C20.2497 29.693 19.999 30.2984 19.999 30.9298C19.999 31.561 20.2497 32.1665 20.6961 32.613L22.5041 34.421C22.6501 34.5669 22.7324 34.7648 22.7329 34.9713V37.8162C22.7329 39.1314 23.7985 40.197 25.1137 40.197H27.9585C28.1654 40.1974 28.3639 40.2796 28.5105 40.4258L30.3169 42.2338C30.7633 42.6801 31.3688 42.9308 32.0001 42.9308C32.6313 42.9308 33.2368 42.6801 33.6833 42.2338L35.4913 40.4258C35.6373 40.2797 35.8352 40.1974 36.0417 40.197H38.8865C40.2017 40.197 41.2673 39.1314 41.2673 37.8162V34.9713C41.2677 34.7643 41.3499 34.5659 41.4961 34.4194L43.3041 32.613C43.7504 32.1665 44.0011 31.561 44.0011 30.9298C44.0011 30.2984 43.7504 29.693 43.3041 29.2466L41.4961 27.4386C41.35 27.2926 41.2677 27.0946 41.2673 26.8882V24.0434C41.2673 22.7282 40.2017 21.6626 38.8865 21.6626H36.0417C35.8346 21.6625 35.6361 21.5802 35.4897 21.4338L33.6833 19.6258C33.2368 19.1794 32.6313 18.9287 32.0001 18.9287C31.3688 18.9287 30.7633 19.1794 30.3169 19.6258V19.6274ZM27.4337 34.3634L35.4337 26.3634L36.5665 27.4962L28.5665 35.4962L27.4337 34.3634ZM28.0001 26.9298V28.5298H29.6001V26.9298H28.0001ZM34.4001 34.9298H36.0001V33.3298H34.4001V34.9298Z"
                  fill="#1463F3"
                />
                <defs>
                  <filter
                    id="filter0_d_128_3663"
                    x="-9.77516e-05"
                    y="0.529834"
                    width="63.9997"
                    height="64"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="1.6" />
                    <feGaussianBlur stdDeviation="3.2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0784314 0 0 0 0 0.388235 0 0 0 0 0.952941 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_128_3663"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_128_3663"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <div className="ms-4">
                <p className="fw-bolder">Get Offers on Bookings</p>
                <p>Exclusive offers on bookings via the app</p>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-5">
              <svg
                width="64"
                height="65"
                viewBox="0 0 64 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_128_3663)">
                  <path
                    d="M57.1998 31.2198C57.1998 17.3022 45.9174 6.01978 31.9998 6.01978C18.0822 6.01978 6.7998 17.3022 6.7998 31.2198C6.7998 45.1374 18.0822 56.4198 31.9998 56.4198C45.9174 56.4198 57.1998 45.1374 57.1998 31.2198Z"
                    stroke="#1463F3"
                    stroke-width="0.8"
                  />
                </g>
                <path
                  d="M36.9768 20.0198H26.2232C24.9953 20.0198 24 21.0151 24 22.2429V39.3966C24 40.6244 24.9953 41.6198 26.2232 41.6198H36.9768C38.2047 41.6198 39.2 40.6244 39.2 39.3966V22.2429C39.2 21.0151 38.2047 20.0198 36.9768 20.0198Z"
                  fill="#1463F3"
                />
                <path
                  d="M40.7999 20.0198H22.3999V23.2198H40.7999V20.0198Z"
                  fill="#9CC2FF"
                />
                <path
                  d="M39.2 28.0198H24V35.2198H39.2V28.0198Z"
                  fill="#9CC2FF"
                />
                <defs>
                  <filter
                    id="filter0_d_128_3663"
                    x="-9.77516e-05"
                    y="0.819873"
                    width="63.9997"
                    height="64"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="1.6" />
                    <feGaussianBlur stdDeviation="3.2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0784314 0 0 0 0 0.388235 0 0 0 0 0.952941 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_128_3663"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_128_3663"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <div className="ms-4">
                <p className="fw-bolder">Order Medicines Instantly</p>
                <p>All medicines delivered at your doorstep</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Mobile;
