'use strict';

angular.module('toDateAgo', []).filter('toDateAgo', function () {
    return function (date,iso_code) {
        var labels = i18n(iso_code);    // Get labels
        var split = date.split(' ');    // Split datetime => array[0]: date, array[1]: time
        var date = split[0].split('-'); // Split date to year: array[0], month: array[1], day: array[2]
        var time = split[1].split(':'); // Split time to hour: array[0], minutes: array[1], seconds: array[2]

        /*Define datetime for calculate diff*/
        var date1 = new Date(date[0],date[1]-1 ,date[2],time[0],time[1],time[2]);

        var date2 = new Date(); //Now

        /*Calculate diff between two date*/
        var tmp = date2 - date1;


        /*Extract seconds diff*/
        tmp = Math.floor(tmp/1000);
        var sec = tmp % 60;

        /*Extract minutes diff*/
        tmp = Math.floor((tmp-sec)/60);
        var min = tmp % 60;

        /*Extract hours diff*/
        tmp = Math.floor((tmp-min)/60);
        var hour = tmp % 24;

        /*Extract days diff*/
        tmp = Math.floor((tmp-hour)/24);
        var day = tmp;


        var value = '';

        /*Less than a day*/
        if(day === 0) {
            if(hour === 1) {
                value = labels.hour_ago;
            } else if(hour > 1) {
                value = labelsToValue(labels.hours_ago,hour);
            } else if(min === 1) {
                value = labels.minute_ago;
            } else if(min > 1) {
                value = labelsToValue(labels.minutes_ago,min);
            } else {
                value = labels.seconde_ago;
            }
        }
        /*Yesterday*/
        else if(day === 1) {
            value = labels.yesterday;
        }
        /*Less than a week and up to 2 days*/
        else if(day < 7) {
            value = labelsToValue(labels.days_ago,day);
        }
        /*Less than a month*/
        else if(day < 30) {
            var week = Math.floor(day/7);
            if(week === 1) {
                value = labels.week_ago;
            } else {
                value = labelsToValue(labels.weeks_ago, week);
            }
        }
        /*Up to 1 month and less than 1 year*/
        else if(day >= 30 && day < 365) {
            var month = Math.floor(day/30);
            if(month === 1) {
                value = labels.month_ago;
            } else {
                value = labelsToValue(labels.months_ago, Math.floor(day/30));
            }
        }
        /*1 year and up to 1 year*/
        else {
            var year = Math.floor(day/365);
            if(year === 1) {
                value = labels.year_ago;
            } else {
                value = labelsToValue(labels.years_ago, year);
            }
        }
        return value;
    };

    /**
     * Return the labels of the choice language
     *
     * @param iso_code code of language (fr_FR, en_EN)
     * @returns {{}}
     */
    function i18n(iso_code) {

        /*Translate*/

        /*French*/
        var labels_fr = {
            yesterday: 'hier',
            hour_ago: 'il y a 1 heure',
            hours_ago: 'il y a %d heures',
            minute_ago: 'il y a 1 minute',
            minutes_ago: 'il y a %d minutes',
            seconde_ago: 'il y a moins d\'une minute',
            days_ago: 'il y a %d jours',
            week_ago: 'il y a 1 semaine',
            weeks_ago: 'il y a %d semaines',
            month_ago: 'il y a 1 mois',
            months_ago: 'il y a %d mois',
            year_ago: 'il y a 1 an',
            years_ago: 'il y a %d ans'
        };

        /*English*/
        var labels_en = {
            yesterday: 'yesterday',
            hour_ago: '1 hour ago',
            hours_ago: '%d hours ago',
            minute_ago: '1 minute ago',
            minutes_ago: '%d minutes ago',
            seconde_ago: 'less than a minute',
            days_ago: '%d days ago',
            week_ago: '1 week ago',
            weeks_ago: '%d weeks ago',
            month_ago: '1 month ago',
            months_ago: '%d months ago',
            year_ago: '1 year ago',
            years_ago: '%d years ago'
        };

        /*End translate*/

        var labels = {};

        /*Check of iso_code for return translate*/
        switch (iso_code) {
            case 'fr_FR':
                labels = labels_fr;
                break;
            case 'en_EN':
                labels = labels_en;
                break;
            default :
                labels = labels_en;
        }

        return labels;
    }

    /**
     *
     * Return the text with value replaced
     *
     * @param labels text value
     * @param value value (Hours, Seconds, weeks etc...)
     * @returns {*}
     */
    function labelsToValue(labels, value) {
        return labels.replace('%d',value);
    }
});