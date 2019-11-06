import axios from 'axios';
import 'url-search-params-polyfill';
import { ROOT_URL } from './../globalVariables/';

function API_CALL(method, url, data, type, callback) {
    if (callback) {
        return function (dispatch) {
            axios({
                method: method,
                url: ROOT_URL + url,
                data: data,
                responseType: 'json'
            }).then((data) => callback(data));
        };
    } else {
        return function (dispatch) {
            axios({
                method: method,
                url: ROOT_URL + url,
                data: data
            }).then((response) => dispatch({
                type,
                payload: response
            })).catch((error) => {
                //console.log(error);
            });
        };
    }
}

//CDN PLANNING II
export function GetCountryList(callback) {
    return API_CALL('get', 'api/CdnLogapi/GetCountryList', null, 'GetCountryList', callback);
}
export function getPlanningCustomerBarChart(Dates, callback) {
    if (Dates == null) {
        return API_CALL('get', 'api/CdnLogapi/GetPeakTrafficRateforClient?Start_Date=2018-10-05', null, 'getPlanningCustomerBarChart', callback);
    }
    else if (Dates !== null) {
        var startDate = Dates.startDate;
        return API_CALL('get', 'api/CdnLogapi/GetPeakTrafficRateforClient?Start_Date=' + startDate, null, 'getPlanningCustomerBarChart', callback);
    }
} 
export function getPlanningCDNBarChart(Dates, callback) {
    if (Dates == null) {
        return API_CALL('get', 'api/CdnLogapi/GetPeakTrafficRateforCDN?Start_Date=2018-10-05', null, 'getPlanningCDNBarChart', callback);
    }
    else if (Dates !== null) {
        var startDate = Dates.startDate;
        return API_CALL('get', 'api/CdnLogapi/GetPeakTrafficRateforCDN?Start_Date=' + startDate, null, 'getPlanningCDNBarChart', callback);
    }
}
export function getTrafficCoserverBarChart(Dates, callback) {
    if (Dates == null) {
        return API_CALL('get', 'api/CdnLogapi/GetTrafficVolumeByCoserver?StartDate=2018-10-05&country=all', null, 'getTrafficCoserverBarChart', callback);
    }
    else if (Dates !== null) {
        var startDate = Dates.startDate;
        var Country = Dates.Country;
        return API_CALL('get', 'api/CdnLogapi/GetTrafficVolumeByCoserver?StartDate=' + startDate + '&country=' + CC, null, 'getTrafficCoserverBarChart', callback);
    }
} 
export function getPeakTrafficISPBarChart(Dates, callback) {
    if (Dates == null) {
        return API_CALL('get', 'api/CdnLogapi/GetPeakTrafficByISP?Start_Date=2018-10-05&country=all', null, 'getPeakTrafficISPBarChart', callback);
    }
    else if (Dates !== null) {
        var startDate = Dates.startDate;
        var Country = Dates.Country;
        return API_CALL('get', 'api/CdnLogapi/GetPeakTrafficByISP?Start_Date=' + startDate + '&country=' + CC, null, 'getPeakTrafficISPBarChart', callback);
    }
}
export function getCacheImpactBarChart(Dates, callback) {
    if (Dates == null) {
        return API_CALL('get', 'api/CdnLogapi/CacheEfficiencyAndImpactBarChart?StartDate=2018-10-05&country=All', null, 'getCacheImpactBarChart', callback);
    }
    else if (Dates !== null) {
        var startDate = Dates.startDate;
        var Country = Dates.Country;
        return API_CALL('get', 'api/CdnLogapi/CacheEfficiencyAndImpactBarChart?StartDate=' + startDate + '&country=' + Country, null, 'getCacheImpactBarChart', callback);
    }
}
export function getCacheByISPBarChart(Dates, callback) {
    if (Dates == null) {
        return API_CALL('get', 'api/CdnLogapi/CacheEfficiencyByISP?StartDate=2018-10-05&country=All', null, 'getCacheByISPBarChart', callback);
    }
    else if (Dates !== null) {
        var startDate = Dates.startDate;
        var Country = Dates.Country;
        return API_CALL('get', 'api/CdnLogapi/CacheEfficiencyByISP?StartDate=' + startDate + '&country=' + Country, null, 'getCacheByISPBarChart', callback);
    }
}
export function getPlanCacheCDNBarChart(Dates, callback) {
    if (Dates == null) {
        return API_CALL('get', 'api/CdnLogapi/CacheEfficiencyByCDN?StartDate=2018-10-05&country=All', null, 'getPlanCacheCDNBarChart', callback);
    }
    else if (Dates !== null) {
        var startDate = Dates.startDate;
        var Country = Dates.Country;
        return API_CALL('get', 'api/CdnLogapi/CacheEfficiencyByCDN?StartDate=' + startDate + '&country=' + Country, null, 'getPlanCacheCDNBarChart', callback);
    }
}
export function getPlanLocalCDNBarChart(Dates, callback) {
    if (Dates == null) {
        return API_CALL('get', 'api/CdnLogapi/LocalizationForCdn?StartDate=2018-10-05&country=All', null, 'getPlanLocalCDNBarChart', callback);
    }
    else if (Dates !== null) {
        var startDate = Dates.startDate;
        var Country = Dates.Country;
        return API_CALL('get', 'api/CdnLogapi/LocalizationForCdn?StartDate=' + startDate + '&country=' + Country, null, 'getPlanLocalCDNBarChart', callback);
    }
}
export function getPlanLocalClientBarChart(Dates, callback) {
    if (Dates == null) {
        return API_CALL('get', 'api/CdnLogapi/LocalizationForClient?StartDate=2018-10-05', null, 'getPlanLocalClientBarChart', callback);
    }
    else if (Dates !== null) {
        var startDate = Dates.startDate;
        return API_CALL('get', 'api/CdnLogapi/LocalizationForClient?StartDate=' + startDate, null, 'getPlanLocalClientBarChart', callback);
    }
} 
export function getTrafficVolumeWidgetData(Dates, callback) {
    if (Dates == null) {
        return API_CALL('get', 'api/CdnLogapi/GetOverallTrafficVolume?StartDate=2018-10-04&Country=all', null, 'getTrafficVolumeWidgetData', callback);
    }
    else if (Dates !== null) {
        var startDate = Dates.startDate;
        var Country = Dates.Country;
        return API_CALL('get', 'api/CdnLogapi/GetOverallTrafficVolume?StartDate=' + startDate + '&country=' + Country, null, 'getTrafficVolumeWidgetData', callback);
    }
} 
export function getCacheWidgetData(Dates, callback) {
    if (Dates == null) {
        return API_CALL('get', 'api/CdnLogapi/GetOverallCacheEfficiency?StartDate=2018-10-04&Country=all', null, 'getCacheWidgetData', callback);
    }
    else if (Dates !== null) {
        var startDate = Dates.startDate;
        var Country = Dates.Country;
        return API_CALL('get', 'api/CdnLogapi/GetOverallCacheEfficiency?StartDate=' + startDate + '&country=' + Country, null, 'getCacheWidgetData', callback);
    }
} 
export function getPeakTrafficWidgetData(Dates, callback) {
    if (Dates == null) {
        return API_CALL('get', 'api/CdnLogapi/GetOverallPeakTraffic?StartDate=2018-10-04', null, 'getPeakTrafficWidgetData', callback);
    }
    else if (Dates !== null) {
        var startDate = Dates.startDate;
        return API_CALL('get', 'api/CdnLogapi/GetOverallPeakTraffic?StartDate=' + startDate, null, 'getPeakTrafficWidgetData', callback);
    }
} 
export function getClientBarChartDD(startDate, CC) {
    return API_CALL('get', 'api/CdnLogapi/DrilldownForPeakTrafficByClient?Start_Date=' + startDate + '&CC=' + CC, null, 'getClientBarChartDD');
} 
export function getPeakTrafficPredictionChart() {
    return API_CALL('get', 'api/CdnLogapi/GetPeakTrafficPrediction', null, 'getPeakTrafficPredictionChart');
}
export function getCacheWidgetDD(startDate, CC) {
    return API_CALL('get', 'api/CdnLogapi/DrilldownForOverallCacheEfficiency?StartDate=' + startDate + '&Country=' + CC, null, 'getCacheWidgetDD');
} 
export function getPeakTrafficWidgetDD(startDate) {
    return API_CALL('get', 'api/CdnLogapi/DrilldownForOverallPeakTraffic?StartDate=' + startDate, null, 'getPeakTrafficWidgetDD');
} 
export function getTrafficWidgetDD(startDate,CC) {
    return API_CALL('get', 'api/CdnLogapi/DrilldownForOverallTrafficVolume?StartDate=' + startDate + '&Country=' + CC, null, 'getTrafficWidgetDD');
}
export function getPlanCDNBarChartDD(startDate, ID) {
    return API_CALL('get', 'api/CdnLogapi/DrilldownForPeakTrafficByCDN?Start_Date=' + startDate + '&Distr_id=' + ID, null, 'getPlanCDNBarChartDD');
}
export function getPeakISPBarChartDD(startDate, CC, RawID) {
    return API_CALL('get', 'api/CdnLogapi/DrilldownForPeakTrafficByISP?StartDate=' + startDate + '&country=' + CC + '&raw=' + RawID, null, 'getPeakISPBarChartDD');
} 
export function getTrafficCoserverBarChartDD(startDate,ID, CC) {
    return API_CALL('get', 'api/CdnLogapi/DrilldownForTrafficByCoserverId?StartDate=' + startDate + '&coserverId=' + ID + '&country=' + CC, null, 'getTrafficCoserverBarChartDD');
} 
export function getCacheImpactBarChartDD(startDate, ID, CC) {
    return API_CALL('get', 'api/CdnLogapi/DrilldownForCacheEfficiencyAndImpact?Start_Date=' + startDate + '&Coserver_id=' + ID + '&country=' + CC, null, 'getCacheImpactBarChartDD');
}
export function getPlanCacheIspBarChartDD(startDate, Raw, CC) {
    return API_CALL('get', 'api/CdnLogapi/DrilldownForCacheEfficiencyByISP?StartDate=' + startDate + '&raw=' + Raw + '&country=' + CC, null, 'getPlanCacheIspBarChartDD');
}
export function getPlanCacheCDNBarChartDD(startDate, CC) {
    return API_CALL('get', 'api/CdnLogapi/DrilldownCacheEfficiencybyCDN?StartDate=' + startDate + '&country=' + CC, null, 'getPlanCacheCDNBarChartDD');
}
export function getPredictionChartDD(startDate, CC) {
    return API_CALL('get', 'api/CdnLogapi/DrilldownPeakTrafficPredictionForCDN?Start_Date=' + startDate + '&CC=' + CC, null, 'getPredictionChartDD');
}
export function getLocalCDNtoClientBarChartDD(startDate, CC) {
    return API_CALL('get', 'api/CdnLogapi/LocalizationForCdnToClient?StartDate=' + startDate + '&country=' + CC, null, 'getLocalCDNtoClientBarChartDD');
}
export function getSecLocalCDNBarChartDD(startDate, ID, CC) {
    return API_CALL('get', 'api/CdnLogapi/LocalizationByISPCdnToClient?StartDate=' + startDate + '&DistrId=' + ID + '&ClientId=' + CC, null, 'getSecLocalCDNBarChartDD');
}
export function getThirdLocalCDNTableDD(startDate, CC, ID,ASN) {
    return API_CALL('get', 'api/CdnLogapi/DrilldownLocalizationForCdnToClient?StartDate=' + startDate + '&country=' + CC + '&ClientId=' + ID + '&asn=' + ASN, null, 'getThirdLocalCDNTableDD');
} 
export function getLocalClientBarChartDD(startDate, CC) {
    return API_CALL('get', 'api/CdnLogapi/LocalizationForClientToCDN?StartDate=' + startDate + '&clientId=' + CC, null, 'getLocalClientBarChartDD');
} 
export function getLocalClientTableDD(startDate, ID, CC) {
    return API_CALL('get', 'api/CdnLogapi/DrilldownforCDNInboundOutbound_ClientToCDN?StartDate=' + startDate + '&ClientId=' + ID + '&country=' + CC, null, 'getLocalClientTableDD');
}
 