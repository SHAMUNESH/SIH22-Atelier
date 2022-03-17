function getBotResponse(input) {
  //basic responses
  if (input == "hello") {
    return "Hello There!";
  } else if (input == "Thanks") {
    return "Thanks! Stay Safe :)";
  } else if (input == "help") {
    return "1- Tech Support!, 2- Customer Support!, 3- Sales!, 4- Payment and Gateways!";
  } else if (input == "review") {
    return "Your latest customer, Mr. Amit said the product was amazing and gave 5 starts! Hurray!";
  } else {
    return "I can't Understand! Sorry";
  }
}
