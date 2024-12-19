# 八字计算器

项目构成Vue 3 + TypeScript + Vite ，通过阳历生辰计算出生者八字。


---
# 八字计算方法整理

**八字**是指 年柱、月柱、日柱、时柱 四个时间以***干支***计数法所得的八个字。

1. 年柱
    - 公历计算法  
       天干 = (公历年份 - 3) ÷ 10，所得余数  
       地支 = (公历年份 - 3) ÷ 12，所得余数  
       若余数为0，则为天干或地支的最后一位，即癸或亥；若余数不为0，则对应天干地支序号（甲为1，乙为2，...，癸为10）（子为1，丑为2，...，亥为12）。
2. 月柱
   - 公历计算法  
      月干序=年干*2+月支(取尾数)    
      月支序=公历月份+2(大于12的时候同样减去12)    
      1991 12月25  阴历 11月20  辛未年 庚子月
   - ‌甲己之年‌：正月的月干从丙开始。
   - ‌乙庚之年‌：正月的月干从戊开始。
   - ‌丙辛之年‌：正月的月干从庚开始。
   - ‌丁壬之年‌：正月的月干从壬开始。
   - ‌戊癸之年‌：正月的月干从甲开始。
3. 日柱
   （（年-1）*5+（年-1）*4+当前天数）/60 取余数 
   -  余数除10的余为天干    
   -  余数除12的余为地支
4. 时柱
   
| 天干 | 晨子 |   | 甲 | 乙 | 丙 | 丁 | 戊 | 己 | 庚 | 辛 | 壬 | 癸 | 夜子 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 序号 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 |   
| 地支 | 子 | 丑 | 寅 | 卯 | 辰 | 巳 | 午 | 未 | 申 | 酉 | 戌 | 亥 | 子 |
- ①时支公式：时支=小时÷2-1（小时为偶数），时支=（小时+1）÷2-1（小时为奇数）
- ②时干公式：时干=日干×2+时支 （晨子=-1，夜子=11）
-----
