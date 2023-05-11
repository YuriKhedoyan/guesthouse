import React from "react";
// import ru from "./ru.json";
// import am from "./am.json";
import eng from "./eng.json";
const LanguageContext = React.createContext(JSON.stringify(eng));

export default LanguageContext;
