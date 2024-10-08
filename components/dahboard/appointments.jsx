"use client";
import React, { useEffect, useState } from "react";
import NavbarAlt from "../navbarAlt";
import Table from "../uicomponents/Table";
import { FaPlus } from 'react-icons/fa';
import ModalContainerAlt from "../uicomponents/modalContainerAlt";
import AddStaff from "../uicomponents/AddStaff";

const AppointmentsComponent = () => {
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState({ modalName: "", showModal: false });
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

  const  closeModal = ()=>{
    setOpenModal({
      modalName: "", 
      showModal: false
    })
  }
  console.log(data)

  return (
    <div className="pl-[300px] pt-10 mr-20">
      <NavbarAlt title="Appointments" />

      

      <div className="relative flex justify-between w-full">
        <input
          className="w-[343px] h-[45px] rounded-[8px] text-black pl-[36px] pr-4 font-KumbhSan text-[12px] relative outline-none"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div className=' font-KumbhSan gap-6 w-full '>
          <button   onClick={() => setOpenModal({ modalName: "add", showModal: true })}  className='flex w-full mt-5 md:mt-0 md:w-[210px]  text-white items-center gap-2 bg-secondary rounded-xl px-5 py-3 text-[14px]'>
            Book Appointment <i className='text-[10px]'><FaPlus /></i>
          </button>

         
        </div>
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
          setOpenModal={setOpenModal}
          loading={loading}
        />
      </div>

      {openModal.modalName === "add" && openModal?.showModal && (
                <ModalContainerAlt>
                  <AddStaff mode="add" rowData={rowData}  closeModal={closeModal}/>
                </ModalContainerAlt>
            )}


    </div>
  );
};

export default AppointmentsComponent;

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