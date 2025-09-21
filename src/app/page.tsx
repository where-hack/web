"use client";

import { useState } from "react";

// 国际化配置
const translations = {
  zh: {
    title: "WhereHack",
    weekdays: ["日", "一", "二", "三", "四", "五", "六"],
    months: [
      "一月",
      "二月",
      "三月",
      "四月",
      "五月",
      "六月",
      "七月",
      "八月",
      "九月",
      "十月",
      "十一月",
      "十二月",
    ],
    today: "今天",
    prevMonth: "上个月",
    nextMonth: "下个月",
    events: "事件",
    noEvents: "暂无事件",
  },
  en: {
    title: "WhereHack",
    weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    today: "Today",
    prevMonth: "Previous month",
    nextMonth: "Next month",
    events: "events",
    noEvents: "No events",
  },
};

// UTC Unix timestamp 结构
interface ICalendarCell {
  day: number;
  timestamp: number;
}

const makeUTCDate = (year: number, month: number, day: number): number =>
  Date.UTC(year, month, day, 0, 0, 0, 0);

const getUTCDay = (timestamp: number): number =>
  new Date(timestamp).getUTCDate();

const getUTCMonth = (timestamp: number): number =>
  new Date(timestamp).getUTCMonth();

const getUTCYear = (timestamp: number): number =>
  new Date(timestamp).getUTCFullYear();

// 生成日历网格
function getCalendarCells(selectedTimestamp: number): ICalendarCell[] {
  const year = getUTCYear(selectedTimestamp);
  const month = getUTCMonth(selectedTimestamp);

  const getDaysInMonth = (y: number, m: number) =>
    new Date(Date.UTC(y, m + 1, 0)).getUTCDate();

  const getFirstDayOfMonth = (y: number, m: number) =>
    new Date(Date.UTC(y, m, 1)).getUTCDay();

  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfMonth = getFirstDayOfMonth(year, month);
  const daysInPrevMonth = getDaysInMonth(year, month - 1);

  const prevCells = Array.from({ length: firstDayOfMonth }, (_, i) => {
    const day = daysInPrevMonth - firstDayOfMonth + i + 1;
    return { day, timestamp: makeUTCDate(year, month - 1, day) };
  });

  const currentCells = Array.from({ length: daysInMonth }, (_, i) => ({
    day: i + 1,
    timestamp: makeUTCDate(year, month, i + 1),
  }));

  const nextCells = Array.from(
    { length: (7 - ((prevCells.length + currentCells.length) % 7)) % 7 },
    (_, i) => ({ day: i + 1, timestamp: makeUTCDate(year, month + 1, i + 1) }),
  );

  return [...prevCells, ...currentCells, ...nextCells];
}

// 计算属性
const isCurrentMonth = (cellTs: number, selectedTs: number): boolean =>
  getUTCYear(cellTs) === getUTCYear(selectedTs) &&
  getUTCMonth(cellTs) === getUTCMonth(selectedTs);

const isToday = (cellTs: number): boolean => {
  const today = new Date();
  const todayStr = today.toISOString().slice(0, 10);
  const cellStr = new Date(cellTs).toISOString().slice(0, 10);
  return todayStr === cellStr;
};

