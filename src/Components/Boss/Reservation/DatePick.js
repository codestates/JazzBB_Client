export default function DatePick({ChangeDate}) {
    // const week = ["일", "월", "화", "수", "목", "금", "토"];
    const today = new Date();
    const dateGenerate = () => {
      var year = today.getFullYear();
      var month = today.getMonth() + 1;
      if(month < 10){
        month = '0' + month
      }
      var date = today.getDate();
      if(date < 10){
        date = '0'+ date
      }
      // var day = week[Number(today.getDay())];
      var fixedDate =
        year + "-" + month + "-" + date ;
        // year + "-" + month + "- " + date + "- " + "(" + day + ")";
      return fixedDate;
    };
    }