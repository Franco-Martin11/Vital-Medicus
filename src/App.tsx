import { LocationIcon, PoligonContainer, QuestionMarkIcon, SingIcon } from "./components"


function App() {

  return (
    <div className=" bg-[#fff] flex flex-col gap-2 w-full max-w-[768px] mx-auto min-h-screen">
      <div className="flex flex-row p-2 justify-between items-center">

        <div className="flex flex-col font-heading">
          <h2 className=" text-[#757575] text-[20px]">Hola,</h2>
          <h3 className='capitalize underline text-[18px] relative bottom-2'>Nombre de usuario</h3>
        </div>

        <svg width="62" height="88" viewBox="0 0 62 88" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.9846 0V19.1002H0.880203V38.2244H38.7414V0H21.9846Z" fill="white" />
          <path d="M40.7364 59.4821V40.3822H61.8409V21.2578H23.9797V59.4821H40.7364Z" fill="#4C3669" />
          <g className='mix-blend'>
            <path d="M21.9846 0.0517578V19.1519H0.880203V38.2761H38.7414V0.0517578H21.9846Z" fill="#D82E4C" />
          </g>
          <path d="M7.64606 87.7774L1.92523 72.7519L3.99541 71.9505L8.89262 85.4624L13.8121 72.0173L15.7264 72.7519L10.0279 87.7774H7.64606ZM17.9446 87.7774V72.1954H20.0593V87.7774H17.9446ZM27.0799 87.7774V74.0652H22.294V72.1954H33.9805V74.0652H29.1946V87.7774H27.0799ZM45.5858 88L43.8495 83.548H36.6373L34.901 87.9555L33.0979 87.2209L39.1972 72.1954H41.5122L47.5224 87.2209L45.5858 88ZM37.3051 81.7672H43.1595L40.2434 74.2878L37.3051 81.7672ZM49.7479 87.7774V72.1954H51.8626V85.8853H59.008V87.7774H49.7479Z" fill="#4C3669" />
        </svg>
      </div>

      <div className="relative flex flex-col items-center px-2 w-full">
        <h1 className="uppercase text-pinkChicle text-center text-[45px] relative top-4 font-heading">emergencia</h1>
        <QuestionMarkIcon className="relative top-[45px]" />
        <div className="flex flex-row justify-between sm:justify-center w-full gap-[36px]">
          <PoligonContainer direction="right" title={"cuenta"} route={"/asd"}>    <SingIcon className='absolute -right-3  -left-3  -top-2' />

          </PoligonContainer>
          <PoligonContainer direction="left" title={"Mapa y teléfonos"} route={"/asd"}>
            <LocationIcon className='absolute -right-3  -top-2 ' />
          </PoligonContainer>
        </div>
      </div>
      <div className=" relative h-[250px] w-full bg-url bg-cover flex flex-col justify-center items-center">

        <div className="flex flex-col relative justify-between  w-[330px] sm:w-[550px] mx-auto rounded-lg h-[130px] bg-pinkChicle px-4 py-6 gap-2">

          <div className="flex flex-row justify-between items-center">
            <h3 className="uppercase text-[#fff] text-3xl ml-6 font-heading">information</h3>
            <svg width="19" height="31" viewBox="0 0 19 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 3L16 16.1466L3 28" stroke="white" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

          </div>

          <h4 className="text-[#fafafa] text-[.85rem] sm:text-[1rem] capitalize ml-[4.5rem] font-heading w-fit">botiquin;lesiones;donar sangre; medicamentos; enfermedades</h4>
          <svg className='absolute -left-3 -bottom-3' width="89" height="80" viewBox="0 0 89 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M79.5 18.25H66.375V9.5C66.375 7.17936 65.4531 4.95376 63.8122 3.31282C62.1712 1.67187 59.9456 0.75 57.625 0.75H31.375C29.0544 0.75 26.8288 1.67187 25.1878 3.31282C23.5469 4.95376 22.625 7.17936 22.625 9.5V18.25H9.5C7.17936 18.25 4.95376 19.1719 3.31282 20.8128C1.67187 22.4538 0.75 24.6794 0.75 27V70.75C0.75 73.0706 1.67187 75.2962 3.31282 76.9372C4.95376 78.5781 7.17936 79.5 9.5 79.5H79.5C81.8206 79.5 84.0462 78.5781 85.6872 76.9372C87.3281 75.2962 88.25 73.0706 88.25 70.75V27C88.25 24.6794 87.3281 22.4538 85.6872 20.8128C84.0462 19.1719 81.8206 18.25 79.5 18.25ZM31.375 9.5H57.625V18.25H31.375V9.5ZM62 53.25H48.875V66.375H40.125V53.25H27V44.5H40.125V31.375H48.875V44.5H62V53.25Z" fill="white" />
          </svg>

        </div>
      </div>
    </div>
  )
}

export default App
