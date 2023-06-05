const fun1 = (parm1, additionalInformation = {}) => {
  //   console.log(additionalInformation);
  const fun2 = (parm1, ...additionalInformation) => {
    console.log(parm1);
    console.log(additionalInformation);
  };
  fun2(parm1, additionalInformation);
};

fun1(null, { key: "Mike" });
