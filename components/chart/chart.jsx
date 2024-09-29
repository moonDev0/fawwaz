import css from './chart.module.css'
import StatisticsChart from './statisticschart'


const Statistics = () => {
    return (
        <div className={`${css.container} theme-container`}>
            <h1 className=' font-poppins text-[16px] font-semibold'>Students Wellbeing Analysis  </h1>
            <StatisticsChart/>
        </div>
    )
}

export default Statistics