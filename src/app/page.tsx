"use client";

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={`relative w-[1440px] h-[1931px] bg-white ${inter.className}`}>
      {/* WhereHack Title */}
      <div className="absolute w-[138px] h-[29px] left-[128px] top-[64px]">
        <h1 className="font-bold text-[24px] leading-[29px] text-black">
          WhereHack
        </h1>
      </div>

      {/* Header Controls */}
      <div className="absolute flex flex-row items-start gap-[10px] w-[249px] h-[44px] left-[128px] top-[141px]">
        {/* Date Selector */}
        <div className="flex flex-col items-center w-[44px] h-[44px] border border-[#E5E5E5] rounded-[4px]">
          <div className="flex flex-row justify-center items-center w-[44px] h-[22px] bg-black">
            <span className="font-bold text-[14px] leading-[17px] text-white">SEP</span>
          </div>
          <div className="flex flex-row justify-center items-center w-[44px] h-[22px]">
            <span className="font-bold text-[14px] leading-[17px] text-black">12</span>
          </div>
        </div>

        {/* Month and Event Count */}
        <div className="flex flex-row items-center gap-[10px] w-[195px] h-[17px]">
          <span className="font-bold text-[14px] leading-[17px] text-black">September 2025</span>
          <div className="flex flex-row justify-center items-center px-[6px] py-[3px] border-[0.5px] border-[#E5E5E5] rounded-[2px]">
            <span className="font-medium text-[8px] leading-[10px] text-[#555555]">25 hackathons</span>
          </div>
        </div>
      </div>

      {/* Calendar Container */}
      <div className="absolute w-[1240px] h-[680px] left-[100px] top-[166px]">
        {/* Calendar Grid */}
        <div className="absolute flex flex-col items-start w-[1240px] h-[637px] left-0 top-[43px] border border-[#E5E5E5]">
          
          {/* Week Header */}
          <div className="flex flex-row items-start w-[1240px] h-[32px]">
            {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day, index) => (
              <div key={day} className="flex flex-col justify-center items-center flex-1 h-[32px] relative">
                <span className="font-normal text-[12px] leading-[15px] text-black">{day}</span>
                {index < 6 && (
                  <div className="absolute right-0 w-[1px] h-[32px] bg-[#E5E5E5]"></div>
                )}
              </div>
            ))}
          </div>

          {/* Separator */}
          <div className="w-[1240px] h-[1px] bg-[#E5E5E5]"></div>

          {/* Week 1 */}
          <div className="flex flex-row items-start w-[1240px] h-[120px]">
            {[
              { day: '31', color: '#D2D2D2' },
              { day: '1', color: '#000000' },
              { day: '2', color: '#000000' },
              { day: '3', color: '#000000' },
              { day: '4', color: '#000000' },
              { day: '5', color: '#000000' },
              { day: '6', color: '#000000' }
            ].map((item, index) => (
              <div key={`week1-${index}`} className="flex flex-col items-start p-[8px] gap-[10px] flex-1 h-[120px] relative">
                <span className="font-normal text-[12px] leading-[15px]" style={{ color: item.color }}>
                  {item.day}
                </span>
                {index < 6 && (
                  <div className="absolute right-0 w-[1px] h-[120px] bg-[#E5E5E5]"></div>
                )}
              </div>
            ))}
          </div>

          {/* Separator */}
          <div className="w-[1240px] h-[1px] bg-[#E5E5E5]"></div>

          {/* Week 2 */}
          <div className="flex flex-row items-start w-[1240px] h-[120px]">
            {['7', '8', '9', '10', '11', '12', '13'].map((day, index) => (
              <div key={`week2-${index}`} className="flex flex-col items-start p-[8px] gap-[10px] flex-1 h-[120px] relative">
                <span className="font-normal text-[12px] leading-[15px] text-black">{day}</span>
                {index < 6 && (
                  <div className="absolute right-0 w-[1px] h-[120px] bg-[#E5E5E5]"></div>
                )}
              </div>
            ))}
          </div>

          {/* Separator */}
          <div className="w-[1240px] h-[1px] bg-[#E5E5E5]"></div>

          {/* Week 3 */}
          <div className="flex flex-row items-start w-[1240px] h-[120px]">
            {['14', '15', '16', '17', '18', '19', '20'].map((day, index) => (
              <div key={`week3-${index}`} className="flex flex-col items-start p-[8px] gap-[10px] flex-1 h-[120px] relative">
                <span className="font-normal text-[12px] leading-[15px] text-black">{day}</span>
                {index < 6 && (
                  <div className="absolute right-0 w-[1px] h-[120px] bg-[#E5E5E5]"></div>
                )}
              </div>
            ))}
          </div>

          {/* Separator */}
          <div className="w-[1240px] h-[1px] bg-[#E5E5E5]"></div>

          {/* Week 4 */}
          <div className="flex flex-row items-start w-[1240px] h-[120px]">
            {['21', '22', '23', '24', '25', '26', '27'].map((day, index) => (
              <div key={`week4-${index}`} className="flex flex-col items-start gap-[10px] flex-1 h-[120px] relative" style={{ padding: index === 1 ? '4.5px' : '8px' }}>
                {index === 1 ? (
                  // Special styling for day 22
                  <div className="flex flex-col justify-center items-center w-[22px] h-[22px] bg-[#FF6464] rounded-[11px]">
                    <span className="font-normal text-[12px] leading-[15px] text-white">22</span>
                  </div>
                ) : (
                  <span className="font-normal text-[12px] leading-[15px] text-black">{day}</span>
                )}
                {index < 6 && (
                  <div className="absolute right-0 w-[1px] h-[120px] bg-[#E5E5E5]"></div>
                )}
              </div>
            ))}
          </div>

          {/* Separator */}
          <div className="w-[1240px] h-[1px] bg-[#E5E5E5]"></div>

          {/* Week 5 */}
          <div className="flex flex-row items-start w-[1240px] h-[120px]">
            {[
              { day: '28', color: '#000000' },
              { day: '29', color: '#000000' },
              { day: '30', color: '#000000' },
              { day: '1', color: '#D2D2D2' },
              { day: '2', color: '#D2D2D2' },
              { day: '3', color: '#D2D2D2' },
              { day: '4', color: '#D2D2D2' }
            ].map((item, index) => (
              <div key={`week5-${index}`} className="flex flex-col items-start p-[8px] gap-[10px] flex-1 h-[120px] relative">
                <span className="font-normal text-[12px] leading-[15px]" style={{ color: item.color }}>
                  {item.day}
                </span>
                {index < 6 && (
                  <div className="absolute right-0 w-[1px] h-[120px] bg-[#E5E5E5]"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Events Overlay */}
        <div className="absolute w-[1240px] h-[637px] left-0 top-[43px]">
          {/* AdventureX 2025 Event */}
          <div className="absolute flex flex-row items-center gap-[4px] w-[347px] h-[20px] left-[181px] top-[429px] bg-[#CFE9FF] rounded-[4px]">
            <div className="w-[24px] h-[24px] bg-[#349DF4] rounded-[4px]"></div>
            <span className="font-normal text-[10px] leading-[12px] text-[#085798]">AdventureX 2025</span>
          </div>

          {/* Rebuild-Z Event */}
          <div className="absolute flex flex-row items-center gap-[4px] w-[347px] h-[20px] left-[363px] top-[455px] bg-[#CFE9FF] rounded-[4px]">
            <div className="w-[24px] h-[24px] bg-[#349DF4] rounded-[4px]"></div>
            <span className="font-normal text-[10px] leading-[12px] text-[#085798]">Rebuild-Z</span>
          </div>
        </div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute w-[100px] h-0 left-0 top-[209px] border border-[#E5E5E5]"></div>
      <div className="absolute w-[100px] h-0 left-0 top-[846px] border border-[#E5E5E5]"></div>
      <div className="absolute w-[100px] h-0 left-[1340px] top-[846px] border border-[#E5E5E5]"></div>
      <div className="absolute w-[100px] h-0 left-[1340px] top-[209px] border border-[#E5E5E5]"></div>
      <div className="absolute w-[1440px] h-0 left-0 top-[117px] border border-[#E5E5E5]"></div>
      <div className="absolute w-[1440px] h-0 left-0 top-[1803px] border border-[#E5E5E5]"></div>
      
      {/* Vertical Lines */}
      <div className="absolute w-[209px] h-0 left-[100px] top-0 border border-[#E5E5E5] origin-top-left rotate-[-90deg]"></div>
      <div className="absolute w-[1085px] h-0 left-[100px] top-[846px] border border-[#E5E5E5] origin-top-left rotate-[-90deg]"></div>
      <div className="absolute w-[1085px] h-0 left-[1340px] top-[846px] border border-[#E5E5E5] origin-top-left rotate-[-90deg]"></div>
      <div className="absolute w-[209px] h-0 left-[1340px] top-0 border border-[#E5E5E5] origin-top-left rotate-[-90deg]"></div>
    </div>
  );
}
