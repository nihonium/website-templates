require=(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({"./lang/ar":[function(require,module,exports){
module.exports = {
  accepted: "الصفة :attribute يجب أن تكون مقبولة",
  after: "الصفة :attribute يجب أن تكون بعد الصفة :after.",
  after_or_equal: "الصفة :attribute يجب أن تكون مساوية أو بعد الصفة :after_or_equal.",
  alpha: "حقل الصفة  :attribute يجب أن تحتوي على أحرف فقط",
  alpha_dash: "حقل الصفة :attribute مسموح بأن يحتوي على حروف و أرقام و شرطة و شرطة منخفضة",
  alpha_num: "حقل الصفة :attribute يجب أن يحتوي على أحرف و أرقام",
  before: "الصفة :attribute يجب أن تكون قبل :before.",
  before_or_equal: "الصفة :attribute يجب أن تكون مساوية أو قبل الصفة :before_or_equal.",
  between: "حقل الصفة :attribute يجب أن يكون بين :min و :max.",
  confirmed: "تأكيد الصفة :attribute غير متطابق.",
  email: "الصفة :attribute صيغتها غير صحيحة",
  date: "الصفة :attribute صيغتها ليست تاريخ صحيح",
  def: "الصفة :attribute تحتوي على أخطاء",
  digits: "الصفة :attribute يجب أن تكون :digits أرقام.",
  digits_between: "يجب أن يحتوي :attribute بين :min و :max رقمًا/أرقام .",
  different: "الصفة :attribute و الصفة :different يجب أن تكونا مختلفتين",
  in: "الصفة :attribute المختارة، غير صحيحة.",
  integer: "الصفة :attribute يجب أن تكون عدد صحيح",
  hex: "حقل الصفة :attribute يجب أن يحتوي على صيغة هكسيديسمل",
  min: {
    numeric: "الصفة :attribute يجب أن تكون :min على الأقل",
    string: "الصفة :attribute يجب أن تكون :min حرف على الأقل."
  },
  max: {
    numeric: "الصفة :attribute لا يمكن أن تكون أكبر من  :max.",
    string: "الصفة :attribute يجب أن لا تكون أكثر من :max حرف."
  },
  not_in: "الصفة :attribute المختارة غير صحيحة.",
  numeric: "الصفة :attribute يجب أن تكون رقما.",
  present: "حقل الصفة :attribute يجب أن يكون معرفا ، يمكن أن يكون فارغا.",
  required: "حقل الصفة :attribute مطلوب.",
  required_if: "حقل الصفة :attribute مطلوب حين تكون قيمة الحقل :other تساوي :value.",
  required_unless: "حقل الصفة :attribute مطلوب حين تكون قيم الحقل :other لا تساوي :value.",
  required_with: "حقل الصفة :attribute مطلوب حين يكون الحقا :field غير فارغ.",
  required_with_all: "حقل الصفة :attribute مطلوب حين تكون الحقول :fields غير فارغة.",
  required_without: "حقل الصفة :attribute مطلوب حين يكون الحقل :field فارغا.",
  required_without_all: "حقل الصفة :attribute مطلوب حين تكون الحقول :fields فارغة.",
  same: "حقل الصفة :attribute و حقل الصفة :same يجب أن يتطابقا.",
  size: {
    numeric: "الصفة :attribute يجب أن تكون :size.",
    string: "الصفة :attribute يجب أن تكون :size حرفا."
  },
  string: "الصفة :attribute يجب أن تكون نص.",
  url: "الصفة :attribute صياغتها غير صحيحة.",
  regex: "الصفة :attribute صياغتها غير صحيحة.",
  attributes: {
    username: "اسم المستخدم",
    password: "كلمة المرور",
    email: "البريد الالكتروني",
    website: "الموقع الالكتروني",
    firstname: "الاسم الاول",
    lastname: "الاسم الاخير",
    subject: "الموضوع",
    city: "المدينة",
    region: "المنطقة",
    country: "الدولة",
    street: "الشارع",
    zipcode: "الرمز البريدي",
    phone: "رقم الهاتف",
    mobile: "رقم الجوال"
  }
};

},{}]},{},[]);
