interface Gender {
    group: string
    level: number
}

interface Grade {
    male: Gender
    female: Gender
    vermin: null | string | string[]
    font: null | string | string[]
    ircra: number
    yds: string | string[]
    sport: string | string[]
    british_tech: null | string | string[]
    ewbank: number | number[]
    brz: string | string[]
    uiaa: string | string[]
    uiaa_metric: number | number[]
    watts: null | number | number[]
    swedish: string | string[]
    [key: string]: any
}

export const grades: Array<Grade> = [
    {
        male: {
            group: 'Lower',
            level: 1,
        },
        female: {
            group: 'Lower',
            level: 1,
        },
        vermin: null,
        font: null,
        ircra: 1,
        yds: '5.1',
        sport: '1',
        british_tech: '2',
        ewbank: 4,
        brz: 'I sup',
        uiaa: 'I',
        uiaa_metric: 1.0,
        watts: null,
        swedish: '3',
    },
    {
        male: {
            group: 'Lower',
            level: 1,
        },
        female: {
            group: 'Lower',
            level: 1,
        },
        vermin: null,
        font: null,
        ircra: 2,
        yds: '5.2',
        sport: '2',
        british_tech: ['2', '3'],
        ewbank: 6,
        brz: 'II',
        uiaa: 'II',
        uiaa_metric: 2.0,
        watts: null,
        swedish: '3+',
    },
    {
        male: {
            group: 'Lower',
            level: 1,
        },
        female: {
            group: 'Lower',
            level: 1,
        },
        vermin: null,
        font: null,
        ircra: 3,
        yds: '5.3',
        sport: '2+',
        british_tech: '3',
        ewbank: 8,
        brz: 'II sup',
        uiaa: 'III',
        uiaa_metric: 3.0,
        watts: null,
        swedish: '4-',
    },
    {
        male: {
            group: 'Lower',
            level: 1,
        },
        female: {
            group: 'Lower',
            level: 1,
        },
        vermin: null,
        font: null,
        ircra: 4,
        yds: '5.4',
        sport: '3-',
        british_tech: ['3', '4'],
        ewbank: 8,
        brz: 'III',
        uiaa: 'III+',
        uiaa_metric: 3.5,
        watts: null,
        swedish: '4',
    },
    {
        male: {
            group: 'Lower',
            level: 1,
        },
        female: {
            group: 'Lower',
            level: 1,
        },
        vermin: null,
        font: null,
        ircra: 5,
        yds: '5.5',
        sport: '3',
        british_tech: ['3', '4'],
        ewbank: 10,
        brz: 'IV',
        uiaa: 'IV',
        uiaa_metric: 4.0,
        watts: null,
        swedish: '4+',
    },
    {
        male: {
            group: 'Lower',
            level: 1,
        },
        female: {
            group: 'Lower',
            level: 1,
        },
        vermin: null,
        font: null,
        ircra: 6,
        yds: '5.6',
        sport: '3+',
        british_tech: '4',
        ewbank: 12,
        brz: 'V',
        uiaa: 'V-',
        uiaa_metric: 4.66,
        watts: 0.0,
        swedish: '5-',
    },
    {
        male: {
            group: 'Lower',
            level: 1,
        },
        female: {
            group: 'Lower',
            level: 1,
        },
        vermin: null,
        font: null,
        ircra: 7,
        yds: '5.7',
        sport: '4',
        british_tech: '4',
        ewbank: 14,
        brz: 'V',
        uiaa: 'V',
        uiaa_metric: 5.0,
        watts: 0.25,
        swedish: '5',
    },
    {
        male: {
            group: 'Lower',
            level: 1,
        },
        female: {
            group: 'Lower',
            level: 1,
        },
        vermin: null,
        font: null,
        ircra: 8,
        yds: '5.8',
        sport: '4+',
        british_tech: ['4', '5a'],
        ewbank: 14,
        brz: 'V sup',
        uiaa: 'V+',
        uiaa_metric: 5.33,
        watts: 0.5,
        swedish: '5+',
    },
    {
        male: {
            group: 'Lower',
            level: 1,
        },
        female: {
            group: 'Lower',
            level: 1,
        },
        vermin: 'VB',
        font: '<2',
        ircra: 9,
        yds: '5.9',
        sport: '5',
        british_tech: '5a',
        ewbank: 16,
        brz: 'V sup',
        uiaa: 'VI-',
        uiaa_metric: 5.66,
        watts: 0.75,
        swedish: '5+',
    },

    // INTERMEDIATE
    {
        male: {
            group: 'Intermediate',
            level: 2,
        },
        female: {
            group: 'Intermediate',
            level: 2,
        },
        vermin: 'VB',
        font: '2',
        ircra: 10,
        yds: '5.10a',
        sport: '5+',
        british_tech: '5a',
        ewbank: 18,
        brz: 'VI',
        uiaa: 'VI',
        uiaa_metric: 6.0,
        watts: 1.0,
        swedish: '5+',
    },
    {
        male: {
            group: 'Intermediate',
            level: 2,
        },
        female: {
            group: 'Intermediate',
            level: 2,
        },
        vermin: 'V0-',
        font: '3',
        ircra: 11,
        yds: '5.10b',
        sport: '6a',
        british_tech: '5c',
        ewbank: 19,
        brz: 'VI',
        uiaa: 'VI+',
        uiaa_metric: 6.33,
        watts: 1.25,
        swedish: '6-',
    },
    {
        male: {
            group: 'Intermediate',
            level: 2,
        },
        female: {
            group: 'Intermediate',
            level: 2,
        },
        vermin: 'V0',
        font: '4',
        ircra: 12,
        yds: '5.10c',
        sport: '6a+',
        british_tech: ['5b', '5c'],
        ewbank: [19, 20],
        brz: ['VI', 'VI sup'],
        uiaa: ['VI+', 'VII-'],
        uiaa_metric: 6.66,
        watts: 1.5,
        swedish: '6',
    },
    {
        male: {
            group: 'Intermediate',
            level: 2,
        },
        female: {
            group: 'Intermediate',
            level: 2,
        },
        vermin: 'V0+',
        font: '4+',
        ircra: 13,
        yds: '5.10d',
        sport: '6b',
        british_tech: ['5c', '6a'],
        ewbank: 20,
        brz: 'VI sup',
        uiaa: 'VII',
        uiaa_metric: 7.0,
        watts: 1.75,
        swedish: '6+',
    },
    {
        male: {
            group: 'Intermediate',
            level: 2,
        },
        female: {
            group: 'Intermediate',
            level: 2,
        },
        vermin: 'V1',
        font: '5',
        ircra: 14,
        yds: '5.11a',
        sport: '6b+',
        british_tech: ['5c', '6a'],
        ewbank: 21,
        brz: '7a',
        uiaa: ['VII', 'VII+'],
        uiaa_metric: [7.0, 7.33],
        watts: 2.0,
        swedish: '7-',
    },
    {
        male: {
            group: 'Intermediate',
            level: 2,
        },
        female: {
            group: 'Advanced',
            level: 3,
        },
        vermin: ['V1', 'V2'],
        font: '5+',
        ircra: 15,
        yds: '5.11b',
        sport: '6c',
        british_tech: ['6a', '6b'],
        ewbank: [21, 22],
        brz: ['7a', '7b'],
        uiaa: 'VII+',
        uiaa_metric: 7.33,
        watts: 2.25,
        swedish: '7-',
    },
    {
        male: {
            group: 'Intermediate',
            level: 2,
        },
        female: {
            group: 'Advanced',
            level: 3,
        },
        vermin: 'V2',
        font: ['6A', '6A+'],
        ircra: 16,
        yds: '5.11c',
        sport: '6c+',
        british_tech: ['6a', '6b'],
        ewbank: 22,
        brz: '7b',
        uiaa: 'VIII-',
        uiaa_metric: 7.66,
        watts: 2.5,
        swedish: '7',
    },
    {
        male: {
            group: 'Intermediate',
            level: 2,
        },
        female: {
            group: 'Advanced',
            level: 3,
        },
        vermin: 'V3',
        font: ['6A+', '6B'],
        ircra: 17,
        yds: '5.11d',
        sport: '7a',
        british_tech: ['6a', '6b'],
        ewbank: 23,
        brz: '7c',
        uiaa: 'VIII',
        uiaa_metric: 8.0,
        watts: 2.75,
        swedish: '7+',
    },
    {
        male: {
            group: 'Advanced',
            level: 3,
        },
        female: {
            group: 'Advanced',
            level: 3,
        },
        vermin: 'V4',
        font: '6B+',
        ircra: 18,
        yds: '5.12a',
        sport: '7a+',
        british_tech: '6b',
        ewbank: 24,
        brz: '8a',
        uiaa: 'VIII+',
        uiaa_metric: 8.33,
        watts: 3.0,
        swedish: '7+',
    },
    {
        male: {
            group: 'Advanced',
            level: 3,
        },
        female: {
            group: 'Advanced',
            level: 3,
        },
        vermin: 'V5',
        font: ['6C', '6C+'],
        ircra: 19,
        yds: '5.12b',
        sport: '7b',
        british_tech: ['6b', '6c'],
        ewbank: 25,
        brz: '8b',
        uiaa: ['VIII+', 'IX-'],
        uiaa_metric: [8.33, 8.66],
        watts: 3.25,
        swedish: '8-',
    },
    {
        male: {
            group: 'Advanced',
            level: 3,
        },
        female: {
            group: 'Advanced',
            level: 3,
        },
        vermin: 'V6',
        font: '7A',
        ircra: 20,
        yds: '5.12c',
        sport: '7b+',
        british_tech: ['6b', '6c'],
        ewbank: 26,
        brz: '8c',
        uiaa: ['IX-', 'IX'],
        uiaa_metric: [8.66, 9.0],
        watts: 3.5,
        swedish: '8',
    },
    {
        male: {
            group: 'Advanced',
            level: 3,
        },
        female: {
            group: 'Elite',
            level: 4,
        },
        vermin: 'V7',
        font: '7A+',
        ircra: 21,
        yds: '5.12d',
        sport: '7c',
        british_tech: ['6b', '6c'],
        ewbank: 27,
        brz: '9a',
        uiaa: 'IX',
        uiaa_metric: 9.0,
        watts: 3.75,
        swedish: '8',
    },
    {
        male: {
            group: 'Advanced',
            level: 3,
        },
        female: {
            group: 'Elite',
            level: 4,
        },
        vermin: 'V8',
        font: '7B',
        ircra: 22,
        yds: '5.13a',
        sport: '7c+',
        british_tech: ['6c', '7a'],
        ewbank: 28,
        brz: '9b',
        uiaa: 'IX+',
        uiaa_metric: 9.33,
        watts: 4.0,
        swedish: '8+',
    },
    {
        male: {
            group: 'Advanced',
            level: 3,
        },
        female: {
            group: 'Elite',
            level: 4,
        },
        vermin: ['V8', 'V9'],
        font: '7B+',
        ircra: 23,
        yds: '5.13b',
        sport: '8a',
        british_tech: ['7a', '6c'],
        ewbank: 29,
        brz: '9c',
        uiaa: 'X-',
        uiaa_metric: 9.66,
        watts: 4.25,
        swedish: '9-',
    },
    {
        male: {
            group: 'Elite',
            level: 4,
        },
        female: {
            group: 'Elite',
            level: 4,
        },
        vermin: 'V9',
        font: '7C',
        ircra: 24,
        yds: '5.13c',
        sport: '8a+',
        british_tech: ['6c', '7a'],
        ewbank: 30,
        brz: '10a',
        uiaa: ['X-', 'X'],
        uiaa_metric: [9.66, 10.0],
        watts: 4.5,
        swedish: '9-',
    },
    {
        male: {
            group: 'Elite',
            level: 4,
        },
        female: {
            group: 'Elite',
            level: 4,
        },
        vermin: 'V10',
        font: ['7C', '7C+'],
        ircra: 25,
        yds: '5.13d',
        sport: '8b',
        british_tech: '7a',
        ewbank: 31,
        brz: '10b',
        uiaa: 'X',
        uiaa_metric: 10.0,
        watts: 4.75,
        swedish: '9',
    },
    {
        male: {
            group: 'Elite',
            level: 4,
        },
        female: {
            group: 'Elite',
            level: 4,
        },
        vermin: 'v11',
        font: '8A',
        ircra: 26,
        yds: '5.14a',
        sport: '8b+',
        british_tech: '7a',
        ewbank: 32,
        brz: '10c',
        uiaa: 'X+',
        uiaa_metric: 10.33,
        watts: 5.0,
        swedish: '9',
    },
    {
        male: {
            group: 'Elite',
            level: 4,
        },
        female: {
            group: 'Higher Elite',
            level: 5,
        },
        vermin: 'v12',
        font: '8A+',
        ircra: 27,
        yds: '5.14b',
        sport: '8c',
        british_tech: ['7a', '7b'],
        ewbank: 33,
        brz: '11a',
        uiaa: 'XI-',
        uiaa_metric: 10.66,
        watts: 5.25,
        swedish: '9+',
    },
    {
        male: {
            group: 'Higher Elite',
            level: 5,
        },
        female: {
            group: 'Higher Elite',
            level: 5,
        },
        vermin: 'V13',
        font: '8B',
        ircra: 28,
        yds: '5.14c',
        sport: '8c+',
        british_tech: ['7a', '7b'],
        ewbank: 34,
        brz: '11b',
        uiaa: 'XI',
        uiaa_metric: 11.0,
        watts: 5.5,
        swedish: '10-',
    },
    {
        male: {
            group: 'Higher Elite',
            level: 5,
        },
        female: {
            group: 'Higher Elite',
            level: 5,
        },
        vermin: ['V13', 'V14'],
        font: ['8B', '8B+'],
        ircra: 29,
        yds: '5.14d',
        sport: '9a',
        british_tech: '7b',
        ewbank: 35,
        brz: '11c',
        uiaa: ['XI', 'XI+'],
        uiaa_metric: [11.0, 11.33],
        watts: 5.75,
        swedish: '10',
    },
    {
        male: {
            group: 'Higher Elite',
            level: 5,
        },
        female: {
            group: 'Higher Elite',
            level: 5,
        },
        vermin: 'v14',
        font: '8B+',
        ircra: 30,
        yds: '5.15a',
        sport: '9a+',
        british_tech: null,
        ewbank: 36,
        brz: '12a',
        uiaa: 'XI+',
        uiaa_metric: 11.33,
        watts: 6.0,
        swedish: '10+',
    },
    {
        male: {
            group: 'Higher Elite',
            level: 5,
        },
        female: {
            group: 'Higher Elite',
            level: 5,
        },
        vermin: 'v15',
        font: '8C',
        ircra: 31,
        yds: '5.15b',
        sport: '9b',
        british_tech: '7b',
        ewbank: 37,
        brz: '12b',
        uiaa: 'XII-',
        uiaa_metric: 11.66,
        watts: 6.25,
        swedish: '11-',
    },
    {
        male: {
            group: 'Higher Elite',
            level: 5,
        },
        female: {
            group: 'Higher Elite',
            level: 5,
        },
        vermin: 'v16',
        font: '8C+',
        ircra: 32,
        yds: '5.15c',
        sport: '9b+',
        british_tech: null,
        ewbank: 38,
        brz: '12c',
        uiaa: 'XII',
        uiaa_metric: 12.0,
        watts: 6.5,
        swedish: '11',
    },
    {
        male: {
            group: 'Higher Elite',
            level: 5,
        },
        female: {
            group: 'Higher Elite',
            level: 5,
        },
        vermin: 'v17',
        font: '9A',
        ircra: 33,
        yds: '5.15d',
        sport: '9c',
        british_tech: null,
        ewbank: 39,
        brz: '12c',
        uiaa: 'XII+',
        uiaa_metric: 12.33,
        watts: 6.75,
        swedish: '11+'
    },
]
