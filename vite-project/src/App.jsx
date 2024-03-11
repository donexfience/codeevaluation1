import React, { useRef, useState } from "react";

import Classcomponent from "./Components/Classcomponent";
import Jsxcomponents from "./Components/Jsxcomponents";
import Welcome from "./Components/Welcome";
import Countercomponent from "./Components/Countercomponent";
import FunctionalComponent from "./Components/FunctionalComponent";
import { Newcomponent } from "./Components/Newcomponent";
import Newcounter from "./Components/Newcounter";
import Bindingevent from "./Components/Bindingevent";
import Parentcomponent from "./Components/Parentcomponent";
import Conditionalrendering from "./Components/Conditionalrendering";
import Namelist from "./Components/Namelist";
import Person from "./Components/Person";
import Styling from "./Components/Styling";
import Uncontrolled from "./Components/Uncontrolled";
import Refodemo from "./Components/Refodemo";
import Iniputref from "./Components/Iniputref";
import Forwardref from "./Components/Forwardref";
import Hoc from "./Components/Hoc";
import Hocone from "./Components/Hocone";
import Classcounter from "./Components/Classcounter";
import { Postlist } from "./Components/Postlist";
import Functionhook from "./Components/Functionhook";
import Usestatearray from "./Components/Usestatearray";
import EffectHook from "./Components/EffectHook";
import EffectCleanup from "./Components/EffectCleanup";
import Cleanup from "./Components/Cleanup";
import ClassTimer from "./Components/ClassTimer";
import ComponetB from "./Components/ComponetB";
import Ccounter from "./Components/usereducer/Ccounter";
import Counterobject from "./Components/usereducer/Counterobject";
import CounterobjectA from "./Components/usereducer/CounterobjectA";
import Datafetch from "./Components/usereducer/Datafetch";
import Datafetchusereducer from "./Components/usereducer/Datafetchusereducer";
import Doctitle from "./Components/coustomhook/Doctitle";
import Context from "./Components/Context";
import Forwardrefs from "./Components/Useref/Forwardrefs";
import Counters from "./Components/Counters";
import ParentCounter from "./Components/Review/ParentCounter";
export const appcontex = React.createContext();
function App() {
  return (
    <div>
      <ParentCounter />
    </div>
  );
}

export default App;
