//kilometerToMeter Function
function kilometerToMeter(distance) {
  if (distance <= 0) {
    return "value can't be zero or negative";
  }
  return distance * 1000;
}

//budgetCalculator Function

function budgetCalculator(watch, phone, laptop) {
  const watchPrice = 50;
  const phonePrice = 100;
  const laptopPrice = 500;
  if (watch < 0 || phone < 0 || laptop < 0) {
    return "value can't be negative";
  }
  total = watchPrice * watch + phonePrice * phone + laptopPrice * laptop;

  return total;
}

//hotelCost Function

function hotelCost(dayStay) {
  const FirstTenDays = 100;
  const SecondsTenDays = 80;
  const RestOftheDays = 50;
  if (dayStay <= 0) {
    return "please stay then your cost will be counted";
  }

  if (dayStay > 0 && dayStay <= 10) {
    let totalHotelCost = dayStay * FirstTenDays;
    return totalHotelCost;
  } else if (dayStay >= 11 && dayStay <= 20) {
    let costOfFirstTenDays = 10 * FirstTenDays;
    let costOfRemainingDays = (dayStay - 10) * SecondsTenDays;
    let totalHotelCost = costOfFirstTenDays + costOfRemainingDays;
    return totalHotelCost;
  } else {
    let costOfFirstTenDays = 10 * FirstTenDays;
    let costOfSecondTenDays = 10 * SecondsTenDays;
    let costOfRemainingDays = (dayStay - 20) * RestOftheDays;
    let totalHotelCost =
      costOfFirstTenDays + costOfSecondTenDays + costOfRemainingDays;
    return totalHotelCost;
  }
}

//megaFriends Function

function megaFriend(friendsName) {
  var highestLength = [0];

  for (var i = 0; i < friendsName.length; i++) {
    var name = friendsName[i];

    if (name.length > highestLength) {
      highestLength = name.length;
      resultName = name;
    }
  }
  return resultName;
}
