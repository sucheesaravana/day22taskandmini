function AlertPanel({ status }) {
  let message = null;
  let className = "";

  if (status === "success") {
    message = "Operation Complete";
    className = "success";
  } else if (status === "warning") {
    message = "Check Inputs";
    className = "warning";
  } else if (status === "error") {
    message = "Fatal Error";
    className = "error";
  } else {
    
    return null; 
  }

  return <div className={className}>{message}</div>;
}
export default AlertPanel
