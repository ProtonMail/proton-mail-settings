import moment from 'moment';
import { c } from 'ttag';

export const DAY_MILLISECONDS = 24 * 60 * 60 * 1000;

export const AutoReplyDuration = {
    FIXED: 0,
    DAILY: 1,
    WEEKLY: 2,
    MONTHLY: 3,
    PERMANENT: 4
};

export const getDurationOptions = () => [
    {
        text: c('Option').t`Fixed duration`,
        value: AutoReplyDuration.FIXED
    },
    {
        text: c('Option').t`Repeat daily`,
        value: AutoReplyDuration.DAILY
    },
    {
        text: c('Option').t`Repeat weekly`,
        value: AutoReplyDuration.WEEKLY
    },
    {
        text: c('Option').t`Repeat monthly`,
        value: AutoReplyDuration.MONTHLY
    },
    {
        text: c('Option').t`Permanent`,
        value: AutoReplyDuration.PERMANENT
    }
];

export const getWeekdayOptions = () => {
    // TODO: adjust for timezone I guess
    const firstDayOfWeek = moment.localeData().firstDayOfWeek();
    return moment.weekdays(true).map((label, index) => ({ label, value: (index + firstDayOfWeek) % 7 }));
};

export const getDaysOfMonthOptions = () => [
    { text: c('Option').t`1st of the month`, value: 0 },
    { text: c('Option').t`2nd of the month`, value: 1 },
    { text: c('Option').t`3rd of the month`, value: 2 },
    { text: c('Option').t`4th of the month`, value: 3 },
    { text: c('Option').t`5th of the month`, value: 4 },
    { text: c('Option').t`6th of the month`, value: 5 },
    { text: c('Option').t`7th of the month`, value: 6 },
    { text: c('Option').t`8th of the month`, value: 7 },
    { text: c('Option').t`9th of the month`, value: 8 },
    { text: c('Option').t`10th of the month`, value: 9 },
    { text: c('Option').t`11th of the month`, value: 10 },
    { text: c('Option').t`12th of the month`, value: 11 },
    { text: c('Option').t`13th of the month`, value: 12 },
    { text: c('Option').t`14th of the month`, value: 13 },
    { text: c('Option').t`15th of the month`, value: 14 },
    { text: c('Option').t`16th of the month`, value: 15 },
    { text: c('Option').t`17th of the month`, value: 16 },
    { text: c('Option').t`18th of the month`, value: 17 },
    { text: c('Option').t`19th of the month`, value: 18 },
    { text: c('Option').t`20th of the month`, value: 19 },
    { text: c('Option').t`21st of the month`, value: 20 },
    { text: c('Option').t`22nd of the month`, value: 21 },
    { text: c('Option').t`23rd of the month`, value: 22 },
    { text: c('Option').t`24th of the month`, value: 23 },
    { text: c('Option').t`25th of the month`, value: 24 },
    { text: c('Option').t`26th of the month`, value: 25 },
    { text: c('Option').t`27th of the month`, value: 26 },
    { text: c('Option').t`28th of the month`, value: 27 },
    { text: c('Option').t`29th of the month`, value: 28 },
    { text: c('Option').t`30th of the month`, value: 29 },
    { text: c('Option').t`31st of the month`, value: 30 }
];

