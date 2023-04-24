import React from "react";
import {AiOutlineSetting, AiOutlineSearch} from "react-icons/ai";
import {FiMessageSquare} from "react-icons/fi";
import {MdNotificationsNone} from "react-icons/md";
const Header = () => {
  return (
    <div className='bg-white shadow-sm' style={{height: "60px"}}>
      <div className='flex justify-between'>
        <div className='flex gap-2 px-2'>
          <AiOutlineSearch size={20} className='mt-3' color='gray' />
          <input
            type='text'
            placeholder='Type to search'
            style={{outline: "none"}}
          />
        </div>
        <div className='flex gap-2 mt-1'>
          <div className='flex icons gap-2 mt-2'>
            <AiOutlineSetting size={20} color='gray' />
            <FiMessageSquare size={20} color='gray' />
            <MdNotificationsNone size={20} color='gray' />
          </div>
          <div className='flex gap-2'>
            <div className='text-center'>
              <p className='font-semibold'>Thomas Brown</p>
              <p className='text-gray-500'>Developer</p>
            </div>
            <div className='mt-2'>
              <img
                className='rounded-xl'
                src='https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png'
                height='20px'
                width='30px'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
