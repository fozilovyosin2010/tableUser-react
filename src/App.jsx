import React from "react";
import Switcher from "./assets/Switcher";

import { Select, Space } from "antd";

const App = () => {
  const handleChangeSelect = (value) => {
    console.log(`selected ${value}`);
  };

  let thList = ["Img", "Email", "City", "Status", "Phone", "Opt"];

  return (
    <div>
      <div className="header p-[10px_14px] dark:bg-[#130a59] dark:text-[#fff] duration-300 border-b">
        <div className="block1 flex justify-between">
          <div className="font-semibold text-[20px]">User list</div>
          <div className="flex gap-3">
            <button className="bg-[blue] text-[#fff] p-[5px_12px] rounded-md font-medium">
              New
            </button>
            <Switcher />
          </div>
        </div>
        <div className="block2 flex justify-between max-sm:flex-col-reverse pt-2 gap-2">
          <div className="flex justify-between gap-3 ">
            <Select
              onChange={handleChangeSelect}
              defaultValue=""
              className="max-md:w-full shadow-md w-[100px] rounded-[20px]"
              // style={{ width: "100px" }}
              options={[
                { value: "", label: "All status" },
                { value: "active", label: "Active" },
                { value: "inactive", label: "Inactive" },
              ]}
            />
            <Select
              onChange={handleChangeSelect}
              defaultValue="all"
              className="max-md:w-full w-[100px] shadow-md"
              // style={{ width: "100px" }}
              options={[
                { value: "", label: "All cities" },
                { value: "dushanbe", label: "Dushanbe" },
                { value: "bokhtar", label: "Bokhtar" },
                { value: "Kulob", label: "Kulob" },
                { value: "Hisor", label: "Hisor" },
                { value: "Khujand", label: "Khujand" },
              ]}
            />
          </div>
          <input
            type="search"
            placeholder="Search"
            className="border p-[3px_15px] rounded-md max-md:w-full dark:bg-[#272062] outline-none"
          />
        </div>
      </div>
      <main>
        <div className="p-[10px_20px]">
          <table className="table  border w-full">
            <tr>
              {thList.map((e) => {
                return <th className="text-[#fff] py-1 bg-[#6ca7c5]">{e}</th>;
              })}
            </tr>
            <tr>
              <td>ferg</td>
              <td>ferg</td>
              <td>ferg</td>
              <td>ferg</td>
              <td>ferg</td>
              <td>ferg</td>
            </tr>
          </table>
        </div>
      </main>
    </div>
  );
};

export default App;
