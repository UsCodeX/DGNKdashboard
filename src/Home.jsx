import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

function Home() {
  const data = [
    {
      Commodity: "Engineering Goods",
      "Total Exports Apr'23 - May'23 ($Mn)": 18277.05,
      "May - 23 Exports ($Mn)": 9300.86,
      "Apr - 23 Exports ($Mn)": 8976.19,
      "% Growth compared to the previous month": 3.62,
      "% Share in selected criteria’s total exports": 26.41,
    },
    {
      Commodity: "Petroleum Products",
      "Total Exports Apr'23 - May'23 ($Mn)": "11,960.38",
      "May - 23 Exports ($Mn)": "5,732.81",
      "Apr - 23 Exports ($Mn)": "6,227.57",
      "% Growth compared to the previous month": "-7.94%",
      "% Share in selected criteria’s total exports": "17.28%",
    },
    {
      Commodity: "Gems And Jewellery",
      "Total Exports Apr'23 - May'23 ($Mn)": "5,248.24",
      "May - 23 Exports ($Mn)": "2,823.04",
      "Apr - 23 Exports ($Mn)": "2,425.20",
      "% Growth compared to the previous month": "16.40%",
      "% Share in selected criteria’s total exports": "7.58%",
    },
    {
      Commodity: "Electronic Goods",
      "Total Exports Apr'23 - May'23 ($Mn)": "4,536.02",
      "May - 23 Exports ($Mn)": "2,422.44",
      "Apr - 23 Exports ($Mn)": "2,113.58",
      "% Growth compared to the previous month": "14.61%",
      "% Share in selected criteria’s total exports": "6.55%",
    },
    {
      Commodity: "Organic and Inorganic Chemicals",
      "Total Exports Apr'23 - May'23 ($Mn)": "4,381.02",
      "May - 23 Exports ($Mn)": "2,235.46",
      "Apr - 23 Exports ($Mn)": "2,145.56",
      "% Growth compared to the previous month": "4.19%",
      "% Share in selected criteria’s total exports": "6.33%",
    },
    {
      Commodity: "Drugs And Pharmaceuticals",
      "Total Exports Apr'23 - May'23 ($Mn)": "4,342.77",
      "May - 23 Exports ($Mn)": "2,062.83",
      "Apr - 23 Exports ($Mn)": "2,279.94",
      "% Growth compared to the previous month": "-9.52%",
      "% Share in selected criteria’s total exports": "6.28%",
    },
    {
      Commodity: "Others",
      "Total Exports Apr'23 - May'23 ($Mn)": "3,784.17",
      "May - 23 Exports ($Mn)": "1,895.69",
      "Apr - 23 Exports ($Mn)": "1,888.48",
      "% Growth compared to the previous month": "0.38%",
      "% Share in selected criteria’s total exports": "5.47%",
    },
    {
      Commodity: "Ready-made garments of all textiles",
      "Total Exports Apr'23 - May'23 ($Mn)": "2,444.84",
      "May - 23 Exports ($Mn)": "1,234.92",
      "Apr - 23 Exports ($Mn)": "1,209.92",
      "% Growth compared to the previous month": "2.07%",
      "% Share in selected criteria’s total exports": "3.53%",
    },
    {
      Commodity: "Rice",
      "Total Exports Apr'23 - May'23 ($Mn)": "1,976.89",
      "May - 23 Exports ($Mn)": "977.23",
      "Apr - 23 Exports ($Mn)": "999.66",
      "% Growth compared to the previous month": "-2.24%",
      "% Share in selected criteria’s total exports": "2.86%",
    },
    {
      Commodity: "Cotton Yarn/Fabs./Madeups, Handloom Products Etc.",
      "Total Exports Apr'23 - May'23 ($Mn)": "1,807.68",
      "May - 23 Exports ($Mn)": "919.86",
      "Apr - 23 Exports ($Mn)": "887.82",
      "% Growth compared to the previous month": "3.61%",
      "% Share in selected criteria’s total exports": "2.61%",
    },
    {
      Commodity: "Plastic And Linoleum",
      "Total Exports Apr'23 - May'23 ($Mn)": "1,295.58",
      "May - 23 Exports ($Mn)": "650.50",
      "Apr - 23 Exports ($Mn)": "645.08",
      "% Growth compared to the previous month": "0.84%",
      "% Share in selected criteria’s total exports": "1.87%",
    },
    {
      Commodity: "Marine Products",
      "Total Exports Apr'23 - May'23 ($Mn)": "1,164.97",
      "May - 23 Exports ($Mn)": "598.23",
      "Apr - 23 Exports ($Mn)": "566.74",
      "% Growth compared to the previous month": "5.56%",
      "% Share in selected criteria’s total exports": "1.68%",
    },
    {
      Commodity: "Spices",
      "Total Exports Apr'23 - May'23 ($Mn)": "815.38",
      "May - 23 Exports ($Mn)": "453.95",
      "Apr - 23 Exports ($Mn)": "361.43",
      "% Growth compared to the previous month": "25.60%",
      "% Share in selected criteria’s total exports": "1.18%",
    },
    {
      Commodity: "Man-Made Yarn/Fabs./Madeups Etc.",
      "Total Exports Apr'23 - May'23 ($Mn)": "786.66",
      "May - 23 Exports ($Mn)": "393.88",
      "Apr - 23 Exports ($Mn)": "392.78",
      "% Growth compared to the previous month": "0.28%",
      "% Share in selected criteria’s total exports": "1.14%",
    },
  ];

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        {/* Render cards for "PRODUCTS," "CATEGORIES," "CUSTOMERS," and "ALERTS" */}
      </div>

      <div className="charts">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Commodity" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="May - 23 Exports ($Mn)"
              fill="#8884d8"
              name="May Exports"
            />
            <Bar
              dataKey="Apr - 23 Exports ($Mn)"
              fill="#82ca9d"
              name="April Exports"
            />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Commodity" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="May - 23 Exports ($Mn)"
              stroke="#8884d8"
              name="May Exports"
            />
            <Line
              type="monotone"
              dataKey="Apr - 23 Exports ($Mn)"
              stroke="#82ca9d"
              name="April Exports"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default Home;
