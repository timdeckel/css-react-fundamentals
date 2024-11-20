'use client'

import { useEffect, useState } from 'react';
import ToDoList from '../components/toDoList/page';
import Footer from '../components/MuiFooter' 

const localstorage = () => {
  return (
    <main className="h-full grow w-screen flex flex-col items-center justify-between bg-gray-100 p-5">
        <div className="flex flex-col w-9/12 min-h-[70%] bg-gray-500 p-8 rounded">
          <ToDoList></ToDoList>
        </div>
        <Footer></Footer>
    </main>
  );
}

export default localstorage;