"use client";
import { useState, useEffect, ChangeEvent } from "react";

const categories: string[] = [
  "Autos & Vehicles",
  "Comedy",
  "Education",
  "Entertainment",
  "Film and Animation",
  "Gaming",
  "Howto & Style",
  "Music",
  "News & Politics",
  "Nonprofits & Activism",
  "People & Blogs",
  "Pets & Animals",
  "Science & Technology",
  "Sports",
  "Travel & Events",
];
const timePeriodOptions: number[] = [7, 14, 30, 60, 90, 180, 365, 730];

const countries: string[] = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo, Democratic Republic of the",
  "Congo, Republic of the",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const minSubsOptions: number[] = [
  500, 1000, 2000, 5000, 10000, 20000, 50000, 100000, 200000, 500000, 1000000,
  2000000, 5000000,
];

const minViewsOptions: number[] = [
  10000, 20000, 50000, 100000, 200000, 500000, 1000000, 2000000, 5000000,
  10000000, 20000000, 50000000, 100000000, 200000000, 500000000, 1000000000,
];

const minVideosOptions: number[] = [
  10, 20, 30, 40, 50, 75, 100, 150, 200, 300, 500,
];
interface ISearchFilter {
  subscriberMin: number;
  subscriberMax: number;
  totalViewsMin: number;
  totalViewsMax: number;
  totalVideosMin: number;
  totalVideosMax: number;
  CreationDateMin: number;
  CreationDateMax: number;
}

