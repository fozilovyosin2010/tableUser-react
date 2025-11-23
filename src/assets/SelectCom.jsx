import React, { useEffect, useState } from "react";
import { ConfigProvider, Select, theme } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setValue } from "../reducers/globSlice";

const SelectCom = ({ arr, name }) => {
  let darkMode = useSelector((e) => e.slices.darkMode);
  let [isDark, setIsDark] = useState(darkMode);

  let disP = useDispatch();

  useEffect(() => {
    setIsDark(darkMode);
  }, [darkMode]);

  const handleChange = (value) => {
    if (name == "status") {
      disP(setValue([value, "status"]));
    } else if (name == "city") {
      disP(setValue([value, "city"]));
    }
  };
  return (
    <div>
      <ConfigProvider
        theme={{
          algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
        }}
      >
        <Select
          defaultValue=""
          className="shadow-[0_0_5px_#ccc] rounded-md w-full"
          onChange={handleChange}
          options={arr.map((e) => {
            return e;
          })}
        />
      </ConfigProvider>
    </div>
  );
};

export default SelectCom;
