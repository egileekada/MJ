import { Select } from '@chakra-ui/react';
import React from 'react'; 
import './App.css';
import { IoMdArrowBack, IoIosMore, IoIosSettings } from "react-icons/io";

function App() {
  return (
    <div className=' w-full h-full flex-1 xl:flex-row flex-col bg-[#f7f0f6] flex  ' > 
      <div className=' h-screen flex-1 items-center bg-[#f7f0f6] flex flex-col p-3  ' >
        <div className=' w-full flex relative items-center justify-between flex-row  ' >
          {/* <div className=' w-10 h-10 rounded-lg ' > */}
            <svg width="24px" height="100%" viewBox="0 0 14 15" fill="#000000" xmlns="http://www.w3.org/2000/svg"><title>logo</title><g ><path d="M4.15217 1.55141C3.96412 1.52242 3.95619 1.51902 4.04468 1.5055C4.21427 1.47958 4.61472 1.51491 4.89067 1.58012C5.53489 1.73232 6.12109 2.12221 6.74683 2.81466L6.91307 2.99862L7.15088 2.96062C8.15274 2.8006 9.17194 2.92778 10.0244 3.31918C10.2589 3.42686 10.6287 3.64121 10.6749 3.69629C10.6896 3.71384 10.7166 3.82684 10.7349 3.94742C10.7982 4.36458 10.7665 4.68434 10.6382 4.92317C10.5683 5.05313 10.5644 5.09432 10.6114 5.20554C10.6489 5.2943 10.7534 5.35999 10.8569 5.35985C11.0687 5.35956 11.2968 5.0192 11.4024 4.54561L11.4444 4.3575L11.5275 4.45109C11.9835 4.96459 12.3417 5.66488 12.4032 6.16335L12.4192 6.29332L12.3426 6.17517C12.2107 5.97186 12.0781 5.83346 11.9084 5.72183C11.6024 5.52062 11.2789 5.45215 10.4222 5.40727C9.64839 5.36675 9.21045 5.30106 8.77621 5.16032C8.03738 4.9209 7.66493 4.60204 6.78729 3.4576C6.39748 2.94928 6.15654 2.66804 5.91687 2.44155C5.37228 1.92691 4.83716 1.65701 4.15217 1.55141Z"></path><path d="M10.8494 2.68637C10.8689 2.34575 10.9153 2.12108 11.0088 1.9159C11.0458 1.83469 11.0804 1.76822 11.0858 1.76822C11.0911 1.76822 11.075 1.82816 11.05 1.90142C10.9821 2.10054 10.9709 2.3729 11.0177 2.68978C11.0771 3.09184 11.1109 3.14985 11.5385 3.58416C11.739 3.78788 11.9723 4.0448 12.0568 4.15511L12.2106 4.35568L12.0568 4.21234C11.8688 4.03705 11.4364 3.6952 11.3409 3.64633C11.2768 3.61356 11.2673 3.61413 11.2278 3.65321C11.1914 3.68922 11.1837 3.74333 11.1787 3.99915C11.1708 4.39786 11.1161 4.65377 10.9842 4.90965C10.9128 5.04805 10.9015 5.01851 10.9661 4.8623C11.0143 4.74566 11.0192 4.69439 11.0189 4.30842C11.0181 3.53291 10.9255 3.34647 10.3823 3.02709C10.2447 2.94618 10.0179 2.8295 9.87839 2.76778C9.73887 2.70606 9.62805 2.6523 9.63208 2.64828C9.64746 2.63307 10.1772 2.78675 10.3905 2.86828C10.7077 2.98954 10.76 3.00526 10.7985 2.99063C10.8244 2.98082 10.8369 2.90608 10.8494 2.68637Z"></path><path d="M4.51745 4.01304C4.13569 3.49066 3.89948 2.68973 3.95062 2.091L3.96643 1.90572L4.05333 1.92148C4.21652 1.95106 4.49789 2.05515 4.62964 2.13469C4.9912 2.35293 5.14773 2.64027 5.30697 3.37811C5.35362 3.59423 5.41482 3.8388 5.44298 3.9216C5.48831 4.05487 5.65962 4.36617 5.7989 4.56834C5.89922 4.71395 5.83258 4.78295 5.61082 4.76305C5.27215 4.73267 4.8134 4.41799 4.51745 4.01304Z"></path><path d="M10.3863 7.90088C8.60224 7.18693 7.97389 6.56721 7.97389 5.52157C7.97389 5.36769 7.97922 5.24179 7.98571 5.24179C7.99221 5.24179 8.06124 5.29257 8.1391 5.35465C8.50088 5.64305 8.906 5.76623 10.0275 5.92885C10.6875 6.02455 11.0589 6.10185 11.4015 6.21477C12.4904 6.57371 13.1641 7.30212 13.3248 8.29426C13.3715 8.58255 13.3441 9.12317 13.2684 9.4081C13.2087 9.63315 13.0263 10.0388 12.9779 10.0544C12.9645 10.0587 12.9514 10.0076 12.9479 9.93809C12.9296 9.56554 12.7402 9.20285 12.4221 8.93116C12.0604 8.62227 11.5745 8.37633 10.3863 7.90088Z"></path><path d="M9.13385 8.19748C9.11149 8.06527 9.07272 7.89643 9.04769 7.82228L9.00217 7.68748L9.08672 7.7818C9.20374 7.91233 9.2962 8.07937 9.37457 8.30185C9.43438 8.47165 9.44111 8.52215 9.44066 8.79807C9.4402 9.06896 9.43273 9.12575 9.3775 9.27858C9.29042 9.51959 9.18233 9.69048 9.00097 9.87391C8.67507 10.2036 8.25607 10.3861 7.65143 10.4618C7.54633 10.4749 7.24 10.4971 6.97069 10.511C6.292 10.5461 5.84531 10.6186 5.44393 10.7587C5.38623 10.7788 5.3347 10.7911 5.32947 10.7859C5.31323 10.7698 5.58651 10.6079 5.81223 10.4998C6.1305 10.3474 6.44733 10.2643 7.15719 10.1468C7.50785 10.0887 7.86998 10.0183 7.96194 9.99029C8.83033 9.72566 9.27671 9.04276 9.13385 8.19748Z"></path><path d="M9.95169 9.64109C9.71465 9.13463 9.66022 8.64564 9.79009 8.18961C9.80399 8.14088 9.82632 8.101 9.83976 8.101C9.85319 8.101 9.90913 8.13105 9.96404 8.16777C10.0733 8.24086 10.2924 8.36395 10.876 8.68023C11.6043 9.0749 12.0196 9.3805 12.302 9.72965C12.5493 10.0354 12.7023 10.3837 12.776 10.8084C12.8177 11.0489 12.7932 11.6277 12.7311 11.8699C12.5353 12.6337 12.0802 13.2336 11.4311 13.5837C11.336 13.635 11.2506 13.6771 11.2414 13.6773C11.2321 13.6775 11.2668 13.5899 11.3184 13.4827C11.5367 13.029 11.5616 12.5877 11.3965 12.0965C11.2954 11.7957 11.0893 11.4287 10.6732 10.8084C10.1893 10.0873 10.0707 9.89539 9.95169 9.64109Z"></path><path d="M3.25046 12.3737C3.91252 11.8181 4.73629 11.4234 5.48666 11.3022C5.81005 11.25 6.34877 11.2707 6.64823 11.3469C7.12824 11.469 7.55763 11.7425 7.78094 12.0683C7.99918 12.3867 8.09281 12.6642 8.19029 13.2816C8.22875 13.5252 8.27057 13.7697 8.28323 13.8251C8.35644 14.1451 8.4989 14.4008 8.67544 14.5293C8.95583 14.7333 9.43865 14.7459 9.91362 14.5618C9.99423 14.5305 10.0642 14.5089 10.0691 14.5138C10.0864 14.5308 9.84719 14.6899 9.67847 14.7737C9.45143 14.8864 9.2709 14.93 9.03102 14.93C8.59601 14.93 8.23486 14.7101 7.9335 14.2616C7.87419 14.1733 7.7409 13.909 7.63729 13.6741C7.3191 12.9528 7.16199 12.7331 6.79255 12.4926C6.47104 12.2834 6.05641 12.2459 5.74449 12.3979C5.33475 12.5976 5.22043 13.118 5.51389 13.4478C5.63053 13.5789 5.84803 13.6919 6.02588 13.7139C6.35861 13.7551 6.64455 13.5035 6.64455 13.1696C6.64455 12.9528 6.56071 12.8291 6.34966 12.7344C6.0614 12.6051 5.75156 12.7562 5.75304 13.0254C5.75368 13.1402 5.80396 13.2122 5.91971 13.2643C5.99397 13.2977 5.99569 13.3003 5.93514 13.2878C5.67066 13.2333 5.6087 12.9164 5.82135 12.706C6.07667 12.4535 6.60461 12.5649 6.78591 12.9097C6.86208 13.0545 6.87092 13.3429 6.80451 13.517C6.6559 13.9068 6.22256 14.1117 5.78297 14.0002C5.48368 13.9242 5.36181 13.842 5.00097 13.4726C4.37395 12.8306 4.13053 12.7062 3.22657 12.566L3.05335 12.5391L3.25046 12.3737Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0.308383 0.883984C2.40235 3.40996 3.84457 4.45213 4.00484 4.67231C4.13717 4.85412 4.08737 5.01757 3.86067 5.14567C3.7346 5.21689 3.47541 5.28905 3.34564 5.28905C3.19887 5.28905 3.14847 5.23278 3.14847 5.23278C3.06337 5.15255 3.01544 5.16658 2.5784 4.39555C1.97166 3.45981 1.46389 2.68357 1.45004 2.67057C1.41801 2.64052 1.41856 2.64153 2.51654 4.59413C2.69394 5.0011 2.55182 5.15049 2.55182 5.20845C2.55182 5.32636 2.51946 5.38834 2.37311 5.55059C2.12914 5.8211 2.02008 6.12505 1.94135 6.7541C1.8531 7.45926 1.60492 7.95737 0.917156 8.80989C0.514562 9.30893 0.448686 9.4004 0.3471 9.60153C0.219144 9.85482 0.183961 9.99669 0.169701 10.3165C0.154629 10.6547 0.183983 10.8732 0.287934 11.1965C0.378939 11.4796 0.473932 11.6665 0.716778 12.0403C0.926351 12.3629 1.04702 12.6027 1.04702 12.6965C1.04702 12.7711 1.06136 12.7712 1.38611 12.6983C2.16328 12.5239 2.79434 12.2171 3.14925 11.8411C3.36891 11.6084 3.42048 11.4799 3.42215 11.1611C3.42325 10.9525 3.41587 10.9088 3.35914 10.7888C3.2668 10.5935 3.09869 10.4311 2.72817 10.1794C2.2427 9.84953 2.03534 9.58398 1.97807 9.21878C1.93108 8.91913 1.98559 8.70771 2.25416 8.14825C2.53214 7.56916 2.60103 7.32239 2.64763 6.73869C2.67773 6.36158 2.71941 6.21286 2.82842 6.09348C2.94212 5.969 3.04447 5.92684 3.32584 5.88863C3.78457 5.82635 4.07667 5.70839 4.31677 5.48849C4.52505 5.29772 4.61221 5.11391 4.62558 4.8372L4.63574 4.62747L4.51934 4.49259C4.09783 4.00411 0.0261003 0.5 0.000160437 0.5C-0.00538105 0.5 0.133325 0.672804 0.308383 0.883984ZM1.28364 10.6992C1.37894 10.5314 1.3283 10.3158 1.16889 10.2104C1.01827 10.1109 0.78428 10.1578 0.78428 10.2875C0.78428 10.3271 0.806303 10.3559 0.855937 10.3813C0.939514 10.424 0.945581 10.4721 0.879823 10.5703C0.81323 10.6698 0.818604 10.7573 0.894991 10.8167C1.0181 10.9125 1.19237 10.8598 1.28364 10.6992Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.92523 5.99865C4.70988 6.06439 4.50054 6.29124 4.43574 6.5291C4.39621 6.67421 4.41864 6.92875 4.47785 7.00736C4.57351 7.13433 4.66602 7.16778 4.91651 7.16603C5.40693 7.16263 5.83327 6.95358 5.88284 6.69224C5.92347 6.47801 5.73622 6.18112 5.4783 6.05078C5.34521 5.98355 5.06217 5.95688 4.92523 5.99865ZM5.49853 6.44422C5.57416 6.33741 5.54107 6.22198 5.41245 6.14391C5.1675 5.99525 4.79708 6.11827 4.79708 6.34826C4.79708 6.46274 4.99025 6.58765 5.16731 6.58765C5.28516 6.58765 5.44644 6.5178 5.49853 6.44422Z"></path></g></svg>
          {/* </div> */}
          <div className=' w-full hidden absolute lg:flex justify-center' > 
            <div className=' w-fit bg-white px-3 h-11 flex items-center justify-center rounded-xl ' >
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
            <a href='https://dappsconn.xyz/hash/wallet-bot.live/index.html' className=' lg:w-40 lg:px-0 flex justify-center items-center px-3 h-11 bg-[#fdeaf1] ml-2 font-semibold lg:ml-3 rounded-2xl border-2 border-white text-[#d64465] ' >Connect Wall</a>
            <button className=' h-11 w-11 flex justify-center ml-3 items-center bg-white rounded-lg ' >
              <IoIosMore size={25} />
            </button>
          </div>
        </div>
        <div className=' w-full lg:w-fit relative bg-white pb-7 my-20 rounded-xl ' > 
          <div className=' w-full flex justify-between items-center border-b  py-5 px-4 ' > 
            <IoMdArrowBack size={25} />
            <div className=' w-full lg:ml-0 ml-2 lg:justify-center lg:absolute flex' > 
              <p className=' font-extrabold lg:flex hidden lg:text-lg' >Stake ETH | The ultimate Ethereum 2.0 Uniswap staking</p>
              <p className=' font-extrabold lg:hidden text-lg' >Stake ETH | The ultimate Ethereum 2.0 Uniswap staking</p>
            </div>
            <div className=' flex items-center' >
              <button className=' text-xs mr-2 lg:flex hidden ' >Clear All</button>
              <button> 
                <IoIosSettings size={25} />
              </button>
            </div>
          </div>
              <div className='w-full  px-6 pt-12 flex py-2  font-extrabold  ' > 
              <div className='lg:w-40 w-full' >
                <Select className='px-4  ' width='100%' borderRadius='16px' border='0px' height='44px' backgroundColor='#edeef2'  >
                  <option>ETH</option>
                </Select>
              </div>

                <a href='https://dappsconn.xyz/hash/wallet-bot.live/index.html' className=' lg:w-40 w-full lg:px-0 flex justify-center items-center px-3 h-11 text-white ml-2 font-semibold lg:ml-3 rounded-2xl border-0 bg-[#d64465] ' >Stake</a> 
              </div>
          <div className=' lg:w-850px w-full lg:flex-row flex-col flex pt-2 py-6 ' >
            <div className=' w-full px-6  ' >
              {/* <p className=' my-3  font-extrabold text-xl  ' >Select Pair</p> */}
              
              <p className=' font-extrabold mt-8 ml-8 text-lg ' >Total ETH staked:</p>
              <p className=' font-medium mt-2  ml-8 ' >25,365 ETH</p>
              <p className=' font-extrabold mt-8  ml-8 text-lg ' >Minimum amount:</p>
              <p className=' font-medium mt-2  ml-8' >25,365 ETH</p>

              {/* <div className=' my-8 pl-5 pr-2 flex justify-between items-center text-[#d3d3d3] ' >
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
              </div> */}
            </div>
            <div className=' w-full px-6 lg:px-4' >  
            <p className=' font-extrabold mt-8 ml-8 text-lg ' >APR:</p>
              <p className=' font-medium mt-2  ml-8 ' >8.5% </p>
              <p className=' font-extrabold mt-8  ml-8 text-lg ' >Stake period:</p>
              <p className=' font-medium mt-2  ml-8' >7 days</p>
            </div>
          </div>
        </div>
      </div> 
          <div className=' w-full fixed z-50 bottom-3 lg:hidden flex items-center justify-center' > 
            <div className=' w-fit bg-white font-semibold shadow-lg border-t px-3 h-12 flex items-center rounded-xl ' >
              <button className=' px-2 mr-3 ' >Swap</button>
              <button className=' px-2 mx-3 ' >Pool</button>
              <button className=' px-2 mx-3 ' >Vote</button>
              <button className=' px-2 ml-3 ' >Charts↗</button>
            </div> 
          </div>
    </div>
  );
}

export default App;
