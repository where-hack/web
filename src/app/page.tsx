"use client";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex justify-center">
      <div
        className={`relative w-full h-screen bg-white ${inter.className}`}
      >
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
              <span className="font-bold text-[14px] leading-[17px] text-white">
                SEP
              </span>
            </div>
            <div className="flex flex-row justify-center items-center w-[44px] h-[22px]">
              <span className="font-bold text-[14px] leading-[17px] text-black">
                12
              </span>
            </div>
          </div>

          {/* Month and Event Count */}
          <div className="flex flex-row items-center gap-[10px] w-[195px] h-[17px]">
            <span className="font-bold text-[14px] leading-[17px] text-black">
              September 2025
            </span>
            <div className="flex flex-row justify-center items-center px-[6px] py-[3px] border-[0.5px] border-[#E5E5E5] rounded-[2px]">
              <span className="font-medium text-[8px] leading-[10px] text-[#555555]">
                25 hackathons
              </span>
            </div>
          </div>
        </div>

        {/* Calendar Container */}
        <div className="absolute w-[1240px] h-[680px] left-1/2 -translate-x-[620px] top-[166px]">
          {/* Calendar Table - 完全连贯的网格 */}
          <div className="absolute w-[1240px] h-[637px] left-0 top-[43px] border border-[#E5E5E5]">
            <table className="w-full h-full border-collapse">
              {/* Header Row */}
              <thead>
                <tr className="h-[32px]">
                  {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map(
                    (day, index) => (
                      <th
                        key={day}
                        className="border-r border-b border-[#E5E5E5] text-center font-normal text-[12px] leading-[15px] text-black"
                        style={{
                          borderRight: index === 6 ? "none" : undefined,
                        }}
                      >
                        {day}
                      </th>
                    ),
                  )}
                </tr>
              </thead>

              <tbody>
                {/* Week 1 */}
                <tr className="h-[120px]">
                  {[
                    { day: "31", color: "#D2D2D2" },
                    { day: "1", color: "#000000" },
                    { day: "2", color: "#000000" },
                    { day: "3", color: "#000000" },
                    { day: "4", color: "#000000" },
                    { day: "5", color: "#000000" },
                    { day: "6", color: "#000000" },
                  ].map((item, index) => (
                    <td
                      key={index}
                      className="border-r border-b border-[#E5E5E5] p-[8px] align-top relative"
                      style={{ borderRight: index === 6 ? "none" : undefined }}
                    >
                      <span
                        className="font-normal text-[12px] leading-[15px]"
                        style={{ color: item.color }}
                      >
                        {item.day}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Week 2 */}
                <tr className="h-[120px]">
                  {["7", "8", "9", "10", "11", "12", "13"].map((day, index) => (
                    <td
                      key={index}
                      className="border-r border-b border-[#E5E5E5] p-[8px] align-top relative"
                      style={{ borderRight: index === 6 ? "none" : undefined }}
                    >
                      <span className="font-normal text-[12px] leading-[15px] text-black">
                        {day}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Week 3 */}
                <tr className="h-[120px]">
                  {["14", "15", "16", "17", "18", "19", "20"].map(
                    (day, index) => (
                      <td
                        key={index}
                        className="border-r border-b border-[#E5E5E5] p-[8px] align-top relative"
                        style={{
                          borderRight: index === 6 ? "none" : undefined,
                        }}
                      >
                        <span className="font-normal text-[12px] leading-[15px] text-black">
                          {day}
                        </span>
                      </td>
                    ),
                  )}
                </tr>

                {/* Week 4 - 有events的那排 */}
                <tr className="h-[120px]">
                  {["21", "22", "23", "24", "25", "26", "27"].map(
                    (day, index) => (
                      <td
                        key={index}
                        className="border-r border-b border-[#E5E5E5] align-top relative"
                        style={{
                          borderRight: index === 6 ? "none" : undefined,
                          padding: index === 1 || index === 2 ? "0.5px" : "8px",
                        }}
                      >
                        {index === 1 ? (
                          // Special styling for day 22
                          <div className="flex flex-col justify-center items-center w-[22px] h-[22px] bg-[#FF6464] rounded-[11px]">
                            <span className="font-normal text-[12px] leading-[15px] text-white">
                              22
                            </span>
                          </div>
                        ) : (
                          <span className="font-normal text-[12px] leading-[15px] text-black">
                            {day}
                          </span>
                        )}

                        {/* AdventureX 2025 Event - 从22号开始跨越2个单元格 */}
                        {index === 1 && (
                          <div
                            className="absolute flex flex-row items-center gap-[4px] h-[20px] top-[30px] bg-[#CFE9FF] rounded-[4px] z-10"
                            style={{ width: "calc(200% + 1px)" }}
                          >
                            <div className="w-[24px] h-[24px] bg-[#349DF4] rounded-[4px]"></div>
                            <span className="font-normal text-[10px] leading-[12px] text-[#085798]">
                              AdventureX 2025
                            </span>
                          </div>
                        )}

                        {/* Rebuild-Z Event - 从23号开始跨越2个单元格 */}
                        {index === 2 && (
                          <div
                            className="absolute flex flex-row items-center gap-[4px] h-[20px] top-[65px] bg-[#CFE9FF] rounded-[4px] z-10"
                            style={{ width: "calc(200% + 1px)" }}
                          >
                            <div className="w-[24px] h-[24px] bg-[#349DF4] rounded-[4px]"></div>
                            <span className="font-normal text-[10px] leading-[12px] text-[#085798]">
                              Rebuild-Z
                            </span>
                          </div>
                        )}
                      </td>
                    ),
                  )}
                </tr>

                {/* Week 5 */}
                <tr className="h-[120px]">
                  {[
                    { day: "28", color: "#000000" },
                    { day: "29", color: "#000000" },
                    { day: "30", color: "#000000" },
                    { day: "1", color: "#D2D2D2" },
                    { day: "2", color: "#D2D2D2" },
                    { day: "3", color: "#D2D2D2" },
                    { day: "4", color: "#D2D2D2" },
                  ].map((item, index) => (
                    <td
                      key={index}
                      className="border-r border-b border-[#E5E5E5] p-[8px] align-top"
                      style={{
                        borderRight: index === 6 ? "none" : undefined,
                        borderBottom: "none",
                      }}
                    >
                      <span
                        className="font-normal text-[12px] leading-[15px]"
                        style={{ color: item.color }}
                      >
                        {item.day}
                      </span>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Border Frame - 3 horizontal lines, 2 vertical lines */}
        {/* Top horizontal line - extends full width */}
        <div className="fixed w-screen h-[1px] left-0 top-[209px] bg-[#E5E5E5]"></div>

        {/* Middle horizontal line - extends full width */}
        <div className="fixed w-screen h-[1px] left-0 top-[117px] bg-[#E5E5E5]"></div>

        {/* Bottom horizontal line - extends full width */}
        <div className="fixed w-screen h-[1px] left-0 top-[846px] bg-[#E5E5E5]"></div>

        {/* Left vertical line - extends full height */}
        <div className="absolute w-[1px] h-screen left-[100px] top-0 bg-[#E5E5E5]"></div>

        {/* Right vertical line - extends full height and fixed alignment */}
        <div className="absolute w-[1px] h-screen left-[1339px] top-0 bg-[#E5E5E5]"></div>
      </div>
    </div>
  );
}
