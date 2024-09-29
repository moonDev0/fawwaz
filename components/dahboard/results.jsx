"use client";
import React, { useState } from "react";
import NavbarAlt from "../navbarAlt";
import Table from "../uicomponents/Table";
import { FaPlus } from 'react-icons/fa';
import AddPerformance from "../uicomponents/AddPerformance"; // New AddPerformance component
import ModalContainerAlt from "../uicomponents/modalContainerAlt";

const ResultsComponent = () => {
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState({ modalName: "", showModal: false });
  const [searchQuery, setSearchQuery] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [rowData, setRowData] = useState(null);

  const closeModal = () => {
    setOpenModal({ modalName: "", showModal: false });
  };

  return (
    <div className="pl-[300px] pt-10 mr-20">
      <NavbarAlt title="Student Performance" />

      <div className="relative flex justify-between w-full">
        <input
          className="w-[343px] h-[45px] rounded-[8px] text-black pl-[36px] pr-4 font-KumbhSan text-[12px] relative outline-none"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div className="font-KumbhSan gap-6 w-full">
          
        </div>
      </div>

      <div className="mt-10">
        <Table
          header={[
            { name: "matric", identifier: "matric" },
            { name: "Score", identifier: "score" },
            { name: "Grade", identifier: "grade" },
            { name: "Remarks", identifier: "remarks" },
          ]}
          data={data}
          searchQuery={searchQuery}
          options={{
            variant: "primary",
            tableStyle: "",
            allowSorting: false,
            allowActions: true,
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

      {openModal.modalName === "view" && openModal.showModal && (
        <ModalContainerAlt>
          <AddPerformance closeModal={closeModal} />
        </ModalContainerAlt>
      )}
    </div>
  );
};

export default ResultsComponent;

const data = [
  {
    matric:"1234",
    subject: "Mathematics",
    score: "85",
    grade: "A",
    remarks: "Excellent performance",
  },
  {
    matric:"1234",
    subject: "English",
    score: "78",
    grade: "B",
    remarks: "Good effort",
  },
  {
    matric:"1234",
    subject: "Science",
    score: "92",
    grade: "A",
    remarks: "Outstanding",
  },
  // Add more data here...
];
