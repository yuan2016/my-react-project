module.exports = {
  dailyLendingData: '/mnt/usr/local/data-integration/pan.sh -rep kettle -user admin -pass admin -dir /report -trans FRESH_数据分析_每日放款数据',
  dailyRepaymentUnitData: '/mnt/usr/local/data-integration/pan.sh -rep kettle -user admin -pass admin -dir /report -trans FRESH_数据分析_每日还款单位数据',
  daysStageStatistics: '/mnt/usr/local/data-integration/pan.sh -rep kettle -user admin -pass admin -dir /report -trans FRESH_数据分析_21天分期统计',
  daysStageStatistics90: '/mnt/usr/local/data-integration/pan.sh -rep kettle -user admin -pass admin -dir /report -trans 数据分析_90天分期统计',
  installmentPromotionStatistics: '/mnt/usr/local/data-integration/pan.sh -rep kettle -user admin -pass admin -dir /report -trans 数据分析_21天分期提额统计',
  dailyRepaymentAmountData: '/mnt/usr/local/data-integration/pan.sh -rep kettle -user admin -pass admin -dir /report -trans FRESH_数据分析_每日还款金额数据',
  overdueRepaymentStatistics: '/mnt/usr/local/data-integration/pan.sh -rep kettle -user admin -pass admin -dir /report -trans FRESH_数据分析_还款逾期统计',
  fundAnalysis: '/mnt/usr/local/data-integration/kitchen.sh -rep kettle -user admin -pass admin -dir /report -job FRESH_数据分析_资金分析',
  fundAnalysisProduct: '/mnt/usr/local/data-integration/pan.sh -rep kettle -user admin -pass admin -dir /report -trans FRESH_数据分析_资金分析_产品',
  collectionManagement: '/mnt/usr/local/data-integration/pan.sh -rep kettle -user admin -pass admin -dir /report -trans FRESH_数据分析_催收管理',
  platformData: '/mnt/usr/local/data-integration/pan.sh -rep kettle -user admin -pass admin -dir /report -trans FRESH_数据分析_平台数据',
  promotionChannelStatistics: '/mnt/usr/local/data-integration/pan.sh -rep kettle -user admin -pass admin -dir /report -trans FRESH_推广管理_推广统计（渠道）',
  promotionRegionStatistics: '/mnt/usr/local/data-integration/pan.sh -rep kettle -user admin -pass admin -dir /report -trans FRESH_推广管理_推广统计（地区）',
  promptAmount: '/mnt/usr/local/data-integration/pan.sh -rep kettle -user admin -pass admin -dir /report -trans 数据分析_在催金额',
  promotionChannelStatistics7: '/mnt/usr/local/data-integration/kitchen.sh -rep kettle -user admin -pass admin -dir /report -job FRESH_推广管理_市场七日推广统计（渠道）',
  prepaymentStatistics: '/mnt/usr/local/data-integration/pan.sh -rep kettle -user admin -pass admin -dir /report -trans 数据分析-提前还款统计',
  couponStatistics: '/mnt/usr/local/data-integration/pan.sh -rep kettle -user admin -pass admin -dir /report -trans FRESH_必过券统计',
  repaymentCouponAnalysis: '/mnt/usr/local/data-integration/kitchen.sh -rep kettle -user admin -pass admin -dir /report -job FRESH_数据分析_还款抵扣券分析',
  hourlyRepaymentRate: '/mnt/usr/local/data-integration/kitchen.sh -rep kettle -user admin -pass admin -dir /report -job 分时段还款率',
  keyData: '/mnt/usr/local/data-integration/pan.sh -rep kettle -user admin -pass admin -dir /report -trans FRESH数据分析-关键数据',
  dataOverview: '/mnt/usr/local/data-integration/pan.sh -rep kettle -user admin -pass admin -dir /report -trans FRESH_企鹅抓娃娃_今日数据概览_房间数据',
  dataOverviewAll: '/mnt/usr/local/data-integration/pan.sh -rep kettle -user admin -pass admin -dir /report -trans FRESH-企鹅抓娃娃-历史数据概览-历史房间数据',
  newChannelView: '/mnt/usr/local/data-integration/pan.sh -rep kettle -user admin -pass admin -dir /report -trans FRESH_竞拍_渠道信息表',
  promotionEffectStatistics: '/mnt/usr/local/data-integration/pan.sh -rep kettle -user admin -pass admin -dir /report -trans FRESH_竞拍_渠道推广效果统计',
  dailyPromotionEffectStatistics: '/mnt/usr/local/data-integration/pan.sh -rep kettle -user admin -pass admin -dir /report -trans FRESH_竞拍_渠道每日统计',
  periodDailyLending: '/mnt/usr/local/data-integration/pan.sh -rep kettle -user admin -pass admin -dir /report -trans FRESH_开心分期_每日放款数据',
  periodOverdueRepaymentStatistics: '/mnt/usr/local/data-integration/kitchen.sh -rep kettle -user admin -pass admin -dir /report -job FRESH_开心分期_还款逾期统计',
  periodDailyRepaymentAmountData: '/mnt/usr/local/data-integration/pan.sh -rep kettle -user admin -pass admin -dir /report -trans FRESH_开心分期_每日还款金额数据表',
  totalIncome: '/mnt/usr/local/data-integration/pan.sh -rep kettle -user admin -pass admin -dir /report -trans FRESH_开心分期_收入结算总表',
  detailIncome: '/mnt/usr/local/data-integration/pan.sh -rep kettle -user admin -pass admin -dir /report -trans FRESH_开心分期_收入结算明细表',
  totalSales: '/mnt/usr/local/data-integration/pan.sh -rep kettle -user admin -pass admin -dir /report -trans FRESH_开心分期_总销售额统计表',
  detailSales: '/mnt/usr/local/data-integration/pan.sh -rep kettle -user admin -pass admin -dir /report -trans FRESH_开心分期_商品销售详情',
  detailOrder: '/mnt/usr/local/data-integration/pan.sh -rep kettle -user admin -pass admin -dir /report -trans FRESH_开心分期_订单详情表',
  repaymentDetailData: '/mnt/usr/local/data-integration/kitchen.sh -rep kettle -user admin -pass admin -dir /report -job FRESH_开心分期_还款明细',
  dailySettlementReport: '/mnt/usr/local/data-integration/pan.sh -rep kettle -user admin -pass admin -dir /report -trans FRESH_开心分期_财务数据_每日结算表',
  dailyClaimsReport: '/mnt/usr/local/data-integration/pan.sh -rep kettle -user admin -pass admin -dir /report -trans FRESH_开心分期_财务数据_每日债权表',
  ZCMRepaymentDataReconciliation: '/mnt/usr/local/data-integration/pan.sh -rep kettle -user admin -pass admin -dir /report -trans FRESH_开心分期_财务数据_ZCM还款数据核对',
  repaymentReconciliationZFB: '/mnt/usr/local/data-integration/pan.sh -rep kettle -user admin -pass admin -dir /report -trans FRESH_开心分期_ZFB还款数据核对',
  dataCheckXN: '/mnt/usr/local/data-integration/pan.sh -rep kettle -user admin -pass admin -dir /report -trans FRESH_开心分期_财务数据_XN数据核对',
  threePartyAccountAnalysis: '/mnt/usr/local/data-integration/pan.sh -rep kettle -user admin -pass admin -dir /report -trans FRESH_开心分期_财务数据_三方对账',
  monthlyBondData: '/mnt/usr/local/data-integration/pan.sh -rep kettle -user admin -pass admin -dir /report -trans FRESH_开心分期_财务数据_每月债权表',
  monthlySettlementData: '/mnt/usr/local/data-integration/pan.sh -rep kettle -user admin -pass admin -dir /report -trans FRESH_开心分期_财务数据_每月结算表',
  channelStatistics: '/mnt/usr/local/data-integration/pan.sh -rep kettle -user admin -pass admin -dir /report -trans FRESH_开心分期_市场报表_渠道信息统计',
  channelSummaryStatistics: '/mnt/usr/local/data-integration/pan.sh -rep kettle -user admin -pass admin -dir /report -trans FRESH_开心分期_市场报表_渠道信息统计汇总 >> /home/dw/debug_kettle_log.log',
  promotionStatisticalChannel: ''
}
