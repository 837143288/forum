resData = (data, status, errorMsg, errorTitle, errorCode) => {
  const res = {
    data,
    status,
    errorMsg,
    errorTitle,
    errorCode,
  }
  return res
}

module.exports = { resData }