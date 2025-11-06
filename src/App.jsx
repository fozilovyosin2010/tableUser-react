import React, { useEffect, useState } from "react";
import Switcher from "./assets/Switcher";

import axios from "axios";
import SelectCom from "./assets/SelectCom";

const App = () => {
  const handleChangeSelect = (value) => {
    console.log(`selected ${value}`);
  };

  let thList = [
    "Img",
    "Email",
    "Name & Surname",
    "City",
    "Status",
    "Phone",
    "Opt",
  ];

  const [tData, setTdata] = useState([]);

  let api = "http://localhost:3000/user";

  let getData = async () => {
    try {
      let { data } = await axios.get(api);
      setTdata(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(localStorage.theme);
  }, [localStorage.theme]);

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
            <SelectCom
              arr={[
                { value: "", label: "All status" },
                { value: true, label: "Active" },
                { value: false, label: "Inactive" },
              ]}
            />
            <SelectCom
              arr={[
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
            <thead>
              <tr>
                {thList.map((e, i) => {
                  return (
                    <th key={i} className="text-[#fff] py-1 bg-[#6ca7c5]">
                      {e}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {tData.map((e) => {
                return (
                  <tr key={e.id}>
                    <td>
                      <img
                        src={e.img}
                        className="w-[30px] h-[30px] rounded-[50px]"
                        alt=""
                      />
                    </td>
                    <td>{e.email}</td>
                    <td>
                      {e.name} {e.surname}
                    </td>
                    <td>{e.city}</td>
                    <td>{e.status}</td>
                    <td>{e.mobile_phone}</td>
                    <td>{e.complete}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default App;
