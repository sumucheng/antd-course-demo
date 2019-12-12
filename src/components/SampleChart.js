import { useRef, useEffect } from 'react';
import G2 from '@antv/g2';

function SampleChart(props) {
    const containerRef = useRef(null)
    let chart

    useEffect(() => {
        chart = new G2.Chart({
            container: containerRef.current,
            width: 450,
            height: 300
        })
        refreshChart();
    }, [])

    function refreshChart() {
        chart.source(props.data)
        chart.interval().position('genre*sold').color('genre');
        chart.render()
    }
    return (
        <div ref={containerRef} />
    );
}

export default SampleChart;

