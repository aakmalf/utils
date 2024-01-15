# This the code that can be used to save google sheet every day by automatically with date as additional file name


function copy() {
  var today = Utilities.formatDate(new Date(), "GMT+8", "dd.MM.yyyy")

  const todayNew = new Date();
  const yesterday = Utilities.formatDate(new Date(new Date().setDate(todayNew.getDate() - 1)),"GMT+8", "dd.MM.yyyy")

  const month = Utilities.formatDate(new Date(new Date().setDate(todayNew.getDate() - 1)),"GMT+8", "MM");
  var folder = DriveApp.getFoldersByName(month).next()

  //var folder = DriveApp.getFolderById("1jA7yi5hhX5zzzdR5LPrXJ5oo2HlcYA7X")

  DriveApp.getFileById("1n-n3ErlBbJTQ004dcfK1S6OsrdoZ7QVIacwnPQ8gGDU").makeCopy("Procurement DREP " + yesterday, folder)
  DriveApp.getFileById("1n-n3ErlBbJTQ004dcfK1S6OsrdoZ7QVIacwnPQ8gGDU").setName("Procurement DREP " + today )


}
