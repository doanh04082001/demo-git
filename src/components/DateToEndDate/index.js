import { useEffect, useState } from "react";

const DateToEndDate = () => {
  const [today, setToday] = useState("");
  const [enDate, setEndDate] = useState(7);
  const [valueTable, setValueTable] = useState([]);

  const options = [
    { value: 7, text: "This Week" },
    { value: 10, text: "This 10 day" },
    { value: 30, text: "This month" },
  ];
  function toMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);

    return date.toLocaleString("en-US", {
      month: "long",
    });
  }

  const handleChange = (e) => {
    setEndDate(e.target.value);
  };

  useEffect(() => {
    const nowDate = new Date();
    const dateNow =
      nowDate.getDate() +
      "th" +
      " " +
      toMonthName(nowDate.getMonth()) +
      "," +
      nowDate.getFullYear();
    setToday(dateNow);
    function convert(str) {
      const date = new Date(str),
        month = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2);
      return [
        day + "th" + " " + toMonthName(month) + "," + date.getFullYear(),
      ].join();
    }
    const addSevenDay = new Date();
    addSevenDay.setDate(addSevenDay.getDate() + Number(enDate));
    setEndDate(convert(addSevenDay));
  }, [enDate]);

  useEffect(() => {
    setValueTable([
      {
        no: 1,
        name: "nam",
        rank: "gold",
      },
      {
        no: 2,
        name: "bop",
        rank: "gold",
      },
      {
        no: 3,
        name: "chuot",
        rank: "gold",
      },
    ]);
  }, []);

  return (
    <>
      <h1> Từ ngày ... đến ngày</h1>
      <div className="flex gap-4 align-middle">
        <select
          id="countries"
          className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          // value={enDate}
          onChange={handleChange}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
        <span className="align-middle">
          {today} - {enDate}
        </span>
      </div>
      <div className="relative mb-4 overflow-auto">
        <table className="ml-[-4px] w-full border-separate border-spacing-1">
          <thead className="text-center uppercase">
            <tr className="">
              <th
                scope="col"
                className="items-center rounded-[5px] bg-[#1D1C1C] py-2  text-[8px] font-bold leading-[9px] text-[#ffffff] md:text-[10px] lg:text-sm"
              >
                No
              </th>
              <th
                scope="col"
                className="items-center rounded-[5px] bg-[#1D1C1C] py-2  text-[8px] font-bold leading-[9px] text-[#ffffff] md:text-[10px] lg:text-sm"
              >
                Name
              </th>
              <th
                scope="col"
                className=" items-center rounded-[5px] bg-[#1D1C1C] py-2  text-[8px] font-bold leading-[9px] text-[#ffffff] md:text-[10px] lg:text-sm"
              >
                Rank
              </th>
            </tr>
          </thead>
          <tbody>
            {valueTable.map((data, index) => (
              <tr className="text-center" key={index}>
                <td className="items-center rounded-[5px] bg-[#1D1C1C] py-2  text-[8px] font-bold  text-[#ffffff] md:text-[10px] lg:text-sm">
                  {data.no}
                </td>
                <td className="items-center rounded-[5px] bg-[#1D1C1C] py-2  text-[8px] font-medium  text-[#ffffff] md:text-[10px] lg:text-sm">
                  {data.name}
                </td>
                <td className="items-center rounded-[5px] bg-[#1D1C1C] py-2  text-[8px] font-medium  text-[#ffffff] md:text-[10px] lg:text-sm">
                  {data.rank}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default DateToEndDate;