export const getTimezoneOptions = () => [
    {
        text: 'Africa/Abidjan: UTC +00:00',
        value: 'Africa/Abidjan'
    },
    {
        text: 'Africa/Accra: UTC +00:00',
        value: 'Africa/Accra'
    },
    {
        text: 'Africa/Addis_Ababa: UTC +03:00',
        value: 'Africa/Addis_Ababa'
    },
    {
        text: 'Africa/Algiers: UTC +01:00',
        value: 'Africa/Algiers'
    },
    {
        text: 'Africa/Asmara: UTC +03:00',
        value: 'Africa/Asmara'
    },
    {
        text: 'Africa/Asmera: UTC +03:00',
        value: 'Africa/Asmera'
    },
    {
        text: 'Africa/Bamako: UTC +00:00',
        value: 'Africa/Bamako'
    },
    {
        text: 'Africa/Bangui: UTC +01:00',
        value: 'Africa/Bangui'
    },
    {
        text: 'Africa/Banjul: UTC +00:00',
        value: 'Africa/Banjul'
    },
    {
        text: 'Africa/Bissau: UTC +00:00',
        value: 'Africa/Bissau'
    },
    {
        text: 'Africa/Blantyre: UTC +02:00',
        value: 'Africa/Blantyre'
    },
    {
        text: 'Africa/Brazzaville: UTC +01:00',
        value: 'Africa/Brazzaville'
    },
    {
        text: 'Africa/Bujumbura: UTC +02:00',
        value: 'Africa/Bujumbura'
    },
    {
        text: 'Africa/Cairo: UTC +02:00',
        value: 'Africa/Cairo'
    },
    {
        text: 'Africa/Casablanca: UTC +00:00',
        value: 'Africa/Casablanca'
    },
    {
        text: 'Africa/Ceuta: UTC +02:00',
        value: 'Africa/Ceuta'
    },
    {
        text: 'Africa/Conakry: UTC +00:00',
        value: 'Africa/Conakry'
    },
    {
        text: 'Africa/Dakar: UTC +00:00',
        value: 'Africa/Dakar'
    },
    {
        text: 'Africa/Dar_es_Salaam: UTC +03:00',
        value: 'Africa/Dar_es_Salaam'
    },
    {
        text: 'Africa/Djibouti: UTC +03:00',
        value: 'Africa/Djibouti'
    },
    {
        text: 'Africa/Douala: UTC +01:00',
        value: 'Africa/Douala'
    },
    {
        text: 'Africa/El_Aaiun: UTC +00:00',
        value: 'Africa/El_Aaiun'
    },
    {
        text: 'Africa/Freetown: UTC +00:00',
        value: 'Africa/Freetown'
    },
    {
        text: 'Africa/Gaborone: UTC +02:00',
        value: 'Africa/Gaborone'
    },
    {
        text: 'Africa/Harare: UTC +02:00',
        value: 'Africa/Harare'
    },
    {
        text: 'Africa/Johannesburg: UTC +02:00',
        value: 'Africa/Johannesburg'
    },
    {
        text: 'Africa/Juba: UTC +03:00',
        value: 'Africa/Juba'
    },
    {
        text: 'Africa/Kampala: UTC +03:00',
        value: 'Africa/Kampala'
    },
    {
        text: 'Africa/Khartoum: UTC +02:00',
        value: 'Africa/Khartoum'
    },
    {
        text: 'Africa/Kigali: UTC +02:00',
        value: 'Africa/Kigali'
    },
    {
        text: 'Africa/Kinshasa: UTC +01:00',
        value: 'Africa/Kinshasa'
    },
    {
        text: 'Africa/Lagos: UTC +01:00',
        value: 'Africa/Lagos'
    },
    {
        text: 'Africa/Libreville: UTC +01:00',
        value: 'Africa/Libreville'
    },
    {
        text: 'Africa/Lome: UTC +00:00',
        value: 'Africa/Lome'
    },
    {
        text: 'Africa/Luanda: UTC +01:00',
        value: 'Africa/Luanda'
    },
    {
        text: 'Africa/Lubumbashi: UTC +02:00',
        value: 'Africa/Lubumbashi'
    },
    {
        text: 'Africa/Lusaka: UTC +02:00',
        value: 'Africa/Lusaka'
    },
    {
        text: 'Africa/Malabo: UTC +01:00',
        value: 'Africa/Malabo'
    },
    {
        text: 'Africa/Maputo: UTC +02:00',
        value: 'Africa/Maputo'
    },
    {
        text: 'Africa/Maseru: UTC +02:00',
        value: 'Africa/Maseru'
    },
    {
        text: 'Africa/Mbabane: UTC +02:00',
        value: 'Africa/Mbabane'
    },
    {
        text: 'Africa/Mogadishu: UTC +03:00',
        value: 'Africa/Mogadishu'
    },
    {
        text: 'Africa/Monrovia: UTC +00:00',
        value: 'Africa/Monrovia'
    },
    {
        text: 'Africa/Nairobi: UTC +03:00',
        value: 'Africa/Nairobi'
    },
    {
        text: 'Africa/Ndjamena: UTC +01:00',
        value: 'Africa/Ndjamena'
    },
    {
        text: 'Africa/Niamey: UTC +01:00',
        value: 'Africa/Niamey'
    },
    {
        text: 'Africa/Nouakchott: UTC +00:00',
        value: 'Africa/Nouakchott'
    },
    {
        text: 'Africa/Ouagadougou: UTC +00:00',
        value: 'Africa/Ouagadougou'
    },
    {
        text: 'Africa/Porto-Novo: UTC +01:00',
        value: 'Africa/Porto-Novo'
    },
    {
        text: 'Africa/Sao_Tome: UTC +00:00',
        value: 'Africa/Sao_Tome'
    },
    {
        text: 'Africa/Timbuktu: UTC +00:00',
        value: 'Africa/Timbuktu'
    },
    {
        text: 'Africa/Tripoli: UTC +02:00',
        value: 'Africa/Tripoli'
    },
    {
        text: 'Africa/Tunis: UTC +01:00',
        value: 'Africa/Tunis'
    },
    {
        text: 'Africa/Windhoek: UTC +02:00',
        value: 'Africa/Windhoek'
    },
    {
        text: 'America/Adak: UTC -09:00',
        value: 'America/Adak'
    },
    {
        text: 'America/Anchorage: UTC -08:00',
        value: 'America/Anchorage'
    },
    {
        text: 'America/Anguilla: UTC -04:00',
        value: 'America/Anguilla'
    },
    {
        text: 'America/Antigua: UTC -04:00',
        value: 'America/Antigua'
    },
    {
        text: 'America/Araguaina: UTC -03:00',
        value: 'America/Araguaina'
    },
    {
        text: 'America/Argentina/Buenos_Aires: UTC -03:00',
        value: 'America/Argentina/Buenos_Aires'
    },
    {
        text: 'America/Argentina/Catamarca: UTC -03:00',
        value: 'America/Argentina/Catamarca'
    },
    {
        text: 'America/Argentina/ComodRivadavia: UTC -03:00',
        value: 'America/Argentina/ComodRivadavia'
    },
    {
        text: 'America/Argentina/Cordoba: UTC -03:00',
        value: 'America/Argentina/Cordoba'
    },
    {
        text: 'America/Argentina/Jujuy: UTC -03:00',
        value: 'America/Argentina/Jujuy'
    },
    {
        text: 'America/Argentina/La_Rioja: UTC -03:00',
        value: 'America/Argentina/La_Rioja'
    },
    {
        text: 'America/Argentina/Mendoza: UTC -03:00',
        value: 'America/Argentina/Mendoza'
    },
    {
        text: 'America/Argentina/Rio_Gallegos: UTC -03:00',
        value: 'America/Argentina/Rio_Gallegos'
    },
    {
        text: 'America/Argentina/Salta: UTC -03:00',
        value: 'America/Argentina/Salta'
    },
    {
        text: 'America/Argentina/San_Juan: UTC -03:00',
        value: 'America/Argentina/San_Juan'
    },
    {
        text: 'America/Argentina/San_Luis: UTC -03:00',
        value: 'America/Argentina/San_Luis'
    },
    {
        text: 'America/Argentina/Tucuman: UTC -03:00',
        value: 'America/Argentina/Tucuman'
    },
    {
        text: 'America/Argentina/Ushuaia: UTC -03:00',
        value: 'America/Argentina/Ushuaia'
    },
    {
        text: 'America/Aruba: UTC -04:00',
        value: 'America/Aruba'
    },
    {
        text: 'America/Asuncion: UTC -04:00',
        value: 'America/Asuncion'
    },
    {
        text: 'America/Atikokan: UTC -05:00',
        value: 'America/Atikokan'
    },
    {
        text: 'America/Atka: UTC -09:00',
        value: 'America/Atka'
    },
    {
        text: 'America/Bahia: UTC -03:00',
        value: 'America/Bahia'
    },
    {
        text: 'America/Bahia_Banderas: UTC -05:00',
        value: 'America/Bahia_Banderas'
    },
    {
        text: 'America/Barbados: UTC -04:00',
        value: 'America/Barbados'
    },
    {
        text: 'America/Belem: UTC -03:00',
        value: 'America/Belem'
    },
    {
        text: 'America/Belize: UTC -06:00',
        value: 'America/Belize'
    },
    {
        text: 'America/Blanc-Sablon: UTC -04:00',
        value: 'America/Blanc-Sablon'
    },
    {
        text: 'America/Boa_Vista: UTC -04:00',
        value: 'America/Boa_Vista'
    },
    {
        text: 'America/Bogota: UTC -05:00',
        value: 'America/Bogota'
    },
    {
        text: 'America/Boise: UTC -06:00',
        value: 'America/Boise'
    },
    {
        text: 'America/Buenos_Aires: UTC -03:00',
        value: 'America/Buenos_Aires'
    },
    {
        text: 'America/Cambridge_Bay: UTC -06:00',
        value: 'America/Cambridge_Bay'
    },
    {
        text: 'America/Campo_Grande: UTC -04:00',
        value: 'America/Campo_Grande'
    },
    {
        text: 'America/Cancun: UTC -05:00',
        value: 'America/Cancun'
    },
    {
        text: 'America/Caracas: UTC -04:00',
        value: 'America/Caracas'
    },
    {
        text: 'America/Catamarca: UTC -03:00',
        value: 'America/Catamarca'
    },
    {
        text: 'America/Cayenne: UTC -03:00',
        value: 'America/Cayenne'
    },
    {
        text: 'America/Cayman: UTC -05:00',
        value: 'America/Cayman'
    },
    {
        text: 'America/Chicago: UTC -05:00',
        value: 'America/Chicago'
    },
    {
        text: 'America/Chihuahua: UTC -06:00',
        value: 'America/Chihuahua'
    },
    {
        text: 'America/Coral_Harbour: UTC -05:00',
        value: 'America/Coral_Harbour'
    },
    {
        text: 'America/Cordoba: UTC -03:00',
        value: 'America/Cordoba'
    },
    {
        text: 'America/Costa_Rica: UTC -06:00',
        value: 'America/Costa_Rica'
    },
    {
        text: 'America/Creston: UTC -07:00',
        value: 'America/Creston'
    },
    {
        text: 'America/Cuiaba: UTC -04:00',
        value: 'America/Cuiaba'
    },
    {
        text: 'America/Curacao: UTC -04:00',
        value: 'America/Curacao'
    },
    {
        text: 'America/Danmarkshavn: UTC +00:00',
        value: 'America/Danmarkshavn'
    },
    {
        text: 'America/Dawson: UTC -07:00',
        value: 'America/Dawson'
    },
    {
        text: 'America/Dawson_Creek: UTC -07:00',
        value: 'America/Dawson_Creek'
    },
    {
        text: 'America/Denver: UTC -06:00',
        value: 'America/Denver'
    },
    {
        text: 'America/Detroit: UTC -04:00',
        value: 'America/Detroit'
    },
    {
        text: 'America/Dominica: UTC -04:00',
        value: 'America/Dominica'
    },
    {
        text: 'America/Edmonton: UTC -06:00',
        value: 'America/Edmonton'
    },
    {
        text: 'America/Eirunepe: UTC -05:00',
        value: 'America/Eirunepe'
    },
    {
        text: 'America/El_Salvador: UTC -06:00',
        value: 'America/El_Salvador'
    },
    {
        text: 'America/Ensenada: UTC -07:00',
        value: 'America/Ensenada'
    },
    {
        text: 'America/Fort_Nelson: UTC -07:00',
        value: 'America/Fort_Nelson'
    },
    {
        text: 'America/Fort_Wayne: UTC -04:00',
        value: 'America/Fort_Wayne'
    },
    {
        text: 'America/Fortaleza: UTC -03:00',
        value: 'America/Fortaleza'
    },
    {
        text: 'America/Glace_Bay: UTC -03:00',
        value: 'America/Glace_Bay'
    },
    {
        text: 'America/Godthab: UTC -02:00',
        value: 'America/Godthab'
    },
    {
        text: 'America/Goose_Bay: UTC -03:00',
        value: 'America/Goose_Bay'
    },
    {
        text: 'America/Grand_Turk: UTC -04:00',
        value: 'America/Grand_Turk'
    },
    {
        text: 'America/Grenada: UTC -04:00',
        value: 'America/Grenada'
    },
    {
        text: 'America/Guadeloupe: UTC -04:00',
        value: 'America/Guadeloupe'
    },
    {
        text: 'America/Guatemala: UTC -06:00',
        value: 'America/Guatemala'
    },
    {
        text: 'America/Guayaquil: UTC -05:00',
        value: 'America/Guayaquil'
    },
    {
        text: 'America/Guyana: UTC -04:00',
        value: 'America/Guyana'
    },
    {
        text: 'America/Halifax: UTC -03:00',
        value: 'America/Halifax'
    },
    {
        text: 'America/Havana: UTC -04:00',
        value: 'America/Havana'
    },
    {
        text: 'America/Hermosillo: UTC -07:00',
        value: 'America/Hermosillo'
    },
    {
        text: 'America/Indiana/Indianapolis: UTC -04:00',
        value: 'America/Indiana/Indianapolis'
    },
    {
        text: 'America/Indiana/Knox: UTC -05:00',
        value: 'America/Indiana/Knox'
    },
    {
        text: 'America/Indiana/Marengo: UTC -04:00',
        value: 'America/Indiana/Marengo'
    },
    {
        text: 'America/Indiana/Petersburg: UTC -04:00',
        value: 'America/Indiana/Petersburg'
    },
    {
        text: 'America/Indiana/Tell_City: UTC -05:00',
        value: 'America/Indiana/Tell_City'
    },
    {
        text: 'America/Indiana/Vevay: UTC -04:00',
        value: 'America/Indiana/Vevay'
    },
    {
        text: 'America/Indiana/Vincennes: UTC -04:00',
        value: 'America/Indiana/Vincennes'
    },
    {
        text: 'America/Indiana/Winamac: UTC -04:00',
        value: 'America/Indiana/Winamac'
    },
    {
        text: 'America/Indianapolis: UTC -04:00',
        value: 'America/Indianapolis'
    },
    {
        text: 'America/Inuvik: UTC -06:00',
        value: 'America/Inuvik'
    },
    {
        text: 'America/Iqaluit: UTC -04:00',
        value: 'America/Iqaluit'
    },
    {
        text: 'America/Jamaica: UTC -05:00',
        value: 'America/Jamaica'
    },
    {
        text: 'America/Jujuy: UTC -03:00',
        value: 'America/Jujuy'
    },
    {
        text: 'America/Juneau: UTC -08:00',
        value: 'America/Juneau'
    },
    {
        text: 'America/Kentucky/Louisville: UTC -04:00',
        value: 'America/Kentucky/Louisville'
    },
    {
        text: 'America/Kentucky/Monticello: UTC -04:00',
        value: 'America/Kentucky/Monticello'
    },
    {
        text: 'America/Knox_IN: UTC -05:00',
        value: 'America/Knox_IN'
    },
    {
        text: 'America/Kralendijk: UTC -04:00',
        value: 'America/Kralendijk'
    },
    {
        text: 'America/La_Paz: UTC -04:00',
        value: 'America/La_Paz'
    },
    {
        text: 'America/Lima: UTC -05:00',
        value: 'America/Lima'
    },
    {
        text: 'America/Los_Angeles: UTC -07:00',
        value: 'America/Los_Angeles'
    },
    {
        text: 'America/Louisville: UTC -04:00',
        value: 'America/Louisville'
    },
    {
        text: 'America/Lower_Princes: UTC -04:00',
        value: 'America/Lower_Princes'
    },
    {
        text: 'America/Maceio: UTC -03:00',
        value: 'America/Maceio'
    },
    {
        text: 'America/Managua: UTC -06:00',
        value: 'America/Managua'
    },
    {
        text: 'America/Manaus: UTC -04:00',
        value: 'America/Manaus'
    },
    {
        text: 'America/Marigot: UTC -04:00',
        value: 'America/Marigot'
    },
    {
        text: 'America/Martinique: UTC -04:00',
        value: 'America/Martinique'
    },
    {
        text: 'America/Matamoros: UTC -05:00',
        value: 'America/Matamoros'
    },
    {
        text: 'America/Mazatlan: UTC -06:00',
        value: 'America/Mazatlan'
    },
    {
        text: 'America/Mendoza: UTC -03:00',
        value: 'America/Mendoza'
    },
    {
        text: 'America/Menominee: UTC -05:00',
        value: 'America/Menominee'
    },
    {
        text: 'America/Merida: UTC -05:00',
        value: 'America/Merida'
    },
    {
        text: 'America/Metlakatla: UTC -08:00',
        value: 'America/Metlakatla'
    },
    {
        text: 'America/Mexico_City: UTC -05:00',
        value: 'America/Mexico_City'
    },
    {
        text: 'America/Miquelon: UTC -02:00',
        value: 'America/Miquelon'
    },
    {
        text: 'America/Moncton: UTC -03:00',
        value: 'America/Moncton'
    },
    {
        text: 'America/Monterrey: UTC -05:00',
        value: 'America/Monterrey'
    },
    {
        text: 'America/Montevideo: UTC -03:00',
        value: 'America/Montevideo'
    },
    {
        text: 'America/Montreal: UTC -04:00',
        value: 'America/Montreal'
    },
    {
        text: 'America/Montserrat: UTC -04:00',
        value: 'America/Montserrat'
    },
    {
        text: 'America/Nassau: UTC -04:00',
        value: 'America/Nassau'
    },
    {
        text: 'America/New_York: UTC -04:00',
        value: 'America/New_York'
    },
    {
        text: 'America/Nipigon: UTC -04:00',
        value: 'America/Nipigon'
    },
    {
        text: 'America/Nome: UTC -08:00',
        value: 'America/Nome'
    },
    {
        text: 'America/Noronha: UTC -02:00',
        value: 'America/Noronha'
    },
    {
        text: 'America/North_Dakota/Beulah: UTC -05:00',
        value: 'America/North_Dakota/Beulah'
    },
    {
        text: 'America/North_Dakota/Center: UTC -05:00',
        value: 'America/North_Dakota/Center'
    },
    {
        text: 'America/North_Dakota/New_Salem: UTC -05:00',
        value: 'America/North_Dakota/New_Salem'
    },
    {
        text: 'America/Ojinaga: UTC -06:00',
        value: 'America/Ojinaga'
    },
    {
        text: 'America/Panama: UTC -05:00',
        value: 'America/Panama'
    },
    {
        text: 'America/Pangnirtung: UTC -04:00',
        value: 'America/Pangnirtung'
    },
    {
        text: 'America/Paramaribo: UTC -03:00',
        value: 'America/Paramaribo'
    },
    {
        text: 'America/Phoenix: UTC -07:00',
        value: 'America/Phoenix'
    },
    {
        text: 'America/Port-au-Prince: UTC -04:00',
        value: 'America/Port-au-Prince'
    },
    {
        text: 'America/Port_of_Spain: UTC -04:00',
        value: 'America/Port_of_Spain'
    },
    {
        text: 'America/Porto_Acre: UTC -05:00',
        value: 'America/Porto_Acre'
    },
    {
        text: 'America/Porto_Velho: UTC -04:00',
        value: 'America/Porto_Velho'
    },
    {
        text: 'America/Puerto_Rico: UTC -04:00',
        value: 'America/Puerto_Rico'
    },
    {
        text: 'America/Punta_Arenas: UTC -03:00',
        value: 'America/Punta_Arenas'
    },
    {
        text: 'America/Rainy_River: UTC -05:00',
        value: 'America/Rainy_River'
    },
    {
        text: 'America/Rankin_Inlet: UTC -05:00',
        value: 'America/Rankin_Inlet'
    },
    {
        text: 'America/Recife: UTC -03:00',
        value: 'America/Recife'
    },
    {
        text: 'America/Regina: UTC -06:00',
        value: 'America/Regina'
    },
    {
        text: 'America/Resolute: UTC -05:00',
        value: 'America/Resolute'
    },
    {
        text: 'America/Rio_Branco: UTC -05:00',
        value: 'America/Rio_Branco'
    },
    {
        text: 'America/Rosario: UTC -03:00',
        value: 'America/Rosario'
    },
    {
        text: 'America/Santa_Isabel: UTC -07:00',
        value: 'America/Santa_Isabel'
    },
    {
        text: 'America/Santarem: UTC -03:00',
        value: 'America/Santarem'
    },
    {
        text: 'America/Santiago: UTC -04:00',
        value: 'America/Santiago'
    },
    {
        text: 'America/Santo_Domingo: UTC -04:00',
        value: 'America/Santo_Domingo'
    },
    {
        text: 'America/Sao_Paulo: UTC -03:00',
        value: 'America/Sao_Paulo'
    },
    {
        text: 'America/Scoresbysund: UTC +00:00',
        value: 'America/Scoresbysund'
    },
    {
        text: 'America/Shiprock: UTC -06:00',
        value: 'America/Shiprock'
    },
    {
        text: 'America/Sitka: UTC -08:00',
        value: 'America/Sitka'
    },
    {
        text: 'America/St_Barthelemy: UTC -04:00',
        value: 'America/St_Barthelemy'
    },
    {
        text: 'America/St_Johns: UTC -02:30',
        value: 'America/St_Johns'
    },
    {
        text: 'America/St_Kitts: UTC -04:00',
        value: 'America/St_Kitts'
    },
    {
        text: 'America/St_Lucia: UTC -04:00',
        value: 'America/St_Lucia'
    },
    {
        text: 'America/St_Thomas: UTC -04:00',
        value: 'America/St_Thomas'
    },
    {
        text: 'America/St_Vincent: UTC -04:00',
        value: 'America/St_Vincent'
    },
    {
        text: 'America/Swift_Current: UTC -06:00',
        value: 'America/Swift_Current'
    },
    {
        text: 'America/Tegucigalpa: UTC -06:00',
        value: 'America/Tegucigalpa'
    },
    {
        text: 'America/Thule: UTC -03:00',
        value: 'America/Thule'
    },
    {
        text: 'America/Thunder_Bay: UTC -04:00',
        value: 'America/Thunder_Bay'
    },
    {
        text: 'America/Tijuana: UTC -07:00',
        value: 'America/Tijuana'
    },
    {
        text: 'America/Toronto: UTC -04:00',
        value: 'America/Toronto'
    },
    {
        text: 'America/Tortola: UTC -04:00',
        value: 'America/Tortola'
    },
    {
        text: 'America/Vancouver: UTC -07:00',
        value: 'America/Vancouver'
    },
    {
        text: 'America/Virgin: UTC -04:00',
        value: 'America/Virgin'
    },
    {
        text: 'America/Whitehorse: UTC -07:00',
        value: 'America/Whitehorse'
    },
    {
        text: 'America/Winnipeg: UTC -05:00',
        value: 'America/Winnipeg'
    },
    {
        text: 'America/Yakutat: UTC -08:00',
        value: 'America/Yakutat'
    },
    {
        text: 'America/Yellowknife: UTC -06:00',
        value: 'America/Yellowknife'
    },
    {
        text: 'Antarctica/Casey: UTC +08:00',
        value: 'Antarctica/Casey'
    },
    {
        text: 'Antarctica/Davis: UTC +07:00',
        value: 'Antarctica/Davis'
    },
    {
        text: 'Antarctica/DumontDUrville: UTC +10:00',
        value: 'Antarctica/DumontDUrville'
    },
    {
        text: 'Antarctica/Macquarie: UTC +11:00',
        value: 'Antarctica/Macquarie'
    },
    {
        text: 'Antarctica/Mawson: UTC +05:00',
        value: 'Antarctica/Mawson'
    },
    {
        text: 'Antarctica/McMurdo: UTC +12:00',
        value: 'Antarctica/McMurdo'
    },
    {
        text: 'Antarctica/Palmer: UTC -03:00',
        value: 'Antarctica/Palmer'
    },
    {
        text: 'Antarctica/Rothera: UTC -03:00',
        value: 'Antarctica/Rothera'
    },
    {
        text: 'Antarctica/South_Pole: UTC +12:00',
        value: 'Antarctica/South_Pole'
    },
    {
        text: 'Antarctica/Syowa: UTC +03:00',
        value: 'Antarctica/Syowa'
    },
    {
        text: 'Antarctica/Troll: UTC +02:00',
        value: 'Antarctica/Troll'
    },
    {
        text: 'Antarctica/Vostok: UTC +06:00',
        value: 'Antarctica/Vostok'
    },
    {
        text: 'Arctic/Longyearbyen: UTC +02:00',
        value: 'Arctic/Longyearbyen'
    },
    {
        text: 'Asia/Aden: UTC +03:00',
        value: 'Asia/Aden'
    },
    {
        text: 'Asia/Almaty: UTC +06:00',
        value: 'Asia/Almaty'
    },
    {
        text: 'Asia/Amman: UTC +03:00',
        value: 'Asia/Amman'
    },
    {
        text: 'Asia/Anadyr: UTC +12:00',
        value: 'Asia/Anadyr'
    },
    {
        text: 'Asia/Aqtau: UTC +05:00',
        value: 'Asia/Aqtau'
    },
    {
        text: 'Asia/Aqtobe: UTC +05:00',
        value: 'Asia/Aqtobe'
    },
    {
        text: 'Asia/Ashgabat: UTC +05:00',
        value: 'Asia/Ashgabat'
    },
    {
        text: 'Asia/Ashkhabad: UTC +05:00',
        value: 'Asia/Ashkhabad'
    },
    {
        text: 'Asia/Atyrau: UTC +05:00',
        value: 'Asia/Atyrau'
    },
    {
        text: 'Asia/Baghdad: UTC +03:00',
        value: 'Asia/Baghdad'
    },
    {
        text: 'Asia/Bahrain: UTC +03:00',
        value: 'Asia/Bahrain'
    },
    {
        text: 'Asia/Baku: UTC +04:00',
        value: 'Asia/Baku'
    },
    {
        text: 'Asia/Bangkok: UTC +07:00',
        value: 'Asia/Bangkok'
    },
    {
        text: 'Asia/Barnaul: UTC +07:00',
        value: 'Asia/Barnaul'
    },
    {
        text: 'Asia/Beirut: UTC +03:00',
        value: 'Asia/Beirut'
    },
    {
        text: 'Asia/Bishkek: UTC +06:00',
        value: 'Asia/Bishkek'
    },
    {
        text: 'Asia/Brunei: UTC +08:00',
        value: 'Asia/Brunei'
    },
    {
        text: 'Asia/Calcutta: UTC +05:30',
        value: 'Asia/Calcutta'
    },
    {
        text: 'Asia/Chita: UTC +09:00',
        value: 'Asia/Chita'
    },
    {
        text: 'Asia/Choibalsan: UTC +08:00',
        value: 'Asia/Choibalsan'
    },
    {
        text: 'Asia/Chongqing: UTC +08:00',
        value: 'Asia/Chongqing'
    },
    {
        text: 'Asia/Chungking: UTC +08:00',
        value: 'Asia/Chungking'
    },
    {
        text: 'Asia/Colombo: UTC +05:30',
        value: 'Asia/Colombo'
    },
    {
        text: 'Asia/Dacca: UTC +06:00',
        value: 'Asia/Dacca'
    },
    {
        text: 'Asia/Damascus: UTC +03:00',
        value: 'Asia/Damascus'
    },
    {
        text: 'Asia/Dhaka: UTC +06:00',
        value: 'Asia/Dhaka'
    },
    {
        text: 'Asia/Dili: UTC +09:00',
        value: 'Asia/Dili'
    },
    {
        text: 'Asia/Dubai: UTC +04:00',
        value: 'Asia/Dubai'
    },
    {
        text: 'Asia/Dushanbe: UTC +05:00',
        value: 'Asia/Dushanbe'
    },
    {
        text: 'Asia/Famagusta: UTC +03:00',
        value: 'Asia/Famagusta'
    },
    {
        text: 'Asia/Gaza: UTC +03:00',
        value: 'Asia/Gaza'
    },
    {
        text: 'Asia/Harbin: UTC +08:00',
        value: 'Asia/Harbin'
    },
    {
        text: 'Asia/Hebron: UTC +03:00',
        value: 'Asia/Hebron'
    },
    {
        text: 'Asia/Ho_Chi_Minh: UTC +07:00',
        value: 'Asia/Ho_Chi_Minh'
    },
    {
        text: 'Asia/Hong_Kong: UTC +08:00',
        value: 'Asia/Hong_Kong'
    },
    {
        text: 'Asia/Hovd: UTC +07:00',
        value: 'Asia/Hovd'
    },
    {
        text: 'Asia/Irkutsk: UTC +08:00',
        value: 'Asia/Irkutsk'
    },
    {
        text: 'Asia/Istanbul: UTC +03:00',
        value: 'Asia/Istanbul'
    },
    {
        text: 'Asia/Jakarta: UTC +07:00',
        value: 'Asia/Jakarta'
    },
    {
        text: 'Asia/Jayapura: UTC +09:00',
        value: 'Asia/Jayapura'
    },
    {
        text: 'Asia/Jerusalem: UTC +03:00',
        value: 'Asia/Jerusalem'
    },
    {
        text: 'Asia/Kabul: UTC +04:30',
        value: 'Asia/Kabul'
    },
    {
        text: 'Asia/Kamchatka: UTC +12:00',
        value: 'Asia/Kamchatka'
    },
    {
        text: 'Asia/Karachi: UTC +05:00',
        value: 'Asia/Karachi'
    },
    {
        text: 'Asia/Kashgar: UTC +06:00',
        value: 'Asia/Kashgar'
    },
    {
        text: 'Asia/Kathmandu: UTC +05:45',
        value: 'Asia/Kathmandu'
    },
    {
        text: 'Asia/Katmandu: UTC +05:45',
        value: 'Asia/Katmandu'
    },
    {
        text: 'Asia/Khandyga: UTC +09:00',
        value: 'Asia/Khandyga'
    },
    {
        text: 'Asia/Kolkata: UTC +05:30',
        value: 'Asia/Kolkata'
    },
    {
        text: 'Asia/Krasnoyarsk: UTC +07:00',
        value: 'Asia/Krasnoyarsk'
    },
    {
        text: 'Asia/Kuala_Lumpur: UTC +08:00',
        value: 'Asia/Kuala_Lumpur'
    },
    {
        text: 'Asia/Kuching: UTC +08:00',
        value: 'Asia/Kuching'
    },
    {
        text: 'Asia/Kuwait: UTC +03:00',
        value: 'Asia/Kuwait'
    },
    {
        text: 'Asia/Macao: UTC +08:00',
        value: 'Asia/Macao'
    },
    {
        text: 'Asia/Macau: UTC +08:00',
        value: 'Asia/Macau'
    },
    {
        text: 'Asia/Magadan: UTC +11:00',
        value: 'Asia/Magadan'
    },
    {
        text: 'Asia/Makassar: UTC +08:00',
        value: 'Asia/Makassar'
    },
    {
        text: 'Asia/Manila: UTC +08:00',
        value: 'Asia/Manila'
    },
    {
        text: 'Asia/Muscat: UTC +04:00',
        value: 'Asia/Muscat'
    },
    {
        text: 'Asia/Nicosia: UTC +03:00',
        value: 'Asia/Nicosia'
    },
    {
        text: 'Asia/Novokuznetsk: UTC +07:00',
        value: 'Asia/Novokuznetsk'
    },
    {
        text: 'Asia/Novosibirsk: UTC +07:00',
        value: 'Asia/Novosibirsk'
    },
    {
        text: 'Asia/Omsk: UTC +06:00',
        value: 'Asia/Omsk'
    },
    {
        text: 'Asia/Oral: UTC +05:00',
        value: 'Asia/Oral'
    },
    {
        text: 'Asia/Phnom_Penh: UTC +07:00',
        value: 'Asia/Phnom_Penh'
    },
    {
        text: 'Asia/Pontianak: UTC +07:00',
        value: 'Asia/Pontianak'
    },
    {
        text: 'Asia/Pyongyang: UTC +09:00',
        value: 'Asia/Pyongyang'
    },
    {
        text: 'Asia/Qatar: UTC +03:00',
        value: 'Asia/Qatar'
    },
    {
        text: 'Asia/Qostanay: UTC +06:00',
        value: 'Asia/Qostanay'
    },
    {
        text: 'Asia/Qyzylorda: UTC +05:00',
        value: 'Asia/Qyzylorda'
    },
    {
        text: 'Asia/Rangoon: UTC +06:30',
        value: 'Asia/Rangoon'
    },
    {
        text: 'Asia/Riyadh: UTC +03:00',
        value: 'Asia/Riyadh'
    },
    {
        text: 'Asia/Saigon: UTC +07:00',
        value: 'Asia/Saigon'
    },
    {
        text: 'Asia/Sakhalin: UTC +11:00',
        value: 'Asia/Sakhalin'
    },
    {
        text: 'Asia/Samarkand: UTC +05:00',
        value: 'Asia/Samarkand'
    },
    {
        text: 'Asia/Seoul: UTC +09:00',
        value: 'Asia/Seoul'
    },
    {
        text: 'Asia/Shanghai: UTC +08:00',
        value: 'Asia/Shanghai'
    },
    {
        text: 'Asia/Singapore: UTC +08:00',
        value: 'Asia/Singapore'
    },
    {
        text: 'Asia/Srednekolymsk: UTC +11:00',
        value: 'Asia/Srednekolymsk'
    },
    {
        text: 'Asia/Taipei: UTC +08:00',
        value: 'Asia/Taipei'
    },
    {
        text: 'Asia/Tashkent: UTC +05:00',
        value: 'Asia/Tashkent'
    },
    {
        text: 'Asia/Tbilisi: UTC +04:00',
        value: 'Asia/Tbilisi'
    },
    {
        text: 'Asia/Tehran: UTC +04:30',
        value: 'Asia/Tehran'
    },
    {
        text: 'Asia/Tel_Aviv: UTC +03:00',
        value: 'Asia/Tel_Aviv'
    },
    {
        text: 'Asia/Thimbu: UTC +06:00',
        value: 'Asia/Thimbu'
    },
    {
        text: 'Asia/Thimphu: UTC +06:00',
        value: 'Asia/Thimphu'
    },
    {
        text: 'Asia/Tokyo: UTC +09:00',
        value: 'Asia/Tokyo'
    },
    {
        text: 'Asia/Tomsk: UTC +07:00',
        value: 'Asia/Tomsk'
    },
    {
        text: 'Asia/Ujung_Pandang: UTC +08:00',
        value: 'Asia/Ujung_Pandang'
    },
    {
        text: 'Asia/Ulaanbaatar: UTC +08:00',
        value: 'Asia/Ulaanbaatar'
    },
    {
        text: 'Asia/Ulan_Bator: UTC +08:00',
        value: 'Asia/Ulan_Bator'
    },
    {
        text: 'Asia/Urumqi: UTC +06:00',
        value: 'Asia/Urumqi'
    },
    {
        text: 'Asia/Ust-Nera: UTC +10:00',
        value: 'Asia/Ust-Nera'
    },
    {
        text: 'Asia/Vientiane: UTC +07:00',
        value: 'Asia/Vientiane'
    },
    {
        text: 'Asia/Vladivostok: UTC +10:00',
        value: 'Asia/Vladivostok'
    },
    {
        text: 'Asia/Yakutsk: UTC +09:00',
        value: 'Asia/Yakutsk'
    },
    {
        text: 'Asia/Yangon: UTC +06:30',
        value: 'Asia/Yangon'
    },
    {
        text: 'Asia/Yekaterinburg: UTC +05:00',
        value: 'Asia/Yekaterinburg'
    },
    {
        text: 'Asia/Yerevan: UTC +04:00',
        value: 'Asia/Yerevan'
    },
    {
        text: 'Atlantic/Azores: UTC +00:00',
        value: 'Atlantic/Azores'
    },
    {
        text: 'Atlantic/Bermuda: UTC -03:00',
        value: 'Atlantic/Bermuda'
    },
    {
        text: 'Atlantic/Canary: UTC +01:00',
        value: 'Atlantic/Canary'
    },
    {
        text: 'Atlantic/Cape_Verde: UTC -01:00',
        value: 'Atlantic/Cape_Verde'
    },
    {
        text: 'Atlantic/Faeroe: UTC +01:00',
        value: 'Atlantic/Faeroe'
    },
    {
        text: 'Atlantic/Faroe: UTC +01:00',
        value: 'Atlantic/Faroe'
    },
    {
        text: 'Atlantic/Jan_Mayen: UTC +02:00',
        value: 'Atlantic/Jan_Mayen'
    },
    {
        text: 'Atlantic/Madeira: UTC +01:00',
        value: 'Atlantic/Madeira'
    },
    {
        text: 'Atlantic/Reykjavik: UTC +00:00',
        value: 'Atlantic/Reykjavik'
    },
    {
        text: 'Atlantic/South_Georgia: UTC -02:00',
        value: 'Atlantic/South_Georgia'
    },
    {
        text: 'Atlantic/St_Helena: UTC +00:00',
        value: 'Atlantic/St_Helena'
    },
    {
        text: 'Atlantic/Stanley: UTC -03:00',
        value: 'Atlantic/Stanley'
    },
    {
        text: 'Australia/ACT: UTC +10:00',
        value: 'Australia/ACT'
    },
    {
        text: 'Australia/Adelaide: UTC +09:30',
        value: 'Australia/Adelaide'
    },
    {
        text: 'Australia/Brisbane: UTC +10:00',
        value: 'Australia/Brisbane'
    },
    {
        text: 'Australia/Broken_Hill: UTC +09:30',
        value: 'Australia/Broken_Hill'
    },
    {
        text: 'Australia/Canberra: UTC +10:00',
        value: 'Australia/Canberra'
    },
    {
        text: 'Australia/Currie: UTC +10:00',
        value: 'Australia/Currie'
    },
    {
        text: 'Australia/Darwin: UTC +09:30',
        value: 'Australia/Darwin'
    },
    {
        text: 'Australia/Eucla: UTC +08:45',
        value: 'Australia/Eucla'
    },
    {
        text: 'Australia/Hobart: UTC +10:00',
        value: 'Australia/Hobart'
    },
    {
        text: 'Australia/LHI: UTC +10:30',
        value: 'Australia/LHI'
    },
    {
        text: 'Australia/Lindeman: UTC +10:00',
        value: 'Australia/Lindeman'
    },
    {
        text: 'Australia/Lord_Howe: UTC +10:30',
        value: 'Australia/Lord_Howe'
    },
    {
        text: 'Australia/Melbourne: UTC +10:00',
        value: 'Australia/Melbourne'
    },
    {
        text: 'Australia/NSW: UTC +10:00',
        value: 'Australia/NSW'
    },
    {
        text: 'Australia/North: UTC +09:30',
        value: 'Australia/North'
    },
    {
        text: 'Australia/Perth: UTC +08:00',
        value: 'Australia/Perth'
    },
    {
        text: 'Australia/Queensland: UTC +10:00',
        value: 'Australia/Queensland'
    },
    {
        text: 'Australia/South: UTC +09:30',
        value: 'Australia/South'
    },
    {
        text: 'Australia/Sydney: UTC +10:00',
        value: 'Australia/Sydney'
    },
    {
        text: 'Australia/Tasmania: UTC +10:00',
        value: 'Australia/Tasmania'
    },
    {
        text: 'Australia/Victoria: UTC +10:00',
        value: 'Australia/Victoria'
    },
    {
        text: 'Australia/West: UTC +08:00',
        value: 'Australia/West'
    },
    {
        text: 'Australia/Yancowinna: UTC +09:30',
        value: 'Australia/Yancowinna'
    },
    {
        text: 'Brazil/Acre: UTC -05:00',
        value: 'Brazil/Acre'
    },
    {
        text: 'Brazil/DeNoronha: UTC -02:00',
        value: 'Brazil/DeNoronha'
    },
    {
        text: 'Brazil/East: UTC -03:00',
        value: 'Brazil/East'
    },
    {
        text: 'Brazil/West: UTC -04:00',
        value: 'Brazil/West'
    },
    {
        text: 'CET: UTC +02:00',
        value: 'CET'
    },
    {
        text: 'CST6CDT: UTC -05:00',
        value: 'CST6CDT'
    },
    {
        text: 'Canada/Atlantic: UTC -03:00',
        value: 'Canada/Atlantic'
    },
    {
        text: 'Canada/Central: UTC -05:00',
        value: 'Canada/Central'
    },
    {
        text: 'Canada/Eastern: UTC -04:00',
        value: 'Canada/Eastern'
    },
    {
        text: 'Canada/Mountain: UTC -06:00',
        value: 'Canada/Mountain'
    },
    {
        text: 'Canada/Newfoundland: UTC -02:30',
        value: 'Canada/Newfoundland'
    },
    {
        text: 'Canada/Pacific: UTC -07:00',
        value: 'Canada/Pacific'
    },
    {
        text: 'Canada/Saskatchewan: UTC -06:00',
        value: 'Canada/Saskatchewan'
    },
    {
        text: 'Canada/Yukon: UTC -07:00',
        value: 'Canada/Yukon'
    },
    {
        text: 'Chile/Continental: UTC -04:00',
        value: 'Chile/Continental'
    },
    {
        text: 'Chile/EasterIsland: UTC -06:00',
        value: 'Chile/EasterIsland'
    },
    {
        text: 'Cuba: UTC -04:00',
        value: 'Cuba'
    },
    {
        text: 'EET: UTC +03:00',
        value: 'EET'
    },
    {
        text: 'EST: UTC -05:00',
        value: 'EST'
    },
    {
        text: 'EST5EDT: UTC -04:00',
        value: 'EST5EDT'
    },
    {
        text: 'Egypt: UTC +02:00',
        value: 'Egypt'
    },
    {
        text: 'Eire: UTC +01:00',
        value: 'Eire'
    },
    {
        text: 'Etc/GMT: UTC +00:00',
        value: 'Etc/GMT'
    },
    {
        text: 'Etc/GMT+0: UTC +00:00',
        value: 'Etc/GMT+0'
    },
    {
        text: 'Etc/GMT+1: UTC -01:00',
        value: 'Etc/GMT+1'
    },
    {
        text: 'Etc/GMT+10: UTC -10:00',
        value: 'Etc/GMT+10'
    },
    {
        text: 'Etc/GMT+11: UTC -11:00',
        value: 'Etc/GMT+11'
    },
    {
        text: 'Etc/GMT+12: UTC -12:00',
        value: 'Etc/GMT+12'
    },
    {
        text: 'Etc/GMT+2: UTC -02:00',
        value: 'Etc/GMT+2'
    },
    {
        text: 'Etc/GMT+3: UTC -03:00',
        value: 'Etc/GMT+3'
    },
    {
        text: 'Etc/GMT+4: UTC -04:00',
        value: 'Etc/GMT+4'
    },
    {
        text: 'Etc/GMT+5: UTC -05:00',
        value: 'Etc/GMT+5'
    },
    {
        text: 'Etc/GMT+6: UTC -06:00',
        value: 'Etc/GMT+6'
    },
    {
        text: 'Etc/GMT+7: UTC -07:00',
        value: 'Etc/GMT+7'
    },
    {
        text: 'Etc/GMT+8: UTC -08:00',
        value: 'Etc/GMT+8'
    },
    {
        text: 'Etc/GMT+9: UTC -09:00',
        value: 'Etc/GMT+9'
    },
    {
        text: 'Etc/GMT-0: UTC +00:00',
        value: 'Etc/GMT-0'
    },
    {
        text: 'Etc/GMT-1: UTC +01:00',
        value: 'Etc/GMT-1'
    },
    {
        text: 'Etc/GMT-10: UTC +10:00',
        value: 'Etc/GMT-10'
    },
    {
        text: 'Etc/GMT-11: UTC +11:00',
        value: 'Etc/GMT-11'
    },
    {
        text: 'Etc/GMT-12: UTC +12:00',
        value: 'Etc/GMT-12'
    },
    {
        text: 'Etc/GMT-13: UTC +13:00',
        value: 'Etc/GMT-13'
    },
    {
        text: 'Etc/GMT-14: UTC +14:00',
        value: 'Etc/GMT-14'
    },
    {
        text: 'Etc/GMT-2: UTC +02:00',
        value: 'Etc/GMT-2'
    },
    {
        text: 'Etc/GMT-3: UTC +03:00',
        value: 'Etc/GMT-3'
    },
    {
        text: 'Etc/GMT-4: UTC +04:00',
        value: 'Etc/GMT-4'
    },
    {
        text: 'Etc/GMT-5: UTC +05:00',
        value: 'Etc/GMT-5'
    },
    {
        text: 'Etc/GMT-6: UTC +06:00',
        value: 'Etc/GMT-6'
    },
    {
        text: 'Etc/GMT-7: UTC +07:00',
        value: 'Etc/GMT-7'
    },
    {
        text: 'Etc/GMT-8: UTC +08:00',
        value: 'Etc/GMT-8'
    },
    {
        text: 'Etc/GMT-9: UTC +09:00',
        value: 'Etc/GMT-9'
    },
    {
        text: 'Etc/GMT0: UTC +00:00',
        value: 'Etc/GMT0'
    },
    {
        text: 'Etc/Greenwich: UTC +00:00',
        value: 'Etc/Greenwich'
    },
    {
        text: 'Etc/UCT: UTC +00:00',
        value: 'Etc/UCT'
    },
    {
        text: 'Etc/UTC: UTC +00:00',
        value: 'Etc/UTC'
    },
    {
        text: 'Etc/Universal: UTC +00:00',
        value: 'Etc/Universal'
    },
    {
        text: 'Etc/Zulu: UTC +00:00',
        value: 'Etc/Zulu'
    },
    {
        text: 'Europe/Amsterdam: UTC +02:00',
        value: 'Europe/Amsterdam'
    },
    {
        text: 'Europe/Andorra: UTC +02:00',
        value: 'Europe/Andorra'
    },
    {
        text: 'Europe/Astrakhan: UTC +04:00',
        value: 'Europe/Astrakhan'
    },
    {
        text: 'Europe/Athens: UTC +03:00',
        value: 'Europe/Athens'
    },
    {
        text: 'Europe/Belfast: UTC +01:00',
        value: 'Europe/Belfast'
    },
    {
        text: 'Europe/Belgrade: UTC +02:00',
        value: 'Europe/Belgrade'
    },
    {
        text: 'Europe/Berlin: UTC +02:00',
        value: 'Europe/Berlin'
    },
    {
        text: 'Europe/Bratislava: UTC +02:00',
        value: 'Europe/Bratislava'
    },
    {
        text: 'Europe/Brussels: UTC +02:00',
        value: 'Europe/Brussels'
    },
    {
        text: 'Europe/Bucharest: UTC +03:00',
        value: 'Europe/Bucharest'
    },
    {
        text: 'Europe/Budapest: UTC +02:00',
        value: 'Europe/Budapest'
    },
    {
        text: 'Europe/Busingen: UTC +02:00',
        value: 'Europe/Busingen'
    },
    {
        text: 'Europe/Chisinau: UTC +03:00',
        value: 'Europe/Chisinau'
    },
    {
        text: 'Europe/Copenhagen: UTC +02:00',
        value: 'Europe/Copenhagen'
    },
    {
        text: 'Europe/Dublin: UTC +01:00',
        value: 'Europe/Dublin'
    },
    {
        text: 'Europe/Gibraltar: UTC +02:00',
        value: 'Europe/Gibraltar'
    },
    {
        text: 'Europe/Guernsey: UTC +01:00',
        value: 'Europe/Guernsey'
    },
    {
        text: 'Europe/Helsinki: UTC +03:00',
        value: 'Europe/Helsinki'
    },
    {
        text: 'Europe/Isle_of_Man: UTC +01:00',
        value: 'Europe/Isle_of_Man'
    },
    {
        text: 'Europe/Istanbul: UTC +03:00',
        value: 'Europe/Istanbul'
    },
    {
        text: 'Europe/Jersey: UTC +01:00',
        value: 'Europe/Jersey'
    },
    {
        text: 'Europe/Kaliningrad: UTC +02:00',
        value: 'Europe/Kaliningrad'
    },
    {
        text: 'Europe/Kiev: UTC +03:00',
        value: 'Europe/Kiev'
    },
    {
        text: 'Europe/Kirov: UTC +03:00',
        value: 'Europe/Kirov'
    },
    {
        text: 'Europe/Lisbon: UTC +01:00',
        value: 'Europe/Lisbon'
    },
    {
        text: 'Europe/Ljubljana: UTC +02:00',
        value: 'Europe/Ljubljana'
    },
    {
        text: 'Europe/London: UTC +01:00',
        value: 'Europe/London'
    },
    {
        text: 'Europe/Luxembourg: UTC +02:00',
        value: 'Europe/Luxembourg'
    },
    {
        text: 'Europe/Madrid: UTC +02:00',
        value: 'Europe/Madrid'
    },
    {
        text: 'Europe/Malta: UTC +02:00',
        value: 'Europe/Malta'
    },
    {
        text: 'Europe/Mariehamn: UTC +03:00',
        value: 'Europe/Mariehamn'
    },
    {
        text: 'Europe/Minsk: UTC +03:00',
        value: 'Europe/Minsk'
    },
    {
        text: 'Europe/Monaco: UTC +02:00',
        value: 'Europe/Monaco'
    },
    {
        text: 'Europe/Moscow: UTC +03:00',
        value: 'Europe/Moscow'
    },
    {
        text: 'Europe/Nicosia: UTC +03:00',
        value: 'Europe/Nicosia'
    },
    {
        text: 'Europe/Oslo: UTC +02:00',
        value: 'Europe/Oslo'
    },
    {
        text: 'Europe/Paris: UTC +02:00',
        value: 'Europe/Paris'
    },
    {
        text: 'Europe/Podgorica: UTC +02:00',
        value: 'Europe/Podgorica'
    },
    {
        text: 'Europe/Prague: UTC +02:00',
        value: 'Europe/Prague'
    },
    {
        text: 'Europe/Riga: UTC +03:00',
        value: 'Europe/Riga'
    },
    {
        text: 'Europe/Rome: UTC +02:00',
        value: 'Europe/Rome'
    },
    {
        text: 'Europe/Samara: UTC +04:00',
        value: 'Europe/Samara'
    },
    {
        text: 'Europe/San_Marino: UTC +02:00',
        value: 'Europe/San_Marino'
    },
    {
        text: 'Europe/Sarajevo: UTC +02:00',
        value: 'Europe/Sarajevo'
    },
    {
        text: 'Europe/Saratov: UTC +04:00',
        value: 'Europe/Saratov'
    },
    {
        text: 'Europe/Simferopol: UTC +03:00',
        value: 'Europe/Simferopol'
    },
    {
        text: 'Europe/Skopje: UTC +02:00',
        value: 'Europe/Skopje'
    },
    {
        text: 'Europe/Sofia: UTC +03:00',
        value: 'Europe/Sofia'
    },
    {
        text: 'Europe/Stockholm: UTC +02:00',
        value: 'Europe/Stockholm'
    },
    {
        text: 'Europe/Tallinn: UTC +03:00',
        value: 'Europe/Tallinn'
    },
    {
        text: 'Europe/Tirane: UTC +02:00',
        value: 'Europe/Tirane'
    },
    {
        text: 'Europe/Tiraspol: UTC +03:00',
        value: 'Europe/Tiraspol'
    },
    {
        text: 'Europe/Ulyanovsk: UTC +04:00',
        value: 'Europe/Ulyanovsk'
    },
    {
        text: 'Europe/Uzhgorod: UTC +03:00',
        value: 'Europe/Uzhgorod'
    },
    {
        text: 'Europe/Vaduz: UTC +02:00',
        value: 'Europe/Vaduz'
    },
    {
        text: 'Europe/Vatican: UTC +02:00',
        value: 'Europe/Vatican'
    },
    {
        text: 'Europe/Vienna: UTC +02:00',
        value: 'Europe/Vienna'
    },
    {
        text: 'Europe/Vilnius: UTC +03:00',
        value: 'Europe/Vilnius'
    },
    {
        text: 'Europe/Volgograd: UTC +04:00',
        value: 'Europe/Volgograd'
    },
    {
        text: 'Europe/Warsaw: UTC +02:00',
        value: 'Europe/Warsaw'
    },
    {
        text: 'Europe/Zagreb: UTC +02:00',
        value: 'Europe/Zagreb'
    },
    {
        text: 'Europe/Zaporozhye: UTC +03:00',
        value: 'Europe/Zaporozhye'
    },
    {
        text: 'Europe/Zurich: UTC +02:00',
        value: 'Europe/Zurich'
    },
    {
        text: 'GB: UTC +01:00',
        value: 'GB'
    },
    {
        text: 'GB-Eire: UTC +01:00',
        value: 'GB-Eire'
    },
    {
        text: 'GMT: UTC +00:00',
        value: 'GMT'
    },
    {
        text: 'GMT+0: UTC +00:00',
        value: 'GMT+0'
    },
    {
        text: 'GMT-0: UTC +00:00',
        value: 'GMT-0'
    },
    {
        text: 'GMT0: UTC +00:00',
        value: 'GMT0'
    },
    {
        text: 'Greenwich: UTC +00:00',
        value: 'Greenwich'
    },
    {
        text: 'HST: UTC -10:00',
        value: 'HST'
    },
    {
        text: 'Hongkong: UTC +08:00',
        value: 'Hongkong'
    },
    {
        text: 'Iceland: UTC +00:00',
        value: 'Iceland'
    },
    {
        text: 'Indian/Antananarivo: UTC +03:00',
        value: 'Indian/Antananarivo'
    },
    {
        text: 'Indian/Chagos: UTC +06:00',
        value: 'Indian/Chagos'
    },
    {
        text: 'Indian/Christmas: UTC +07:00',
        value: 'Indian/Christmas'
    },
    {
        text: 'Indian/Cocos: UTC +06:30',
        value: 'Indian/Cocos'
    },
    {
        text: 'Indian/Comoro: UTC +03:00',
        value: 'Indian/Comoro'
    },
    {
        text: 'Indian/Kerguelen: UTC +05:00',
        value: 'Indian/Kerguelen'
    },
    {
        text: 'Indian/Mahe: UTC +04:00',
        value: 'Indian/Mahe'
    },
    {
        text: 'Indian/Maldives: UTC +05:00',
        value: 'Indian/Maldives'
    },
    {
        text: 'Indian/Mauritius: UTC +04:00',
        value: 'Indian/Mauritius'
    },
    {
        text: 'Indian/Mayotte: UTC +03:00',
        value: 'Indian/Mayotte'
    },
    {
        text: 'Indian/Reunion: UTC +04:00',
        value: 'Indian/Reunion'
    },
    {
        text: 'Iran: UTC +04:30',
        value: 'Iran'
    },
    {
        text: 'Israel: UTC +03:00',
        value: 'Israel'
    },
    {
        text: 'Jamaica: UTC -05:00',
        value: 'Jamaica'
    },
    {
        text: 'Japan: UTC +09:00',
        value: 'Japan'
    },
    {
        text: 'Kwajalein: UTC +12:00',
        value: 'Kwajalein'
    },
    {
        text: 'Libya: UTC +02:00',
        value: 'Libya'
    },
    {
        text: 'MET: UTC +02:00',
        value: 'MET'
    },
    {
        text: 'MST: UTC -07:00',
        value: 'MST'
    },
    {
        text: 'MST7MDT: UTC -06:00',
        value: 'MST7MDT'
    },
    {
        text: 'Mexico/BajaNorte: UTC -07:00',
        value: 'Mexico/BajaNorte'
    },
    {
        text: 'Mexico/BajaSur: UTC -06:00',
        value: 'Mexico/BajaSur'
    },
    {
        text: 'Mexico/General: UTC -05:00',
        value: 'Mexico/General'
    },
    {
        text: 'NZ: UTC +12:00',
        value: 'NZ'
    },
    {
        text: 'NZ-CHAT: UTC +12:45',
        value: 'NZ-CHAT'
    },
    {
        text: 'Navajo: UTC -06:00',
        value: 'Navajo'
    },
    {
        text: 'PRC: UTC +08:00',
        value: 'PRC'
    },
    {
        text: 'PST8PDT: UTC -07:00',
        value: 'PST8PDT'
    },
    {
        text: 'Pacific/Apia: UTC +13:00',
        value: 'Pacific/Apia'
    },
    {
        text: 'Pacific/Auckland: UTC +12:00',
        value: 'Pacific/Auckland'
    },
    {
        text: 'Pacific/Bougainville: UTC +11:00',
        value: 'Pacific/Bougainville'
    },
    {
        text: 'Pacific/Chatham: UTC +12:45',
        value: 'Pacific/Chatham'
    },
    {
        text: 'Pacific/Chuuk: UTC +10:00',
        value: 'Pacific/Chuuk'
    },
    {
        text: 'Pacific/Easter: UTC -06:00',
        value: 'Pacific/Easter'
    },
    {
        text: 'Pacific/Efate: UTC +11:00',
        value: 'Pacific/Efate'
    },
    {
        text: 'Pacific/Enderbury: UTC +13:00',
        value: 'Pacific/Enderbury'
    },
    {
        text: 'Pacific/Fakaofo: UTC +13:00',
        value: 'Pacific/Fakaofo'
    },
    {
        text: 'Pacific/Fiji: UTC +12:00',
        value: 'Pacific/Fiji'
    },
    {
        text: 'Pacific/Funafuti: UTC +12:00',
        value: 'Pacific/Funafuti'
    },
    {
        text: 'Pacific/Galapagos: UTC -06:00',
        value: 'Pacific/Galapagos'
    },
    {
        text: 'Pacific/Gambier: UTC -09:00',
        value: 'Pacific/Gambier'
    },
    {
        text: 'Pacific/Guadalcanal: UTC +11:00',
        value: 'Pacific/Guadalcanal'
    },
    {
        text: 'Pacific/Guam: UTC +10:00',
        value: 'Pacific/Guam'
    },
    {
        text: 'Pacific/Honolulu: UTC -10:00',
        value: 'Pacific/Honolulu'
    },
    {
        text: 'Pacific/Johnston: UTC -10:00',
        value: 'Pacific/Johnston'
    },
    {
        text: 'Pacific/Kiritimati: UTC +14:00',
        value: 'Pacific/Kiritimati'
    },
    {
        text: 'Pacific/Kosrae: UTC +11:00',
        value: 'Pacific/Kosrae'
    },
    {
        text: 'Pacific/Kwajalein: UTC +12:00',
        value: 'Pacific/Kwajalein'
    },
    {
        text: 'Pacific/Majuro: UTC +12:00',
        value: 'Pacific/Majuro'
    },
    {
        text: 'Pacific/Marquesas: UTC -09:30',
        value: 'Pacific/Marquesas'
    },
    {
        text: 'Pacific/Midway: UTC -11:00',
        value: 'Pacific/Midway'
    },
    {
        text: 'Pacific/Nauru: UTC +12:00',
        value: 'Pacific/Nauru'
    },
    {
        text: 'Pacific/Niue: UTC -11:00',
        value: 'Pacific/Niue'
    },
    {
        text: 'Pacific/Norfolk: UTC +11:00',
        value: 'Pacific/Norfolk'
    },
    {
        text: 'Pacific/Noumea: UTC +11:00',
        value: 'Pacific/Noumea'
    },
    {
        text: 'Pacific/Pago_Pago: UTC -11:00',
        value: 'Pacific/Pago_Pago'
    },
    {
        text: 'Pacific/Palau: UTC +09:00',
        value: 'Pacific/Palau'
    },
    {
        text: 'Pacific/Pitcairn: UTC -08:00',
        value: 'Pacific/Pitcairn'
    },
    {
        text: 'Pacific/Pohnpei: UTC +11:00',
        value: 'Pacific/Pohnpei'
    },
    {
        text: 'Pacific/Ponape: UTC +11:00',
        value: 'Pacific/Ponape'
    },
    {
        text: 'Pacific/Port_Moresby: UTC +10:00',
        value: 'Pacific/Port_Moresby'
    },
    {
        text: 'Pacific/Rarotonga: UTC -10:00',
        value: 'Pacific/Rarotonga'
    },
    {
        text: 'Pacific/Saipan: UTC +10:00',
        value: 'Pacific/Saipan'
    },
    {
        text: 'Pacific/Samoa: UTC -11:00',
        value: 'Pacific/Samoa'
    },
    {
        text: 'Pacific/Tahiti: UTC -10:00',
        value: 'Pacific/Tahiti'
    },
    {
        text: 'Pacific/Tarawa: UTC +12:00',
        value: 'Pacific/Tarawa'
    },
    {
        text: 'Pacific/Tongatapu: UTC +13:00',
        value: 'Pacific/Tongatapu'
    },
    {
        text: 'Pacific/Truk: UTC +10:00',
        value: 'Pacific/Truk'
    },
    {
        text: 'Pacific/Wake: UTC +12:00',
        value: 'Pacific/Wake'
    },
    {
        text: 'Pacific/Wallis: UTC +12:00',
        value: 'Pacific/Wallis'
    },
    {
        text: 'Pacific/Yap: UTC +10:00',
        value: 'Pacific/Yap'
    },
    {
        text: 'Poland: UTC +02:00',
        value: 'Poland'
    },
    {
        text: 'Portugal: UTC +01:00',
        value: 'Portugal'
    },
    {
        text: 'ROC: UTC +08:00',
        value: 'ROC'
    },
    {
        text: 'ROK: UTC +09:00',
        value: 'ROK'
    },
    {
        text: 'Singapore: UTC +08:00',
        value: 'Singapore'
    },
    {
        text: 'Turkey: UTC +03:00',
        value: 'Turkey'
    },
    {
        text: 'UCT: UTC +00:00',
        value: 'UCT'
    },
    {
        text: 'US/Alaska: UTC -08:00',
        value: 'US/Alaska'
    },
    {
        text: 'US/Aleutian: UTC -09:00',
        value: 'US/Aleutian'
    },
    {
        text: 'US/Arizona: UTC -07:00',
        value: 'US/Arizona'
    },
    {
        text: 'US/Central: UTC -05:00',
        value: 'US/Central'
    },
    {
        text: 'US/East-Indiana: UTC -04:00',
        value: 'US/East-Indiana'
    },
    {
        text: 'US/Eastern: UTC -04:00',
        value: 'US/Eastern'
    },
    {
        text: 'US/Hawaii: UTC -10:00',
        value: 'US/Hawaii'
    },
    {
        text: 'US/Indiana-Starke: UTC -05:00',
        value: 'US/Indiana-Starke'
    },
    {
        text: 'US/Michigan: UTC -04:00',
        value: 'US/Michigan'
    },
    {
        text: 'US/Mountain: UTC -06:00',
        value: 'US/Mountain'
    },
    {
        text: 'US/Pacific: UTC -07:00',
        value: 'US/Pacific'
    },
    {
        text: 'US/Pacific-New: UTC -07:00',
        value: 'US/Pacific-New'
    },
    {
        text: 'US/Samoa: UTC -11:00',
        value: 'US/Samoa'
    },
    {
        text: 'UTC: UTC +00:00',
        value: 'UTC'
    },
    {
        text: 'Universal: UTC +00:00',
        value: 'Universal'
    },
    {
        text: 'W-SU: UTC +03:00',
        value: 'W-SU'
    },
    {
        text: 'WET: UTC +01:00',
        value: 'WET'
    },
    {
        text: 'Zulu: UTC +00:00',
        value: 'Zulu'
    }
];
