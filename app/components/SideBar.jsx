"use client";
import { useState } from "react";

export default function SideBar(){

    const [isOpen,setIsOpen] = useState(false);
    return(
        <div>


            <button
            onClick={()=> setIsOpen(!isOpen)}
            className= {`fixed top-3 left-3 z-50 bg-gray-800 text-white p-2 rounded transition-all duration-300
            ${isOpen ? "left-48": "left-4"}`}>
                ☰
            </button>

            {
                isOpen && (
                    <div className="fixed inset-0 bg-black/40"
                    onClick={() => setIsOpen(false)}>

                    </div>
                )
            }
            <div
            className={`fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white flex flex-col p-4 transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            >
            
            <h1 className="color-orange-200 text-2xl font-bold mb-8">PrepLoop</h1>


            <nav className='flex flex-col gap-4'>
                <a href="/dashboard" className="hover:bg-orange-500 duration-200 ease-in p-4 rounded">DashBoard</a>
                <a href="/test" className="hover:bg-orange-500 duration-200 ease-in p-4 rounded">Start Plan</a>
                <a href="/progress" className="hover:bg-orange-500 duration-200 ease-in p-4 rounded">Progress</a>
            </nav>
            </div>
        </div>
    );
}