// 主要组件
export default function Home() {
  const [lang, setLang] = useState<"zh" | "en">("zh");
  const [selectedTimestamp, setSelectedTimestamp] = useState<number>(
    Date.now(),
  );

  const t = translations[lang];
  const cells = getCalendarCells(selectedTimestamp);

  // 格式化显示
  const formatMonthYear = (ts: number): string => {
    const month = t.months[getUTCMonth(ts)];
    const year = getUTCYear(ts);
    return lang === "zh" ? `${year}年 ${month}` : `${month} ${year}`;
  };

  const handlePrevMonth = () => {
    const currentMonth = getUTCMonth(selectedTimestamp);
    const currentYear = getUTCYear(selectedTimestamp);
    const newMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const newYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    setSelectedTimestamp(makeUTCDate(newYear, newMonth, 1));
  };

  const handleNextMonth = () => {
    const currentMonth = getUTCMonth(selectedTimestamp);
    const currentYear = getUTCYear(selectedTimestamp);
    const newMonth = currentMonth === 11 ? 0 : currentMonth + 1;
    const newYear = currentMonth === 11 ? currentYear + 1 : currentYear;
    setSelectedTimestamp(makeUTCDate(newYear, newMonth, 1));
  };

  return (
    <main className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">{t.title}</h1>

          {/* 语言切换 */}
          <div className="flex gap-2">
            <button
              onClick={() => setLang("zh")}
              className={`px-3 py-1 text-sm rounded ${lang === "zh" ? "bg-primary text-primary-foreground" : "border"}`}
            >
              中文
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1 text-sm rounded ${lang === "en" ? "bg-primary text-primary-foreground" : "border"}`}
            >
              EN
            </button>
          </div>
        </div>

        {/* 日历头部 - 原设计样式 */}
        <div className="flex items-center gap-3 mb-4 p-4 border-b">
          {/* Today按钮 - 学习原版设计 */}
          <button
            onClick={() => setSelectedTimestamp(Date.now())}
            className="flex size-14 flex-col items-start overflow-hidden border"
          >
            <p className="flex h-6 w-full items-center justify-center bg-primary text-center text-xs font-semibold text-primary-foreground">
              {new Date()
                .toLocaleString(lang === "zh" ? "zh-CN" : "en-US", {
                  month: "short",
                })
                .toUpperCase()}
            </p>
            <p className="flex w-full items-center justify-center text-lg font-bold">
              {new Date().getDate()}
            </p>
          </button>

          {/* 月份导航 */}
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold">
                {formatMonthYear(selectedTimestamp)}
              </span>
              <span className="px-1.5 py-0.5 text-xs border rounded">
                0 {t.events}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevMonth}
                className="size-6.5 px-0 flex items-center justify-center border rounded hover:bg-accent"
                title={t.prevMonth}
              >
                ←
              </button>
              <p className="text-sm text-muted-foreground">
                {lang === "zh" ? "第1周 - 第5周" : "Week 1 - Week 5"}
              </p>
              <button
                onClick={handleNextMonth}
                className="size-6.5 px-0 flex items-center justify-center border rounded hover:bg-accent"
                title={t.nextMonth}
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* 日历主体 - 精确还原原版结构 */}
        <div>
          {/* 星期标题 - divide-x 无边框容器 */}
          <div className="grid grid-cols-7 divide-x">
            {t.weekdays.map((day) => (
              <div key={day} className="flex items-center justify-center py-2">
                <span className="text-xs font-medium text-muted-foreground">
                  {day}
                </span>
              </div>
            ))}
          </div>
          {/* 日期网格 - overflow-hidden + 内部边框 */}
          <div className="grid grid-cols-7 overflow-hidden">
            {cells.map((cell, idx) => {
              const current = isCurrentMonth(cell.timestamp, selectedTimestamp);
              const today = isToday(cell.timestamp);
              const isSunday = new Date(cell.timestamp).getUTCDay() === 0;

              return (
                <div
                  key={idx}
                  className={`flex h-full flex-col gap-1 border-l border-t py-1.5 lg:py-2 ${
                    isSunday ? "border-l-0" : ""
                  }`}
                >
                  {/* 日期数字 - 正确样式 */}
                  <span
                    className={`h-6 px-1 text-xs font-semibold lg:px-2 ${
                      today
                        ? "flex w-6 translate-x-1 items-center justify-center rounded-full bg-primary px-0 font-bold text-primary-foreground"
                        : ""
                    } ${!current ? "opacity-20" : ""}`}
                  >
                    {cell.day}
                  </span>

                  {/* 事件占位区 - 照搬原版 */}
                  <div
                    className={`flex h-6 gap-1 px-2 lg:h-[94px] lg:flex-col lg:gap-2 lg:px-0 ${
                      !current ? "opacity-50" : ""
                    }`}
                  >
                    {[0, 1, 2].map((pos) => (
                      <div key={pos} className="lg:flex-1" />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
