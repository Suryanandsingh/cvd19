
const months = {
    '01': 'Jan',
    '02': 'Feb',
    '03': 'Mar',
    '04': 'Apr',
    '05': 'May',
    '06': 'Jun',
    '07': 'Jul',
    '08': 'Aug',
    '09': 'Sep',
    '10': 'Oct',
    '11': 'Nov',
    '12': 'Dec',
  };


export function dateTimeFormat(timestamps, isFull){
    var date = `${timestamps}`.slice(0, 2)
    var month = months[`${timestamps}`.slice(3, 5)] 
    return isFull ? `${date}/${month}/`:`${date} ${month}`
}

export function dateFormat(date){
  var day = `${date.getDate()<10?'0'+date.getDate():date.getDate()}`
  var month = `${date.getMonth()+1<10?'0'+(date.getMonth()+1):date.getMonth()+1}`
  return `${day}/${month}/${date.getFullYear()}`
}


export function filterByObject(obj, filters) {
  const keys = Object.keys(filters);
  return obj.filter((p) => {
    return keys.every((key) => {
      if (!filters[key].length) return true;
      return p[key] === filters[key];
    });
  });
}

export function compareValues(key, order = 'asc') {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0;
    }

    const varA = (typeof a[key] === 'string')
      ? a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string')
      ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
      (order === 'desc') ? (comparison * -1) : comparison
    );
  };
}