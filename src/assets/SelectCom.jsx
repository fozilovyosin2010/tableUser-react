import React, { useEffect, useState } from "react";
import { ConfigProvider, Select, theme } from "antd";
import { useSelector } from "react-redux";

const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const SelectCom = ({ arr }) => {
  let darkMode = useSelector((e) => e.slices.darkMode);
  let [isDark, setIsDark] = useState(darkMode);

  useEffect(() => {
    setIsDark(darkMode);
  }, [darkMode]);
  return (
    <div>
      <ConfigProvider
        theme={{
          algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
        }}
      >
        <Select
          defaultValue=""
          style={{ width: 120 }}
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
