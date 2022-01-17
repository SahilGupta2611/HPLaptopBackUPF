import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {

    let dataPointValue = props.datapoints.map((datapoint) => datapoint.value);
    let totalMaximumValue = Math.max(...dataPointValue);
    return <div className="chart">
        {props.datapoints.map((datapoint) => {
            return <ChartBar
                id={datapoint.label}
                value={datapoint.value}
                label={datapoint.label}
                maxValue={totalMaximumValue}
            />
        })}
    </div>



}

export default Chart;