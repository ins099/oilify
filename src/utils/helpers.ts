import { check, Permission, request, RESULTS } from "react-native-permissions";
import { utility } from "./utility";

export const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const formatDateTimeString = (
  dateString: string | Date,
  mode = "date",
  _format?: string,
) => {
  const date = new Date(dateString);
  const options = { day: '2-digit', month: 'long', year: 'numeric' };
  let formattedDate;
  if (mode == "time") {
    const copyDate = date
    formattedDate = `${copyDate.getHours()} : ${copyDate.getMinutes()}`
  } else {
    formattedDate = date
      .toLocaleDateString('en-GB', options as any)
      .replace(/ /g, ' ');
  }

  console.log(formattedDate)

  return formattedDate;
};

export const formateDate = (dateVal: Date, type: string = 'dd-MM-YYYY') => {
  const date = new Date(dateVal);
  // let month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
  let day = String(date.getDate()).padStart(2, '0');
  let month = monthNames[date.getMonth()];
  let year = date.getFullYear();

  if (type === 'YYYY-MM-DD') {
    month = `${date.getMonth() + 1}`;
    return `${year}-${month}-${day}`;
  }

  return `${day}-${month}-${year}`;
};

// Utility to merge new data without duplicates
export const mergeDataWithoutDuplicates = (
  existingData: any[],
  newData: any[],
) => {
  const existingIds = existingData.map(item => item._id);
  return [
    ...existingData,
    ...newData.filter(item => !existingIds.includes(item._id)),
  ];
};

// Handle debounce for search function
// export const debounce = (func: Function, delay: number) => {
//   let timeoutId: NodeJS.Timeout;
//   return (...args: any[]) => {
//     if (timeoutId) clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => {
//       func(...args);
//     }, delay);
//   };
// };

export function timeAgo(dateStr: string) {
  const now = new Date();
  const date = new Date(dateStr);
  const diffInMs = now - date;
  const diffInSeconds = Math.floor(diffInMs / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  const diffInWeeks = Math.floor(diffInDays / 7);
  const diffInMonths = Math.floor(diffInDays / 30); // Approximate value for months

  if (diffInSeconds < 60) {
    return `${diffInSeconds} seconds ago`;
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes} minutes ago`;
  } else if (diffInHours < 24) {
    return `${diffInHours} hours ago`;
  } else if (diffInDays < 7) {
    return `${diffInDays} days ago`;
  } else if (diffInWeeks < 4) {
    return `${diffInWeeks} weeks ago`;
  } else {
    return `${diffInMonths} months ago`;
  }
}

export function extractPlaceDetails(data: any) {
  const placeName =
    data.address_components.find(
      (component: any) =>
        component.types.includes('establishment') ||
        component.types.includes('point_of_interest'),
    )?.long_name || '';

  const city =
    data.address_components.find((component: any) =>
      component.types.includes('locality'),
    )?.long_name || '';

  const country =
    data.address_components.find((component: any) =>
      component.types.includes('country'),
    )?.long_name || '';

  const description = data.formatted_address || '';

  return {
    id: data?.place_id,
    placeName,
    city,
    country,
    description,
  };
}


export const checkAndRequestPermission = async (permission: Permission) => {
  try {
    const permissionStatus = await check(permission);

    if (permissionStatus === RESULTS.GRANTED) {
      console.log(`${permission} is granted`);
      return true;
    }

    const requestStatus = await request(permission);

    if (requestStatus === RESULTS.GRANTED) {
      console.log(`${permission} granted after request`);
      return true;
    } else {
      console.log(`${permission} denied`);
      return false;
    }

  } catch (error) {
    console.error('Permission error: ', error);
    return false;
  }
};

export const extractDateAndTime = (dateTimeString: string) => {
  const date = new Date(dateTimeString);
  const now = new Date();

  const isToday = date.toDateString() === now.toDateString();
  const isTomorrow = date.toDateString() === new Date(now.getTime() + 24 * 60 * 60 * 1000).toDateString();
  const isYesterday = date.toDateString() === new Date(now.getTime() - 24 * 60 * 60 * 1000).toDateString();

  const timeOptions: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: '2-digit', hour12: true };
  const time = date.toLocaleTimeString('en-US', timeOptions);

  if (isToday) {
    return `${utility.translate("TODAY")} ${utility.translate("AT")} ${time}`;
  } else if (isTomorrow) {
    return `${utility.translate("TOMORROW")} ${utility.translate("AT")} ${time}`;
  } else if (isYesterday) {
    return `${utility.translate("YESTERDAY")} ${utility.translate("AT")} ${time}`;
  } else {
    const dateOptions: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short' };
    const formattedDate = date.toLocaleDateString('en-GB', dateOptions);
    return `${formattedDate} at ${time}`;
  }
};