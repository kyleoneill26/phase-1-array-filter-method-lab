function findMatching(drivers, name1) {
    return drivers.filter(function (driver) { 
        return driver.toLowerCase() === name1.toLowerCase() })
  }
  function fuzzyMatch(drivers, name1) {
    return drivers.filter(function (driver) {
        return driver.toLowerCase().substring(0, name1.length) === name1.toLowerCase()
    })
  }
  function matchName(driver, name2){
    return driver.filter(function (driver){
        return driver.name === name2 
    })
  }