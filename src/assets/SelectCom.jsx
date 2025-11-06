import React, { useEffect, useState } from "react";
import { ConfigProvider, Select, theme } from "antd";

const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const SelectCom = ({ arr }) => {
  let [isDark, setIsDark] = useState(true); //darkMode
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
