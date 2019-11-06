import { combineReducers } from 'redux';


//New Planning
import GetCountryList from './GetCountryList';
import getPlanningCustomerBarChart from './getPlanningCustomerBarChart';
import getPlanningCDNBarChart from './getPlanningCDNBarChart';
import getTrafficCoserverBarChart from './getTrafficCoserverBarChart';
import getPeakTrafficISPBarChart from './getPeakTrafficISPBarChart';
import getClientBarChartDD from './getClientBarChartDD';
import getPlanCDNBarChartDD from './getPlanCDNBarChartDD';
import getPeakISPBarChartDD from './getPeakISPBarChartDD';
import getTrafficCoserverBarChartDD from './getTrafficCoserverBarChartDD';
import getCacheImpactBarChart from './getCacheImpactBarChart';
import getCacheImpactBarChartDD from './getCacheImpactBarChartDD';
import getCacheByISPBarChart from './getCacheByISPBarChart';
import getPlanCacheCDNBarChart from './getPlanCacheCDNBarChart';
import getPlanCacheIspBarChartDD from './getPlanCacheIspBarChartDD';
import getPlanCacheCDNBarChartDD from './getPlanCacheCDNBarChartDD';
import getPlanLocalCDNBarChart from './getPlanLocalCDNBarChart';
import getPlanLocalClientBarChart from './getPlanLocalClientBarChart';
import getLocalCDNtoClientBarChartDD from './getLocalCDNtoClientBarChartDD';
import getSecLocalCDNBarChartDD from './getSecLocalCDNBarChartDD';
import getThirdLocalCDNTableDD from './getThirdLocalCDNTableDD';
import getLocalClientBarChartDD from './getLocalClientBarChartDD';
import getLocalClientTableDD from './getLocalClientTableDD';
import getTrafficVolumeWidgetData from './getTrafficVolumeWidgetData';
import getCacheWidgetData from './getCacheWidgetData';
import getPeakTrafficWidgetData from './getPeakTrafficWidgetData';
import getCacheWidgetDD from './getCacheWidgetDD';
import getPeakTrafficWidgetDD from './getPeakTrafficWidgetDD';
import getTrafficWidgetDD from './getTrafficWidgetDD';
import getPeakTrafficPredictionChart from './getPeakTrafficPredictionChart';
import getPredictionChartDD from './getPredictionChartDD';


const rootReducer = combineReducers({
    //New Planning
    GetCountryList,
    getPeakTrafficWidgetData,
    getCacheWidgetData,
    getTrafficVolumeWidgetData,
    getPlanningCustomerBarChart,
    getPlanningCDNBarChart,
    getTrafficCoserverBarChart,
    getPeakTrafficISPBarChart,
    getClientBarChartDD,
    getPlanCDNBarChartDD,
    getPeakISPBarChartDD,
    getTrafficCoserverBarChartDD,
    getCacheImpactBarChart,
    getCacheImpactBarChartDD,
    getCacheByISPBarChart,
    getPlanCacheCDNBarChart,
    getPlanCacheIspBarChartDD,
    getPlanCacheCDNBarChartDD,
    getPlanLocalCDNBarChart,
    getPlanLocalClientBarChart,
    getLocalCDNtoClientBarChartDD,
    getSecLocalCDNBarChartDD,
    getThirdLocalCDNTableDD,
    getLocalClientBarChartDD,
    getLocalClientTableDD,
    getCacheWidgetDD,
    getPeakTrafficWidgetDD,
    getTrafficWidgetDD,
    getPeakTrafficPredictionChart,
    getPredictionChartDD

});


export default rootReducer;