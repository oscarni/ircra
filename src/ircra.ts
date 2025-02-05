'use strict'

import { grades } from './master'

class Classification {
    index: Map<any, any>
    grade: string

    constructor(index: Map<any, any>, grade: string) {
        if (!grade) {
            throw new Error('grade is required')
        }
        this.index = index
        this.grade = grade
        return this
    }

    public to(gradeType: string) {
        let result = grades[this.index.get(this.grade)] ||
            grades[this.index.get(this.grade.toUpperCase())] ||
            grades[this.index.get(this.grade.toLowerCase())]

        let resultGrade = result[gradeType]

        if (Array.isArray(resultGrade)) {
            resultGrade = resultGrade.join('/');
        }
        return { [gradeType]: resultGrade }
    }
}

export default class IRCRA {
    maps: Map<any, any>
    supportedTypes: string[] = [
        'male',
        'female',
        'vermin',
        'font',
        'ircra',
        'yds',
        'sport',
        'british_tech',
        'ewbank',
        'brz',
        'uiaa',
        'uiaa_metric',
        'watts',
        'swedish',
    ]

    constructor() {
        this.maps = new Map()
        return this
    }

    public get(gradeType: string = '') {
        // All
        if (gradeType === '') {
            return grades
        }

        // Validation
        if (gradeType in this.supportedTypes) {
            throw new Error(`${gradeType} is unsupported`)
        }

        if (!this.maps.has(gradeType)) {
            let map = this.maps.set(gradeType, this._index(gradeType))
            return Array.from(map.get(gradeType).keys())
        } else {
            return Array.from(this.maps.get(gradeType).keys())
        }
    }

    public convert(gradeType: string = '', grade: string = '') {
        if (gradeType in this.supportedTypes) {
            throw new Error(`${gradeType} is unsupported`)
        }
        
        if (!this.maps.has(gradeType)) {
            let map = this.maps.set(gradeType, this._index(gradeType))
            return new Classification(map.get(gradeType), grade)
        } else {
            return new Classification(this.maps.get(gradeType), grade)
        }
    }

    private _index(key: string) {
        let map: Map<any, any> = new Map()
        for (var i = 0; i < grades.length; i++) {
            if (!(key in grades[i])) {
                throw new Error('no ' + key + ' key found in grade')
            }

            if (grades[i][key] === null) {
                continue
            }

            if (['male', 'female'].includes(key)) {
                map.set(grades[i][key].level, i)
                continue
            }
            
            const gradeValue = grades[i][key];
            const previousGrade = i ? grades[i-1][key] : null;
            if (Array.isArray(gradeValue)) {
                gradeValue.forEach((grade) => {
                    if (previousGrade === grade) {
                        return
                    }
                    map.set(grade, i)
                });
            } else {
                if (previousGrade === grades[i][key]) {
                    continue
                }   
                map.set(grades[i][key], i)
            }
        }
        return map
    }

    public scale() {
        return [
            { name: 'Hueco / Vermin', value: 'vermin' },
            { name: 'Fontainebleau', value: 'font' },
            { name: 'IRCRA - Rock Climbing Association', value: 'ircra' },
            { name: 'YDS - Yosemite Decimal System', value: 'yds' },
            { name: 'French', value: 'sport' },
            { name: 'British - Technical', value: 'british_tech' },
            { name: 'Ewbank', value: 'ewbank' },
            { name: 'Brazilian', value: 'brz' },
            { name: 'UIAA - Associations d’Alpinisme', value: 'uiaa' },
            { name: 'UIAA Metric', value: 'uiaa_metric' },
            { name: 'Watts', value: 'watts' },
            { name: 'Swedish', value: 'swedish' }
        ]
    }
}
