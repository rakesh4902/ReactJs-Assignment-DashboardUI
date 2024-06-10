
import { PieChart, Pie, Legend, Cell, ResponsiveContainer,BarChart,Bar,XAxis,YAxis} from "recharts"
import { GrAnalytics } from "react-icons/gr";
import { GrSchedulePlay } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { TbTags } from "react-icons/tb";
import { MdOutlineSettings } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { TbCalendarEvent } from "react-icons/tb";
import { BiLike } from "react-icons/bi";
import { PiUsers } from "react-icons/pi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import './index.css'

const data = [
    {
      count: 55,
      language: "Basic Trees",
    },
    {
      count: 31,
      language: "Custom Short Pants",
    },
    {
      count: 14,
      language: "super Hoodies",
    },
  ]

  const barData = [
    {
      group_name: "Week-1",
      Guest: 200,
      User: 400,
    },
    {
      group_name: "Week-2",
      Guest: 3000,
      User: 500,
    },
    {
      group_name: "Week-3",
      Guest: 1000,
      User: 1500,
    },
    {
      group_name: "Week-4",
      Guest: 700,
      User: 1200,
    },
  ]
  
const Dashboard=()=>{
    const DataFormatter = (number) => {
        if (number > 1000) {
          return `${(number / 1000).toString()}k`
        }
        return number.toString()
      }

    return(
        <div className='dashboard'>
            <div className="navigation">
                <h1 className='board'>Board.</h1>
                <div className="navigation1">
                <div className="Header">
                <div className="dashboard-navigation-highlighted">
                    <GrAnalytics size={22} color="#ffffff"/>
                    <p className="dashboard-heading">Dashboard</p>
                </div>
                <div className="dashboard-navigation">
                    <TbTags  size={22} color="darkgrey"/>
                    <p className="dashboard-heading">Transactions</p>
                </div>
                <div className="dashboard-navigation">
                    <GrSchedulePlay size={22} color="darkgrey"/>
                    <p className="dashboard-heading">Schedules</p>
                </div>
                <div className="dashboard-navigation">
                    <CgProfile size={22} color="darkgrey"/>
                    <p className="dashboard-heading">Users</p>
                </div>
                <div className="dashboard-navigation">
                    <MdOutlineSettings size={22} color="darkgrey"/>
                    <p className="dashboard-heading">Settings</p>
                </div>
                </div>
                <div className="footer">
                <p className="footer-heading">Help</p>
                <p className="footer-heading">Contact Us</p>
                </div>
                </div>
            </div>
            <div className="right-side">
                <div className="dashboard-search-profile">
                    <h1 className="dashboard-heading">Dashboard</h1>
                    <div className="search-profile">
                        <div className="search-cont">
                        <input type="search" className="search" placeholder="Search..."/>
                        <IoSearchOutline size={15} color="#000000" />
                        </div>
                        <div className="notification">
                        <FaRegBell size={20} />
                        </div>
                        <img src="https://rb.gy/fvghi8" alt="profile" className="profile"/>
                    </div>
                </div>
                <div className="summary-container">
                    <div className="summary">
                        <div className="icon">
                        <TbCalendarEvent size={25} />
                        </div>
                        <div className="matter">
                            <p className="total-revenue">Total Revenues</p>
                            <h1 className="total">$2,129,430</h1>
                        </div>
                    </div>
                    <div className="summary summary1">
                        <div className="icon">
                        <TbTags  size={25} />
                        </div>
                        <div className="matter">
                            <p className="total-revenue">Total Transactions</p>
                            <h1 className="total">1,520</h1>
                        </div>
                    </div>
                    <div className="summary summary2">
                        <div className="icon">
                        <BiLike size={25} />
                        </div>
                        <div className="matter">
                            <p className="total-revenue">Total Likes</p>
                            <h1 className="total">9,721</h1>
                        </div>
                    </div>
                    <div className="summary summary3">
                        <div className="icon">
                        <PiUsers size={25} />
                        </div>
                        <div className="matter">
                            <p className="total-revenue">Total Users</p>
                            <h1 className="total">892</h1>
                        </div>
                    </div>
                </div>
                <div className="Bar-chart-container">
                    <h1 className="Activities">Activities</h1>
                    <div className="seall-cont">
                    <p className="seall">May-June2021</p>
                    <MdKeyboardArrowDown  size={20}/>
                    
                    </div>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                        data={barData}
                        margin={{
                        top: 5,
                        }}
                    >
                        <XAxis
                        dataKey="group_name"
                        tick={{
                            stroke: "gray",
                            strokeWidth: 1,
                        }}
                        />
                        <YAxis
                        tickFormatter={DataFormatter}
                        tick={{
                            stroke: "gray",
                            strokeWidth: 0,
                        }}
                        />
                        <Legend
                        wrapperStyle={{
                            padding: 30,
                        }}
                        />
                        <Bar dataKey="Guest" name="Guest" fill="#E9A0A0" barSize="20%" />
                        <Bar dataKey="User" name="User" fill="#9BDD7C" barSize="20%" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
                <div className="pichart-todaysschedule">
                <div className="pie-chart-container">
                    <h1 className="top-products">Top Products</h1>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart className="pi-chart">
                            <Pie
                            cx="70%"
                            cy="40%"
                            data={data}
                            startAngle={0}
                            endAngle={360}
                            innerRadius="40%"
                            outerRadius="70%"
                            dataKey="count"
                            >
                            <Cell name="Basic Trees" fill="#98D89E" />
                            <Cell name="Custom Short Pants" fill="#EE8484" />
                            <Cell name="Super Hoodies" fill="#F6DC7D" />
                            </Pie>
                            <Legend
                            iconType="circle"
                            layout="vertical"
                            verticalAlign="middle"
                            align="right"
                            />
                        </PieChart>
                        </ResponsiveContainer>
                </div>
                <div className="todays-schedule-container">
                    <h1 className="top-products">Today's schedule</h1>
                    <div className="seall-cont">
                    <p className="seall">seeall</p>
                    <MdKeyboardArrowRight size={20}/>
                    </div>
                    <div className="schedule-container">
                    <hr className="line1"/>
                    <div className="schedule">
                        <h1 className="meeting">Meeting with suppliers from kuta balie</h1>
                        <p className="timings">14:00-15:00</p>
                        <p className="timings">at Sunset Road,kuta bali</p>
                    </div>
                    </div>
                    <div className="schedule-container">
                    <hr className="line2"/>
                    <div className="schedule1">
                        <h1 className="meeting">Check Operation at Giga Factory 1</h1>
                        <p className="timings">18:00-20:00</p>
                        <p className="timings">at Central Jakarta</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard