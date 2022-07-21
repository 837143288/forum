export function weatherRe(data) {
  const weather =
  {
    sun: 'icon-lieri',
    cloud: 'icon-yun',
    snow: 'icon-zhongxue',
    ame: 'icon-dayu',
  }
  return weather[data]
}

export function moodRe(data) {
  const mood =
  {
    stay: 'icon-dai',
    embarrassed: 'icon-ganga',
    angry: 'icon-shengqi',
    cry: 'icon-kulian',
    smile: 'icon-400biaoqing_biaoqing',
  }
  return mood[data]
}