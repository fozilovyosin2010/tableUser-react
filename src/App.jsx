import React, { useEffect, useState } from "react";
import Switcher from "./assets/Switcher";

import axios from "axios";
import SelectCom from "./assets/SelectCom";
import SkeletonCom from "./assets/SkeletonCom";

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

  let [load, setLoad] = useState(false);

  let getData = async () => {
    try {
      setLoad(true);
      let { data } = await axios.get(api);
      setTdata(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoad(false);
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
            <button className="bg-[blue] dark:bg-[#0101a8] text-[#fff] p-[5px_12px] rounded-md font-medium">
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
            className="border p-[3px_15px] rounded-md dark:border-[#524f4f]
             max-md:w-full dark:bg-[#000] outline-none"
          />
        </div>
      </div>
      <main>
        <div className="p-[10px_20px] overflow-x-auto">
          <table className="table  border w-[1000px] lg:w-full">
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
                        className="w-[50px] h-[50px] rounded-[50px]"
                        alt=""
                      />
                    </td>
                    <td className="text">{e.email}</td>
                    <td className="text">
                      {e.name} {e.surname}
                    </td>
                    <td className="text">{e.city}</td>
                    <td className={`text `}>
                      <span
                        className={`p-1 inline-block w-[84.78px] text-center font-medium text-[14px] ${
                          e.status == "ACTIVE" ? "bg-blue-500" : "bg-red-500"
                        }`}
                      >
                        {e.status}
                      </span>
                    </td>
                    <td className="text">{e.mobile_phone}</td>
                    <td>{e.complete}</td>
                  </tr>
                );
              })}
              {load ? (
                <>
                  <SkeletonCom />
                  <SkeletonCom />
                  <SkeletonCom />
                  <SkeletonCom />
                  <SkeletonCom />
                  <SkeletonCom />
                  <SkeletonCom />
                </>
              ) : null}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default App;
