export function ToJalaliDate(isoDate) {
  const gDate = new Date(isoDate);
  const gYear = gDate.getFullYear();
  const gMonth = gDate.getMonth() + 1;
  const gDay = gDate.getDate();
  const gHours = gDate.getHours().toString().padStart(2, "0");
  const gMinutes = gDate.getMinutes().toString().padStart(2, "0");

  // تعداد روزهای هر ماه میلادی
  const gDaysInMonth = [
    31,
    gYear % 4 === 0 ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  let gy = gYear - 1600;
  let gm = gMonth - 1;
  let gd = gDay - 1;

  let gDayNo =
    365 * gy +
    Math.floor((gy + 3) / 4) -
    Math.floor((gy + 99) / 100) +
    Math.floor((gy + 399) / 400);

  for (let i = 0; i < gm; i++) gDayNo += gDaysInMonth[i];
  gDayNo += gd;

  let jDayNo = gDayNo - 79;
  let jNp = Math.floor(jDayNo / 12053);
  jDayNo %= 12053;

  let jy = 979 + 33 * jNp + 4 * Math.floor(jDayNo / 1461);
  jDayNo %= 1461;

  if (jDayNo >= 366) {
    jy += Math.floor((jDayNo - 1) / 365);
    jDayNo = (jDayNo - 1) % 365;
  }

  let jm, jd;
  for (
    jm = 0;
    jm < 11 && jDayNo >= [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29][jm];
    jm++
  )
    jDayNo -= [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29][jm];

  jd = jDayNo + 1;

  return `${jy}/${(jm + 1).toString().padStart(2, "0")}/${jd.toString().padStart(2, "0")} ${gHours}:${gMinutes}`;
}

function gregorianToJalali(gy, gm, gd) {
  var g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  var jy = gy <= 1600 ? 0 : 979;
  gy -= gy <= 1600 ? 621 : 1600;
  var gy2 = gm > 2 ? gy + 1 : gy;
  var days =
    365 * gy +
    Math.floor((gy2 + 3) / 4) -
    Math.floor((gy2 + 99) / 100) +
    Math.floor((gy2 + 399) / 400) -
    80 +
    gd +
    g_d_m[gm - 1];
  jy += 33 * Math.floor(days / 12053);
  days %= 12053;
  jy += 4 * Math.floor(days / 1461);
  days %= 1461;
  if (days > 365) {
    jy += Math.floor((days - 1) / 365);
    days = (days - 1) % 365;
  }
  var jm =
    days < 186 ? 1 + Math.floor(days / 31) : 7 + Math.floor((days - 186) / 30);
  var jd = 1 + (days < 186 ? days % 31 : (days - 186) % 30);
  return { jy, jm, jd };
}

// تبدیل به متن خوانا
export function formatPersianDate(dateString) {
  const [gy, gm, gd] = String(dateString).split("-").map(Number);
  const { jy, jm, jd } = gregorianToJalali(gy, gm, gd);

  const persianMonths = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];

  return `${jd} ${persianMonths[jm - 1]} ${jy}`;
}
