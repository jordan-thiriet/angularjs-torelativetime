'use strict';

/**
 * This is an angularjs filter for date.
 * It gives NSDate the ability to report times like "A moment ago", "30 seconds ago", "5 minutes ago", "Yesterday", "Last month", "2 years ago", and so on.
 */

angular.module('toRelativeTime', []).filter('toRelativeTime', function () {
                                            return function (date,iso_code) {
                                            if (typeof date === 'undefined') {
                                            return '';
                                            }
                                            var labels = i18n(iso_code);    // Get labels
                                            /*Define datetime for calculate diff*/
                                            var date1 = new Date(date);
                                            var date2 = new Date(); //Now
                                            /*Calculate diff between two date*/
                                            var tmp = date2 - date1;
                                            var mins = ((tmp/1000)/60);
                                            var text = '';
                                            
                                            /*Put i18n text*/
                                            if(mins < 1) text = labels.seconde_ago;
                                            else if(mins < 2) text = labels.minute_ago;
                                            else if(mins < 60) text = labelsToValue(labels.minutes_ago, mins);
                                            else if(mins < 120) text = labels.hour_ago;
                                            else if(mins < 1440) text = labelsToValue(labels.hours_ago,mins/60);
                                            else if(mins < 2880) text = labels.yesterday;
                                            else if(mins < 10080) text = labelsToValue(labels.days_ago,mins/1440);
                                            else if(mins < 20160) text = labels.week_ago;
                                            else if(mins < 43829.0639) text = labelsToValue(labels.weeks_ago,mins/10080);
                                            else if(mins < 87658.1278) text = labels.month_ago;
                                            else if(mins < 525948.766) text = labelsToValue(labels.months_ago,mins/43829.0639);
                                            else if(mins < 1051897.532) text = labels.year_ago;
                                            else if(mins >= 1051897.532) text = labelsToValue(labels.years_ago,mins/525948.766);
                                            
                                            return text;
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
                                            seconde_ago: 'a l\'instant',
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
                                            seconde_ago: 'just now',
                                            days_ago: '%d days ago',
                                            week_ago: '1 week ago',
                                            weeks_ago: '%d weeks ago',
                                            month_ago: '1 month ago',
                                            months_ago: '%d months ago',
                                            year_ago: '1 year ago',
                                            years_ago: '%d years ago'
                                            };
                                            
                                            /*Portuguese*/
                                            var labels_pt = {
                                            yesterday: 'ontem',
                                            hour_ago: '1 hora atrás',
                                            hours_ago: '%d horas atrás',
                                            minute_ago: '1 minute atrás',
                                            minutes_ago: '%d minutos atrás',
                                            seconde_ago: 'agora mesmo',
                                            days_ago: '%d dias atrás',
                                            week_ago: '1 semana atrás',
                                            weeks_ago: '%d semanas atrás',
                                            month_ago: '1 mês atrás',
                                            months_ago: '%d meses atrás',
                                            year_ago: '1 ano passado',
                                            years_ago: '%d anos atrás'
                                            };
                                            
                                            /*Italian*/
                                            var labels_it = {
                                            yesterday: 'ieri',
                                            hour_ago: '1 ora fa',
                                            hours_ago: '%d ore fa',
                                            minute_ago: '1 minuto fa',
                                            minutes_ago: '%d minuti fa',
                                            seconde_ago: 'ora',
                                            days_ago: '%d giorni fa',
                                            week_ago: '1 settimana fa',
                                            weeks_ago: '%d settimane fa',
                                            month_ago: '1 mese fa',
                                            months_ago: '%d mesi fa',
                                            year_ago: '1 anno fa',
                                            years_ago: '%d anni fa'
                                            };
                                            
                                            /*Espagnol*/
                                            var labels_es = {
                                            yesterday: 'ayer',
                                            hour_ago: 'hace 1 hora',
                                            hours_ago: 'hace %d horas',
                                            minute_ago: 'hace 1 minuto',
                                            minutes_ago: 'hace %d minutos',
                                            seconde_ago: 'ahora mismo',
                                            days_ago: 'hace %d días',
                                            week_ago: 'hace 1 semana',
                                            weeks_ago: 'hace %d semanas',
                                            month_ago: 'hace 1 mes',
                                            months_ago: 'hace %d meses',
                                            year_ago: 'hace 1 día',
                                            years_ago: 'hace %d años'
                                            };
                                            
                                            /*Deutch*/
                                            var labels_de = {
                                            yesterday: 'Gestern',
                                            hour_ago: 'Vor 1 Stunde',
                                            hours_ago: 'Vor %d Stunden',
                                            minute_ago: 'Vor 1 Minute',
                                            minutes_ago: 'Vor %d Minuten',
                                            seconde_ago: 'Gerade eben',
                                            days_ago: 'Vor %d Tagen',
                                            week_ago: 'Vor 1 Woche',
                                            weeks_ago: 'Vor %d Wochen',
                                            month_ago: 'Vor 1 Monat',
                                            months_ago: 'Vor %d Monaten',
                                            year_ago: 'Vor 1 Jahr',
                                            years_ago: 'Vor %d Jahren'
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
                                            case 'pt_PT':
                                            labels = labels_pt;
                                            break;
                                            case 'es_ES':
                                            labels = labels_es;
                                            break;
                                            case 'it_IT':
                                            labels = labels_it;
                                            break;
                                            case 'de_DE':
                                            labels = labels_de;
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
                                            return labels.replace('%d',Math.floor(value));
                                            }
                                            });