const BasicSearch = () => {
  const initialData: ISearchFilter = {
    subscriberMin: 0,
    subscriberMax: 0,
    totalViewsMin: 0,
    totalViewsMax: 0,
    totalVideosMin: 0,
    totalVideosMax: 0,
    CreationDateMin: 0,
    CreationDateMax: 0,
  };

  const [searchResult, setSearchResult] = useState<ISearchFilter>(initialData);
  console.log("searchResult", searchResult);

  const handleSetAllValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchResult((pre) => ({
      ...pre,
      [name]: parseInt(value),
    }));
  };
 ;

  const [categoryOption, setCategoryOption] = useState<string>("");

  const [categoriesList, setCategoriesList] = useState<string[]>([]);
  const [categoryInput, setCategoryInput] = useState<string>("");
  const [filteredCategories, setFilteredCategories] =
    useState<string[]>(categories);

  const [countryList, setCountryList] = useState<string[]>([]);
  const [countryInput, setCountryInput] = useState<string>("");
  const [filteredCountry, setFilteredCountry] = useState<string[]>(countries);

  useEffect(() => {
    if (categoryOption === "categories") {
      if (categoryInput === "") {
        setFilteredCategories(categories);
      } else {
        setFilteredCategories(
          categories.filter((category) =>
            category.toLowerCase().includes(categoryInput.toLowerCase())
          )
        );
      }
    } else if (categoryOption === "country") {
      if (countryInput === "") {
        setFilteredCountry(countries);
      } else {
        setFilteredCountry(
          countries.filter((category) =>
            category.toLowerCase().includes(countryInput.toLowerCase())
          )
        );
      }
    }
  }, [categoryInput, countryInput]);

  const handlePushItem = (item: string) => {
    if (categoryOption === "categories") {
      setCategoriesList((prev) => {
        if (prev.includes(item)) {
          return prev.filter((category) => category !== item);
        } else {
          return [...prev, item];
        }
      });
    } else if (categoryOption === "country") {
      setCountryList((prev) => {
        if (prev.includes(item)) {
          return prev.filter((category) => category !== item);
        } else {
          return [...prev, item];
        }
      });
    }
  };
  const formatTimePeriod = (days: number) => {
    if (days >= 365) {
      const years = Math.floor(days / 365);
      return `${years} year${years > 1 ? "s" : ""}`;
    } else if (days >= 30) {
      const months = Math.floor(days / 30);
      return `${months} month${months > 1 ? "s" : ""}`;
    } else if (days >= 7) {
      const weeks = Math.floor(days / 7);
      return `${weeks} week${weeks > 1 ? "s" : ""}`;
    } else {
      return `${days} day${days > 1 ? "s" : ""}`;
    }
  };

  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-2 lg:pl-28 sm:pl-0 border rounded py-5">
      <div className=" flex flex-col gap-6">
        <div className="flex gap-7 items-center w-3/4">
          <label className="w-28 text-zinc-400 text-end">Channel Name</label>
          <input
            type="text"
            name=""
            disabled
            className="border focus:outline-none px-4 py-1 rounded w-2/3"
            id=""
          />
        </div>
        <div className="relative">
          {categoriesList.length !== 0 && (
            <ul className="flex flex-wrap gap-1 mb-1 pr-1 min-w-auto w-3/4  justify-end ">
              {categoriesList.map((item: string, i: number) => (
                <li
                  className="hover:bg-red-400 bg-red-100 hover:border-red-400 hover:text-white rounded inline-block text-sm text-zinc-800 px-2 border"
                  key={i}
                >
                  <button
                    type="button"
                    className="py-1 inline"
                    onClick={() =>
                      setCategoriesList((prev) =>
                        prev.filter((category) => category !== item)
                      )
                    }
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          )}

          <div className="flex w-3/4 gap-7 items-center relative ">
            <label className="w-28 text-end text-zinc-700">Category</label>
            <input
              type="text"
              name=""
              className="border focus:outline-none px-4 py-1 rounded w-2/3 text-zinc-800"
              id=""
              placeholder={
                categoriesList.length !== 0
                  ? categoriesList[categoriesList.length - 1]
                  : "Search"
              }
              value={categoryInput}
              onChange={(e) => setCategoryInput(e.target.value)}
              onFocus={() => setCategoryOption("categories")}
            />
            {categoryOption === "categories" && (
              <button
                type="button"
                className="absolute top-1 mr-1 text-zinc-600 right-2"
                onClick={() => setCategoryOption("")}
              >
                {" "}
                x{" "}
              </button>
            )}{" "}
          </div>

          {categoryOption === "categories" && (
            <div className="flex gap-7 items-center mt-2">
              <label className="w-28 text-end text-zinc-400"></label>
              <div className="w-1/2 max-h-52 py-2 min-h-auto categorySearch border rounded overflow-y-auto">
                <ul className="flex flex-col gap-1 px-2">
                  {filteredCategories.map((item: string, i: number) => (
                    <li
                      className={`rounded text-sm text-zinc-800 pl-3 border ${
                        categoriesList.includes(item)
                          ? "bg-green-400 hover:bg-green-200"
                          : "bg-slate-100 hover:bg-gray-200"
                      }`}
                      key={i}
                    >
                      <button
                        type="button"
                        className="py-1 inline"
                        onClick={() => handlePushItem(item)}
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
        <div className="flex gap-7 items-center w-3/4">
          <label className="w-28 text-zinc-700 text-end">Language</label>
          <input
            type="text"
            name=""
            disabled
            placeholder="English"
            className="border text-zinc-800 focus:outline-none px-4 py-1 rounded w-2/3"
            id=""
          />
        </div>

        <div className="relative">
          {countryList.length !== 0 && (
            <ul className="flex flex-wrap gap-1 mb-1 pr-1 min-w-auto w-3/4  justify-end ">
              {countryList.map((item: string, i: number) => (
                <li
                  className="hover:bg-red-400 bg-red-100 hover:border-red-400 hover:text-white rounded inline-block text-sm text-zinc-800 px-2 border"
                  key={i}
                >
                  <button
                    type="button"
                    className="py-1 inline"
                    onClick={() =>
                      setCountryList((prev) =>
                        prev.filter((category) => category !== item)
                      )
                    }
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          )}

          <div className="flex w-3/4 gap-7 items-center relative ">
            <label className="w-28 text-end text-zinc-700">Countries</label>
            <input
              type="text"
              name=""
              className="border focus:outline-none px-4 py-1 rounded w-2/3 text-zinc-800"
              id=""
              placeholder={
                countryList.length !== 0
                  ? countryList[categoriesList.length - 1]
                  : "Search"
              }
              value={countryInput}
              onChange={(e) => setCountryInput(e.target.value)}
              onFocus={() => setCategoryOption("country")}
            />
            {categoryOption === "country" && (
              <button
                type="button"
                className="absolute top-1 mr-1 text-zinc-600 right-2"
                onClick={() => setCategoryOption("")}
              >
                {" "}
                x{" "}
              </button>
            )}{" "}
          </div>

          {categoryOption === "country" && (
            <div className="flex gap-7 items-center mt-2">
              <label className="w-28 text-end text-zinc-400"></label>
              <div className="w-1/2 max-h-52 py-2 min-h-auto categorySearch border rounded overflow-y-auto">
                <ul className="flex flex-col gap-1 px-2">
                  {filteredCountry.map((item: string, i: number) => (
                    <li
                      className={`rounded text-sm text-zinc-800 pl-3 border ${
                        countryList.includes(item)
                          ? "bg-green-400 hover:bg-green-200"
                          : "bg-slate-100 hover:bg-gray-200"
                      }`}
                      key={i}
                    >
                      <button
                        type="button"
                        className="py-1 inline"
                        onClick={() => handlePushItem(item)}
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex gap-7 items-center w-full">
          <label className="w-28 text-zinc-400 text-end">Subscribers</label>
          <div className="flex gap-4">
            <select
              name="subscriberMin"
              onChange={() => handleSetAllValue}
              className="border focus:outline-none px-4 text-zinc-700 py-1 rounded lg:w-40 sm:w-18"
            >
              <option value="" key="default-min">
                min
              </option>
              {minSubsOptions.map((item: number, i: number) => (
                <option value={item} key={`min-sub-${i}`}>
                  {item}
                </option>
              ))}
            </select>
            <select
              name="subscriberMax"
              onChange={() => handleSetAllValue}
              className="border focus:outline-none px-4 text-zinc-700 py-1 rounded w-40"
            >
              <option value="" key="default-min">
                max
              </option>
              {minSubsOptions.map((item: number, i: number) => (
                <option value={item} key={`min-sub-${i}`}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-7 items-center w-full">
          <label className="w-28 text-zinc-400 text-end">Total Views</label>
          <div className="flex gap-4">
            <select
              name="totalViewsMin"
              onChange={() => handleSetAllValue}
              className="border focus:outline-none px-4 text-zinc-700 py-1 rounded w-40"
            >
              <option value="" key="default-min">
                min
              </option>
              {minViewsOptions.map((item: number, i: number) => (
                <option value={item} key={`min-sub-${i}`}>
                  {item}
                </option>
              ))}
            </select>
            <select
              name="totalViewsMax"
              onChange={() => handleSetAllValue}
              className="border focus:outline-none px-4 text-zinc-700 py-1 rounded w-40"
            >
              <option value="" key="default-min">
                max
              </option>
              {minViewsOptions.map((item: number, i: number) => (
                <option value={item} key={`min-sub-${i}`}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-7 items-center w-full">
          <label className="w-28 text-zinc-400 text-end">Total Videos</label>
          <div className="flex gap-4">
            <select
              name="totalVideosMin"
              onChange={() => handleSetAllValue}
              className="border focus:outline-none px-4 text-zinc-700 py-1 rounded w-40"
            >
              <option value="" key="default-min">
                min
              </option>
              {minVideosOptions.map((item: number, i: number) => (
                <option value={item} key={`min-sub-${i}`}>
                  {item}
                </option>
              ))}
            </select>
            <select
              name="totalVideosMax"
              onChange={() => handleSetAllValue}
              className="border focus:outline-none px-4 text-zinc-700 py-1 rounded w-40"
            >
              <option value="" key="default-min">
                max
              </option>
              {minVideosOptions.map((item: number, i: number) => (
                <option value={item} key={`min-sub-${i}`}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-7 items-center w-full">
          <label className="w-28 text-zinc-400 text-end">Creation Date</label>
          <div className="flex gap-4">
            <select
              name="CreationDateMin"
              onChange={() => handleSetAllValue}
              className="border focus:outline-none px-4 text-zinc-700 py-1 rounded w-40"
            >
              <option value="" key="default-min">
                min
              </option>
              {timePeriodOptions.map((item: number, i: number) => (
                <option value={item} key={`min-sub-${i}`}>
                  {formatTimePeriod(item)}
                </option>
              ))}
            </select>
            <select
              name="CreationDateMax"
              onChange={() => handleSetAllValue}
              className="border focus:outline-none px-4 text-zinc-700 py-1 rounded w-40"
            >
              <option value="" key="default-min">
                max
              </option>
              {timePeriodOptions.map((item: number, i: number) => (
                <option value={item} key={`min-sub-${i}`}>
                  {formatTimePeriod(item)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicSearch;
