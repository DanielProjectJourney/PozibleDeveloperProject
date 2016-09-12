var targetsData = [
  {
    Name: 'Introducing Telescope',
    Type: 'Individual Project',
    StartDate: '10-10-2016',
    EndDate: '10-10-2017',
    TotalPercentage: '80%',
    SeasonId: "3",
    UserIds: "26299038",
  },
  {
    Name: 'Alipay',
    Type: 'Company-wide',
    StartDate: '10-10-2016',
    EndDate: '10-10-2017',
    TotalPercentage: '80%',
    SeasonId: "3",
    UserIds: "26299039",
  },
  {
    Name: 'Google Tensonflow',
    Type: 'Compnay-wide',
    StartDate: '10-10-2016',
    EndDate: '10-10-2017',
    TotalPercentage: '80%',
    SeasonId: "3",
    UserIds: "26299040",
  }
];
Template.targetsList.helpers({
  targets: targetsData
});
