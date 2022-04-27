import StateAutoComplete from "./components/StateAutocomplete";
import { getCityState } from "..fetcher/";

function AutoCompleteApp() {
  return (
    <div className="AutoCompleteApp">
      <StateAutoComplete   data={getCityState} />
    </div>
  );
}

export default AutoCompleteApp;