import React, { useEffect, useRef, useState } from "react";
import Switcher from "./assets/Switcher";

import axios from "axios";
import SelectCom from "./assets/SelectCom";
import SkeletonCom from "./assets/SkeletonCom";
import MenuCom from "./assets/MenuCom";

import { Button, Form, Input } from "antd";
import { ConfigProvider, Select, theme } from "antd";
import { useSelector } from "react-redux";
import FormCom from "./assets/FormCom";

const App = () => {
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

  let [load, setLoad] = useState(true);

  // network Err

  let [netErr, setNetErr] = useState(false);

  let getData = async () => {
    try {
      setLoad(true);
      let { data } = await axios.get(api);
      setTdata(data);
    } catch (error) {
      console.error(error);
      if (error.code === "ERR_NETWORK") {
        setNetErr(true);
      }
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  let postData = async (obj) => {
    try {
      let { data } = await axios.post(api, obj);
      getData();
      setAddModal(false); //for addModal
    } catch (error) {
      console.error(error);
    }
  };

  let [inpSearch, setInpSearch] = useState("");

  let statusVal = useSelector((e) => e.slices.status);
  let cityVal = useSelector((e) => e.slices.city);

  let [addModal, setAddModal] = useState(false);
  let addModalRef = useRef();

  useEffect(() => {
    document.body.style.overflow = addModal ? "hidden" : "visible";
  }, [addModal]);

  return (
    <div className="dark:bg-gradient-to-tl duration-500 dark:from-[#0a013d] dark:text-[#fff] dark:to-[#464444] min-h-screen">
      <div className="header dark:border-[#000] p-[10px_14px] dark:bg-[#130a59] dark:text-[#656060] duration-300 border-b">
        <div className="block1 flex justify-between dark:text-[#fff]">
          <div className="font-semibold text-[20px]">User list</div>
          <div className="flex gap-3">
            <button
              onClick={() => setAddModal(true)}
              className="bg-[blue] dark:bg-[#0101a8] text-[#fff] p-[5px_12px] rounded-md font-medium"
            >
              Add
            </button>
            <Switcher />
          </div>
        </div>
        <div className="block2 flex justify-between max-sm:flex-col-reverse pt-2 gap-2 ">
          <div className="flex justify-between gap-3 ">
            <SelectCom
              arr={[
                { value: "", label: "All status" },
                { value: "active", label: "Active" },
                { value: "inactive", label: "Inactive" },
              ]}
              name="status"
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
              name="cities"
            />
          </div>
          <input
            type="search"
            placeholder="Search"
            value={inpSearch}
            onChange={(e) => setInpSearch(e.target.value)}
            className="border shadow-[0_0_5px_#ccc] dark:text-[#fff] dark:placeholder:text-[#fff] p-[3px_15px] rounded-md dark:border-[#524f4f]
             max-md:w-full dark:bg-[#000] outline-none"
          />
        </div>
      </div>
      <main>
        <div className="p-[10px_20px] overflow-x-auto">
          {netErr ? (
            <div className="flex flex-col font-medium items-center">
              <div className="text-[28px]">Low internet detected!</div>
              <button
                onClick={() => {
                  getData();
                  setNetErr(false);
                }}
                className="bg-[#ddd] dark:bg-[#5151d8]  p-[5px_12px] rounded-md"
              >
                Please try again
              </button>
            </div>
          ) : (
            <table className="table border dark:border-black w-[1000px] lg:w-full">
              <thead>
                <tr>
                  {thList.map((e, i) => {
                    return (
                      <th
                        key={i}
                        className="text-[#fff] py-1 bg-[#6ca7c5] dark:bg-[#30637d] border dark:border-black"
                      >
                        {e}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {tData
                  .filter((e) => {
                    if (statusVal == "active") {
                      return e.status == "ACTIVE";
                    } else if (statusVal == "inxactive") {
                      return e.status == "INACTIVE";
                    } else {
                      return e;
                    }
                  })
                  .filter((e) => e.city.includes(cityVal))
                  .filter(
                    (e) =>
                      e.name.toLowerCase().includes(inpSearch.trim()) ||
                      e.surname.toLowerCase().includes(inpSearch.trim()) ||
                      e.email.toLowerCase().includes(inpSearch.trim()) ||
                      e.mobile_phone.toString().includes(inpSearch.trim())
                  )
                  .map((e) => {
                    return (
                      <tr key={e.id}>
                        <td className="border border-[#fff] dark:border-[gray] styleTd dark:bg-[#ccc] text">
                          <img
                            src={e.img}
                            className="w-[50px] h-[50px] rounded-[50px]"
                            alt=""
                          />
                        </td>
                        <td className="border border-[#fff] dark:border-[gray] styleTd dark:bg-[#ccc] dark:text-black text">
                          {e.email}
                        </td>
                        <td className="border border-[#fff] dark:border-[gray] styleTd dark:bg-[#ccc] dark:text-black text">
                          {e.name} {e.surname}
                        </td>
                        <td className="border border-[#fff] dark:border-[gray] styleTd dark:bg-[#ccc] dark:text-black text">
                          {e.city}
                        </td>
                        <td className="border border-[#fff] dark:border-[gray] styleTd dark:bg-[#ccc] dark:text-black text">
                          <span
                            className={`p-1 inline-block w-[84.78px] text-center font-medium text-[14px] ${
                              e.status == "ACTIVE"
                                ? "bg-blue-500"
                                : "bg-red-500"
                            }`}
                          >
                            {e.status}
                          </span>
                        </td>
                        <td className="border border-[#fff] dark:border-[gray] bg-[#ece1e1] p-[10px] dark:bg-[#ccc] dark:text-black text">
                          {e.mobile_phone}
                        </td>
                        <td className="border border-[#fff] dark:border-[gray] bg-[#ece1e1] p-[10px] dark:bg-[#ccc] dark:text-black text">
                          <div className="flex justify-center items-center">
                            <MenuCom id={e.id} getReq={getData} />
                          </div>
                        </td>
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
          )}
        </div>
        {addModal ? (
          <div
            onClick={(e) => {
              if (e.target == addModalRef.current) {
                setAddModal(false);
              }
            }}
            ref={addModalRef}
            className="absolute  top-0 left-0 w-full h-full flex justify-center items-center bg-[#27272792]"
          >
            <div className="bg-[#fff] dark:bg-[#0d063c] w-[350px] p-[20px] rounded-md">
              <div className="flex justify-end">
                <button
                  className="flex items-center"
                  onClick={() => setAddModal(false)}
                >
                  <i className="bx bx-x"></i>
                </button>
              </div>
              {/* form */}
              <div className="pt-4">
                <FormCom req={postData} />
              </div>
            </div>
          </div>
        ) : null}
      </main>
    </div>
  );
};

export default App;
