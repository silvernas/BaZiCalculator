import lunarCalendar from 'lunar-calendar'

class GanZhi {
    private gan: number;
    private zhi: number;

    constructor(gan: number, zhi: number) {
        this.gan = gan;
        this.zhi = zhi;
    }

    get getGan() {
        return this.gan;
    }

    get getZhi() {
        return this.zhi;
    }

    set setGan(gan: number) {
        this.gan = gan;
    }

    set setZhi(zhi: number) {
        this.zhi = zhi;
    }
}

const arr = ['甲',
    '乙',
    '丙',
    '丁',
    '戊',
    '己',
    '庚',
    '辛',
    '壬', '癸']

const tianGan = ['癸','甲',
    '乙',
    '丙',
    '丁',
    '戊',
    '己',
    '庚',
    '辛',
    '壬',]

const dizhi = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥', '子']
const result = {
    year:'',
    month:'',
    day:'',
    hour:'',
}
function calLunar(y:number, m:number, d:number, h:number) {
    let lunarDate = lunarCalendar.solarToLunar(y, m, d);
    let riGan = lunarDate.GanZhiDay.substring(0, 1);
    let riGanIndex = arr.indexOf(riGan) + 1;

    let shiZhi1 = shiZhi(h);
    let shiGan = (riGanIndex*2+shiZhi1)%10;
    // console.log(shiZhi1)
    // let shiGanStr = tianGan[shiGan];
    // let shiZhiStr = dizhi[shiZhi1+1];
    // console.log(shiGan,shiGanStr)
    // console.log(shiZhi1,shiZhiStr)
    result.year = lunarDate.GanZhiYear
    result.month = lunarDate.GanZhiMonth
    result.day = lunarDate.GanZhiDay
    result.hour = tianGan[shiGan]+dizhi[shiZhi1+1];
    return result;
}

function shiZhi(h:number) {
    let r = 0;
    if(h%2===0){
        r = h / 2 - 1;
    } else {
        r = (h + 1) / 2 - 1;
    }
    return r;
}

function calLyear(year: number) {
    let gan = (year - 3) % 10;
    let zhi = (year - 3) % 12;
    return new GanZhi(gan, zhi);
}

function calLmonth(month: number, yearGan: number) {
    let zhi = (month - 1) % 12;
    let gan = (yearGan * 2 + zhi) % 10;

    return new GanZhi(gan, zhi);
}

export {calLyear, calLmonth, calLunar, GanZhi, lunarCalendar}