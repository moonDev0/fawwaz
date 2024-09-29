"use client";
import React, { useEffect, useState } from "react";
import NavbarAlt from "../navbarAlt";
import Table from "../uicomponents/Table";

const StudentsComponent = () => {
  const [loading, setLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [rowData, setRowData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle deleting a user
  const handleDelete = (user) => {
    console.log("Deleting user:", user);
    // Add actual delete logic here, such as updating state or making an API call
  };

  // Function to handle editing a user
  const handleEdit = (user) => {
    console.log("Editing user:", user);
    setRowData(user);
    setModalIsOpen(true); // Example: Open a modal for editing
  };

  // Function to handle viewing a user
  const handleView = (user) => {
    console.log("Viewing user:", user);
    setRowData(user);
    setModalIsOpen(true); // Example: Open a modal for viewing
  };

  

  return (
    <div className="pl-[300px] pt-10 mr-20">
      <NavbarAlt title="Students" />

      <div className="relative">
        <input
          className="w-[343px] h-[45px] rounded-[8px] text-black pl-[36px] pr-4 font-KumbhSan text-[12px] relative outline-none"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="mt-10">
        <Table
          header={[
            { name: "first Name", identifier: "firstName" },
            { name: "Last Name", identifier: "lastName" },
            { name: "Level", identifier: "level" },
            { name: "Matric No", identifier: "matricNo" },
          ]}
          data={data}
          searchQuery={searchQuery} // Filter the table based on the search
          options={{
            variant: "primary",
            tableStyle: "",
            allowSorting: false,
            allowActions: true, // Enabling actions
            actions: {
              edit: true,
              view: true,
              delete: true,
            },
          }}
          setRowData={setRowData}
          setOpenModal={setModalIsOpen}
          loading={loading}
        />
      </div>

      {modalIsOpen && (
        <div>
          {/* You can use a modal component here to display rowData */}
          <p>{`Modal Open for ${rowData?.fullName}`}</p>
          <button onClick={() => setModalIsOpen(false)}>Close Modal</button>
        </div>
      )}
    </div>
  );
};

export default StudentsComponent;


const data = [
            {
            firstName:"fawwaz",
            lastName:"muhammad",
            level:"300",
            matricNo:"12345" 
            },
             {
            firstName:"fawwaz",
            lastName:"muhammad",
            level:"300",
            matricNo:"12345" 
            },
             {
            firstName:"fawwaz",
            lastName:"muhammad",
            level:"300",
            matricNo:"12345" 
            },
             {
            firstName:"fawwaz",
            lastName:"muhammad",
            level:"300",
            matricNo:"12345" 
            },
             {
            firstName:"fawwaz",
            lastName:"muhammad",
            level:"300",
            matricNo:"12345" 
            }
]