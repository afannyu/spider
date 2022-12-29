// 预警等级
export enum NewsWarningLevel {
  UNKNOWN, // 未知级别
  HIGH, // 高危预警
  MIDDLE, // 中危预警
  LOW, // 低危预警
}

// 预警原因
export type ReasonInfo = {
  type: number; // 类型
  label: string; // 原因文案描述
}

// 最新预警数据项
export type NewsWarningItem = {
  level: NewsWarningLevel; // 预警等级
  name: string; // 预警对象姓名
  sex: number; // 预警对象性别
  address: string; // 预警地点
  datetime: number; // 预警时间戳
  reasonInfo: ReasonInfo; // 预警原因
}

// 地图预警显示数据项
export type MapWarningItem = {
  name: string; // 地理名称信息
  level: NewsWarningLevel; // 预警等级
  value: number; // 地区预警数量
}
