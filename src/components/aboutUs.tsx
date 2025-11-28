import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import VerifiedIcon from "@mui/icons-material/Verified";
import HandymanIcon from "@mui/icons-material/Handyman";
import BuildIcon from "@mui/icons-material/Build";
import tabContentjson from "../utilities/tabContent.json";
import React from "react";

export default function AboutUs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabContent = tabContentjson;
  return (
    <>
      <div className="bg-[#F6F6F6]">
        <div className="flex flex-col items-center justify-center text-center p-6 ">
          <h1 className="font-bold text-4xl">
            Reparamos, Cuidamos y Protegemos Tu Vehículo
          </h1>
          <p className="mx-auto max-w-2xl text-base">
            Servicio mecánico profesional, transparente y seguro. Cuidamos tu
            vehículo con experiencia, tecnología y atención responsable para que
            conduzcas con total tranquilidad.
          </p>
        </div>

        {/* Tabs */}
     <div className="flex justify-center w-full mt-6">
  <Tabs
    value={value}
    onChange={handleChange}
    variant="scrollable"
    scrollButtons="auto"
    allowScrollButtonsMobile
    sx={{
      "& .MuiTabs-scrollButtons": {
        color: "#F5C32E", // color de las flechas
      },
    }}
  >
    <Tab
      icon={<SupportAgentIcon sx={{ fontSize: 70 }} />}
      label="Atención"
      sx={{ mx: 6 }}
    />
    <Tab
      icon={<DirectionsCarIcon sx={{ fontSize: 70 }} />}
      label="Servicio a Domicilio"
      sx={{ mx: 6 }}
    />
    <Tab
      icon={<VerifiedIcon sx={{ fontSize: 70 }} />}
      label="Calidad"
      sx={{ mx: 6 }}
    />
    <Tab
      icon={<HandymanIcon sx={{ fontSize: 70 }} />}
      label="Equipo"
      sx={{ mx: 6 }}
    />
  </Tabs>
</div>


        {/* Contenido dinámico */}
        <div className="mt-6 shadow-md rounded-lg max-w-6xl mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-[#393939] ">
            {/* Columna izquierda */}
            <div className="text-center md:text-left p-5">
              <h2 className="text-3xl font-bold mb-3 text-[#FFCC33]">
                {tabContent[value].title}
              </h2>
              <p className="text-white">{tabContent[value].text}</p>
              {tabContent[value].services && (
                <ul className="text-white mt-4 grid grid-cols-1 gap-2">
                  {tabContent[value].services?.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <BuildIcon
                        style={{ color: "#F5C32E", fontSize: "0.9rem" }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Columna derecha */}
            <div className="flex justify-center md:justify-end">
              <img
                src={tabContent[value].img}
                alt={tabContent[value].title}
                className="w-full max-w-xl "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
