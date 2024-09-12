import React from 'react';
import team from '../../assets/team.jpg'


const ManagementTeam = () => {
  return (
    <>
  
    <div className=" mx-auto px-20 py-16 bg-black">
      <h2 className="text-3xl font-bold text-center mb-8">MANAGEMENT TEAM</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-20 gap-x-6">
        <div className="rounded-lg shadow-md bg-white p-4 text-center">
          <div className="flex items-center -mt-16 justify-center mb-4">
            <img
              src={team}
              alt="Syeda Koli Akter"
              className="w-24 h-24 rounded-full"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">Syeda Koli Akter</h3>
          <p className="text-red-500 font-bold">Chairman</p>
        </div>
        <div className="rounded-lg shadow-md bg-white p-4 text-center">
          <div className="flex items-center -mt-16 justify-center mb-4">
            <img
              src={team}
              alt="Engr. Masud Rashid"
              className="w-24 h-24 rounded-full"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">Engr. Masud Rashid</h3>
          <p className="text-red-500 font-bold">Managing Director</p>
        </div>
        <div className="rounded-lg shadow-md bg-white p-4 text-center">
          <div className="flex items-center -mt-16 justify-center mb-4">
            <img
              src={team}
              alt="Ar. Nasrin Nahar"
              className="w-24 h-24 rounded-full"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">Ar. Nasrin Nahar</h3>
          <p className="text-red-500 font-bold">Director Technical</p>
        </div>
        <div className="rounded-lg shadow-md bg-white p-4 text-center">
          <div className="flex items-center -mt-16 justify-center mb-4">
            <img
              src={team}
              alt="Sanjana Rashid"
              className="w-24 h-24 rounded-full"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">Sanjana Rashid</h3>
          <p className="text-red-500 font-bold">Director Marketing</p>
        </div>
        <div className="rounded-lg shadow-md bg-white p-4 text-center">
          <div className="flex items-center -mt-16 justify-center mb-4">
            <img
             src={team}
              alt="N. Nahar Juli"
              className="w-24 h-24 rounded-full"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">N. Nahar Juli</h3>
          <p className="text-red-500 font-bold">Director (Accounts & Finance)</p>
        </div>
        <div className="rounded-lg shadow-md bg-white p-4 text-center">
          <div className="flex items-center -mt-16 justify-center mb-4">
            <img
              src={team}
              alt="Nazmun Akter"
              className="w-24 h-24 rounded-full"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">Nazmun Akter</h3>
          <p className="text-red-500 font-bold">Director(HR & Admin)</p>
        </div>
        <div className="rounded-lg shadow-md bg-white p-4 text-center">
          <div className="flex items-center -mt-16 justify-center mb-4">
            <img
              src={team}
              alt="Engr. Tanoy Deb"
              className="w-24 h-24 rounded-full"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">Engr. Tanoy Deb</h3>
          <p className="text-red-500 font-bold">Head of Project Management</p>
        </div>
        <div className="rounded-lg shadow-md bg-white p-4 text-center">
          <div className="flex items-center -mt-16 justify-center mb-4">
            <img
              src={team}
              alt="Engr. Shanto Chandra Paul"
              className="w-24 h-24 rounded-full"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">Engr. Shanto Chandra Paul</h3>
          <p className="text-red-500 font-bold">Head of MEP Services</p>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default ManagementTeam;
