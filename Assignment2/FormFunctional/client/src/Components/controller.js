import React, { useState } from "react";
import "./componentsCSS/comp.css";
import FormData from "./formData";
import ShowData from "./showData";

function MainComponent() {
  const [value, setValue] = useState({
    data: [{ name: "", address: "", contact: "", college: "" }],
    view: "form",
    dataIndex: -1,
  });
  function handleData(inputData) {
    console.log(" We Handled Person", inputData);
    let tempValue = { ...value };
    tempValue.dataIndex >= 0
      ? (tempValue.data[tempValue.dataIndex] = inputData)
      : tempValue.data.push(inputData);
    tempValue.view = "data";
    tempValue.dataIndex = -1;
    setValue(tempValue);
  }
  function showForm() {
    let tempValue = { ...value };
    tempValue.view = "form";
    setValue(tempValue);
  }
  function handleUpdate(index) {
    let tempValue = { ...value };
    tempValue.view = "form";
    tempValue.dataIndex = index;
    setValue(tempValue);
  }
  let entryData = { name: "", address: "", contact: "", college: "" };
  let { data, view, dataIndex } = { ...value };
  return view === "data" ? (
    <ShowData onSubmit={handleUpdate} onClick={showForm} data={data} />
  ) : (
    <>
      <FormData
        entryData={dataIndex >= 0 ? data[dataIndex] : entryData}
        onSubmit={handleData}
        edit={dataIndex >= 0}
      />
    </>
  );
}

export default MainComponent;
