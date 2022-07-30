import { Select } from '@chakra-ui/react';
import React from 'react'; 
import './App.css';
import { IoMdArrowBack, IoIosMore, IoIosSettings } from "react-icons/io";

function App() {
  return (
    <div className=' w-full h-full flex-1 xl:flex-row flex-col bg-[#f7f0f6] flex  ' > 
      <div className=' h-screen flex-1 items-center bg-[#f7f0f6] flex flex-col p-3  ' >
        <div className=' w-full flex relative justify-between flex-row  ' >
          <div className=' w-10 h-10 bg-pink-400 rounded-lg ' >

          </div>
          <div className=' w-full hidden absolute lg:flex justify-center' > 
            <div className=' w-fit bg-white px-3 h-11 flex items-center justify-center rounded-xl ' >
              <button className=' px-2 mr-3 ' >Swap</button>
              <button className=' px-2 mx-3 ' >Pool</button>
              <button className=' px-2 mx-3 ' >Vote</button>
              <button className=' px-2 ml-3 ' >Charts↗</button>
            </div> 
          </div>
          <div className=' w-full fixed z-50 bottom-3 lg:hidden justify-center' > 
            <div className=' w-fit bg-white font-semibold shadow-lg border-t px-3 h-12 flex items-center rounded-xl ' >
              <button className=' px-2 mr-3 ' >Swap</button>
              <button className=' px-2 mx-3 ' >Pool</button>
              <button className=' px-2 mx-3 ' >Vote</button>
              <button className=' px-2 ml-3 ' >Charts↗</button>
            </div> 
          </div>
          <div className=' w-auto h-auto flex rounded-lg ' >
            <div className='lg:w-160px lg:flex hidden ' > 
              <Select className='px-4 w-full h-11' borderRadius="16px" height='44px' backgroundColor='#fff'  >
                <option>Ethereum</option>
              </Select>
            </div>
            <div className='lg:w-160px lg:hidden ' > 
              <Select className='px-4 w-full h-11' borderRadius="16px" border='0px' height='44px' backgroundColor='#f7f0f6'  >
                <option>Eth</option>
              </Select>
            </div>
            <button className=' lg:w-40 lg:px-0 px-3 h-11 bg-[#fdeaf1] ml-2 font-semibold lg:ml-3 rounded-2xl border-2 border-white text-[#d64465] ' >Connect Wall</button>
            <button className=' h-11 w-11 flex justify-center ml-3 items-center bg-white rounded-lg ' >
              <IoIosMore size={25} />
            </button>
          </div>
        </div>
        <div className=' w-fit relative bg-white pb-7 my-20 rounded-xl ' > 
          <div className=' w-full flex justify-between items-center border-b  py-5 px-4 ' > 
            <IoMdArrowBack size={25} />
            <div className=' w-full lg:ml-0 ml-2 lg:justify-center lg:absolute flex' > 
              <p className=' font-extrabold text-xl' >Add Liquidity</p>
            </div>
            <div className=' flex items-center' >
              <button className=' text-xs mr-2 lg:flex hidden ' >Clear All</button>
              <button> 
                <IoIosSettings size={25} />
              </button>
            </div>
          </div>
          <div className=' lg:w-850px w-full lg:flex-row flex-col flex py-4 ' >
            <div className=' w-full px-6 ' >
              <p className=' my-3  font-extrabold text-xl  ' >Select Pair</p>
              <div className='w-full flex py-2  font-extrabold  ' > 
                <Select className='px-4  ' width='100%' borderRadius='16px' border='0px' height='44px' backgroundColor='#edeef2'  >
                  <option>ETH</option>
                </Select>
                <Select className='px-4 ml-2 lg:ml-3 ' width='100%' borderRadius='16px' border='0px' height='44px' color='white' backgroundColor='#e94b6f'  >
                  <option>Select a token</option>
                </Select>
              </div>
              <div className=' my-8 pl-5 pr-2 flex justify-between items-center text-[#d3d3d3] ' >
                <div>
                  <p className=' font-extrabold text-lg ' >Fee tier</p>
                  <p className=' text-xs ' >The % you will earn in fees.</p>
                </div>
                  <p className=' font-extrabold  ' >Edit</p>
              </div>
              <p className=' my-3  font-extrabold text-lg text-[#d3d3d3]  ' >Deposit Amounts</p>
              <div className=' my-8 pl-5 pr-2 flex justify-between items-center text-[#d3d3d3] ' >
                <div>
                  <p className=' font-extrabold text-3xl ' >0.0</p> 
                </div>
                  <p className=' font-extrabold' >ETH</p>
              </div>
              <div className=' my-8 pl-5 pr-2 px-2 flex items-center text-[#d3d3d3] ' >
                <div>
                  <p className=' font-extrabold text-3xl ' >0.0</p> 
                </div>
                <button className=' bg-[#facce2] py-2 px-3 rounded-2xl text-white ml-auto ' >Select a token</button>
              </div>
            </div>
            <div className=' w-full px-4 text-[#d3d3d3]' >
              <p className=' my-3 font-extrabold text-xl  ' >Set Price Range</p>
              <div className='w-full py-5 flex justify-center flex-col items-center' >
                <div className=' w-16 h-16 bg-yellow-200 ' >

                </div>
                <p className=' font-medium text-xl mt-6 ' >Your position will appear here.</p>
              </div>
              <div className=' py-5 w-full flex ' >
                <div className=' w-full px-2 ' > 
                  <div className=' border rounded-2xl w-full p-3 px-5 flex items-center justify-center  ' >
                    <button className=' text-4xl'>-</button>
                    <div className=' w-auto mx-auto ' >
                      <p className=' text-xs text-center ' >Min Price</p>
                      <p className=' my-4 text-center text-xl  ' >0.0</p>
                      <p className=' text-xs text-center  ' >per ETH</p>
                    </div>
                    <button className=' text-4xl ' >+</button>
                  </div>
                </div>
                <div className=' w-full px-2 ' > 
                  <div className=' border rounded-2xl w-full p-3 px-5 flex items-center justify-center  ' >
                    <button className=' text-4xl'>-</button>
                    <div className=' w-auto mx-auto ' >
                      <p className=' text-xs text-center ' >Max Price</p>
                      <p className=' my-4 text-center text-xl  ' >0.0</p>
                      <p className=' text-xs text-center  ' >per ETH</p>
                    </div>
                    <button className=' text-4xl ' >+</button>
                  </div>
                </div>
              </div>
              <button className=' w-full h-11 rounded-2xl bg-[#fdeaf1] text-[#d64466] mt-6 font-bold ' >Connect Wallet</button>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default App;
