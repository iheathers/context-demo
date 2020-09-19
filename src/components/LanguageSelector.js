import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div>
        Select a language:
        <i
          className="us flag"
          onClick={() => {
            console.log("us");
            this.context.onLanguageChange({ language: "english" });
          }}
        />
        <i
          className="nl flag"
          onClick={() => {
            console.log("nl");
            this.context.onLanguageChange({ language: "dutch" });
          }}
        />
      </div>
    );
  }
}

export default LanguageSelector;
