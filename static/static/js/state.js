const stripeKey = "pk_live_51IYCxHIBcIXXVVnRh3LmlKTI8W6Gzf4bw3dhFRwqNS40YZXImnOuxegSYzX7zkD197A4rbboEgZG8KG7kMDzdenF006rw4P5F6";
let state = {
  resource_url: '/tms-session.json',
  isLoading: false,
  isSessionLoading: false,
  errorRes: null,
  paymentType: 'cc',
  is_validate: false,
  isPaymentValid: false,
  trainingSessionData: null,
  trainingSessionApiData: null,
  viewtype: 'list-view',
  cartProductTypes: [],
  courseCheckoutInfo: {
    subtotal: 0,
    tax: 0,
    discount: 0,
    total: 0
  },
  invoiceForm: {
    invoice: true,
    poNumber: null,
    terms: false,
    invoicePay: false,
  },
  creditCardForm: {
    cardNumber: null,
    terms: false,
    fullName: null,
    expiryDate: null,
    cvcCode: null,
    creditCardPay: false
  },
  filtersData: {
    SessionFormat: [],
    Region: [],
    City: [],
    Discipline: [],
    Level: [],
  },
  product: {
    id: null,
    title: null,
    price: null,
    aboutBook: null,
    author: null,
    pageCount: null,
    publisher: null,
  },
  onlyBooks: true,
  module: {
    id: null,
    title: null,
    price: null,
    about: null,
    format: null,
    duration: null,
    disciplineName: null
  },
  showBackOnCartView: true,
  userEmail: null,
  shippingStatus: true,
  orderSummaryItems: null,
  courseStudents: null,
  stripeRes: null,
  paymentIntent: null,
  cardElements: null,
  stripe: Stripe(stripeKey),
  invoiceOrder: null,
  cartItems: null,
  moduleStudents: null,
  loading: false,
  qty: 1,
  coursePriceFromApi: null,
  paymentResponse: null,
  ccInfo: null,
  creditCardCommitError: null,
  courseTransaction: null,
  courseInvoiceTransaction: null,
  paymentError: null,
  isPurchaserInfo: false,
  isBillingInfo: false,
  isShippingInfo: false,
  isPaymentInfo: false,
  isCourseYourInfo: false,
  courseInfo: {
    id: null,
    title: null,
    format: null,
    location: null,
    startDate: null,
    endDate: null,
    price: null,
    instructors: []
  },
  savedData: {
    yourInfo: {
      showSummary: false,
      firstName: "",
      lastName: "",
      title: "",
      email: "",
      cc: "1",
      phoneNumber: "",
      countryCode: '',
      countryName: ''
    },
    shippingAddress: {
      showSummary: false,
      firstname: "",
      lastname: "",
      cc: "1",
      phoneNumber: "",
      company: "",
      addressLineOne: "",
      street: "",
      city: "",
      state: "",
      zip: "",
      countryCode: '',
      countryName: ''
    },
    deliveryaddress: {
      showSummary: false,
      email: "",
      terms: true,
      firstname: "",
      lastname: "",
      cc: "1",
      phoneNumber: "",
      company: "",
      addressLineOne: "",
      street: "",
      city: "",
      state: "",
      zip: "",
      countryCode: '',
      countryName: ''
    },
  },

  courseSavedData: {
    yourInfo: {
      firstName: "",
      lastName: "",
      title: "",
      email: "",
      cc: "1",
      phoneNumber: "",
      company: "",
      address: "",
      city: "",
      state: "",
      postalCode: "",
      countryCode: '',
      countryName: ''
    },
    billingInfo: {
      firstname: "",
      lastname: "",
      cc: "1",
      phoneNumber: "",
      company: "",
      addressLineOne: "",
      street: "",
      city: "",
      state: "",
      zip: "",
      countryCode: '',
      countryName: ''
    },
  },
  countries: null,
  countriesList: null,
  referrals: null,
  coursePaymentTab: {
    yourInfo: false,
    billingInfo: false,
    payInfo: false,
  },
  paymentTab: {
    yourInfo: false,
    billingInfo: false,
    shippingInfo: false,
    payInfo: false,
  },
  courseTab: {
    stepOne: true,
    stepTwo: false,
    stepThree: false,
    stepFour: false,
  },
  activeTab: {
    stepOne: true,
    stepTwo: false,
    stepThree: false,
    stepFour: false,
    stepStudenAdd: false,
  },
}


const reloadState = () => {
  state.orderSummaryItems = state.cartItems;
  state.courseTransaction = state.courseTransaction;
  state.courseStudents = state.courseStudents;
  state.courseInfo = state.courseInfo;
  state.countries = state.countries;
  state.referrals = state.referrals;
  state.countriesList = state.countriesList;
  state.coursePriceFromApi = state.coursePriceFromApi;

  state.isLoading = false,
    state.isSessionLoading = false,
    state.errorRes = null,
    state.is_validate = false,
    state.isPaymentValid = false
  state.trainingSessionData = null,
    state.trainingSessionApiData = null,
    state.viewtype = 'list-view',
    state.cartProductTypes = [],
    state.invoiceForm = {
      invoice: true,
      poNumber: null,
      terms: false,
      invoicePay: false,
    },
    state.creditCardForm = {
      cardNumber: null,
      terms: false,
      fullName: null,
      expiryDate: null,
      cvcCode: null,
      creditCardPay: false
    },
    state.courseCheckoutInfo = {
      subtotal: 0,
      tax: 0,
      discount: 0,
      total: 0
    },
    state.filtersData = {
      SessionFormat: [],
      Region: [],
      City: [],
      Discipline: [],
      Level: [],
    },
    state.product = {
      id: null,
      title: null,
      price: null,
      aboutBook: null,
      author: null,
      pageCount: null,
      publisher: null,
    },
    state.onlyBooks = true,
    state.module = {
      id: null,
      title: null,
      price: null,
      about: null,
      format: null,
      duration: null,
      disciplineName: null
    },
    state.showBackOnCartView = true,
    state.userEmail = null,
    state.shippingStatus = true,
    // state.orderSummaryItems = null,
    // state.courseStudents = null,
    state.stripeRes = null,
    state.paymentIntent = null,
    state.cardElements = null,
    state.stripe = Stripe(stripeKey),
    state.invoiceOrder = null,
    state.cartItems = null,
    state.moduleStudents = null,
    state.loading = false,
    state.qty = 1,
    // state.coursePriceFromApi = null,
    state.paymentResponse = null,
    state.ccInfo = null,
    state.creditCardCommitError = null,
    // state.courseTransaction = null,
    state.courseInvoiceTransaction = null,
    state.isPurchaserInfo = false,
    state.isBillingInfo = false,
    state.isShippingInfo = false,
    state.isPaymentInfo = false,
    state.paymentError = null,
    state.isCourseYourInfo = false,
    // state.courseInfo = {
    //   id: null,
    //   title: null,
    //   format: null,
    //   location: null,
    //   startDate: null,
    //   endDate: null,
    //   price: null,
    //   instructors: []
    // },
    state.savedData = {
      yourInfo: {
        showSummary: false,
        firstName: "",
        lastName: "",
        title: "",
        email: "",
        cc: "1",
        phoneNumber: "",
        countryCode: '',
        countryName: ''
      },
      shippingAddress: {
        firstname: "",
        lastname: "",
        cc: "1",
        phoneNumber: "",
        company: "",
        addressLineOne: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        countryCode: '',
        countryName: ''
      },
      deliveryaddress: {
        email: "",
        terms: true,
        firstname: "",
        lastname: "",
        cc: "1",
        phoneNumber: "",
        company: "",
        addressLineOne: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        countryCode: '',
        countryName: '',
        showSummary: false
      },
    },

    state.courseSavedData = {
      yourInfo: {
        firstName: "",
        lastName: "",
        title: "",
        email: "",
        cc: "1",
        phoneNumber: "",
        company: "",
        address: "",
        city: "",
        state: "",
        postalCode: "",
        countryCode: '',
        countryName: '',
        referralId: '',
        referralName: '',
        referralOther: ''
      },
      billingInfo: {
        firstname: "",
        lastname: "",
        cc: "1",
        phoneNumber: "",
        company: "",
        addressLineOne: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        countryCode: '',
        countryName: ''
      },
    },
    // state.countries = null,
    // state.countriesList = null,
    state.coursePaymentTab = {
      yourInfo: false,
      billingInfo: false,
      payInfo: false,
    },
    state.paymentTab = {
      yourInfo: false,
      billingInfo: false,
      shippingInfo: false,
      payInfo: false,
    },
    state.courseTab = {
      stepOne: true,
      stepTwo: false,
      stepThree: false,
      stepFour: false,
    }
  // state.activeTab = {
  //   stepOne: true,
  //   stepTwo: false,
  //   stepThree: false,
  //   stepFour: false,
  //   stepStudenAdd: false,
  // }
};


// Get Countries
const getCountries = function () {
  fetch("/static/js/countries.json")
    .then((response) => {
      console.log('got countries')
      return response.json();
    })
    .then((data) => {
      state.countries = data;
    });
}();

// Get Referrals
const getReferrals = function () {
  fetch("/static/js/referrals.json")
    .then((response) => {
      console.log('got referrals')
      return response.json();
    })
    .then((data) => {
      state.referrals = data;
      console.log(state.referrals);
    });
}();

// Get Countries
const getCountriesList = function () {
  fetch("/static/js/countries-abb.json")
    .then((response) => {
      console.log('got countries abb')
      return response.json();
    })
    .then((data) => {
      state.countriesList = data;
    });
}();


const getSavedData = () => {
  // console.log(state.savedData.shippingAddress)
  state.loading = true;
  axios
    .get("/checkout-info-api")
    .then(function (response) {
      console.log(response.data);

      if (response.data.yourInfo) {
        state.savedData.yourInfo = response.data.yourInfo;
        state.savedData.yourInfo.showSummary = true;
        state.isPurchaserInfo = true;
      }
      if (response.data.deliveryaddress) {
        state.savedData.deliveryaddress = response.data.deliveryaddress;
        state.savedData.deliveryaddress.showSummary = true;
        state.isBillingInfo = true;
        if (state.shippingStatus) {
          state.isShippingInfo = true;
        }
      }
      if (response.data.shippingAddress) {
        console.log(state.savedData.shippingAddress)
        state.savedData.shippingAddress = response.data.shippingAddress;
        state.isShippingInfo = true;
      }
      // else {
      //   if (response.data.deliveryaddress) {
      //     state.isShippingInfo = true;
      //     state.savedData.shippingAddress = response.data.deliveryAddress
      //     console.log(state.savedData.shippingAddress)
      //   }
      // }

    })
    .catch(function (error) {
      console.log(error);
      alert("something went wrong! reload page again");
    })
    .then(function () {
      state.loading = false;
      console.log('state.savedData', state.savedData)
    });
};
getSavedData()


const toDollars = (num) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(num);
};

const setSessionFormat = () => {
  for (const key in state.trainingSessionApiData) {
    if (Object.hasOwnProperty.call(state.trainingSessionApiData, key)) {
      const element = state.trainingSessionApiData[key];
      state.filtersData.SessionFormat = _.union([element.SessionFormat], state.filtersData.SessionFormat)
    }
  }
}
const setRegion = () => {
  for (const key in state.trainingSessionApiData) {
    if (Object.hasOwnProperty.call(state.trainingSessionApiData, key)) {
      const element = state.trainingSessionApiData[key];
      state.filtersData.Region = _.union([element.Region], state.filtersData.Region)
    }
  }
}
const setCity = () => {
  for (const key in state.trainingSessionApiData) {
    if (Object.hasOwnProperty.call(state.trainingSessionApiData, key)) {
      const element = state.trainingSessionApiData[key];
      state.filtersData.City = _.union([element.Location], state.filtersData.City)
    }
  }
}
const setDiscipline = () => {
  for (const key in state.trainingSessionApiData) {
    if (Object.hasOwnProperty.call(state.trainingSessionApiData, key)) {
      const element = state.trainingSessionApiData[key];
      state.filtersData.Discipline = _.union([element.DisciplineName], state.filtersData.Discipline)
    }
  }
}
const setLevel = () => {
  for (const key in state.trainingSessionApiData) {
    if (Object.hasOwnProperty.call(state.trainingSessionApiData, key)) {
      const element = state.trainingSessionApiData[key];
      state.filtersData.Level = _.union([element.Level], state.filtersData.Level)
    }
  }
}
const getTranings = async () => {
  state.isSessionLoading = true
  await axios.get('/courses/scheduled').then(function (response) {
    // console.log('response', response.data.courses)
    coursesData = response.data.courses;
    state.filterData = coursesData.filterData
    let todayDate = new Date(); //Today Date
    let sessionData = [];
    for (const key in coursesData.sessionData) {
      if (Object.hasOwnProperty.call(coursesData.sessionData, key)) {
        const element = coursesData.sessionData[key];
        if (new Date((element.StartDate)) > todayDate) {
          sessionData.push(element);
        }
      }
    }

    state.trainingSessionData = sessionData
    state.trainingSessionApiData = sessionData
  })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      state.isSessionLoading = false
    });
}


const mapCountries = (countryId) => {
  for (const key in state.countries) {
    if (Object.hasOwnProperty.call(state.countries, key)) {
      const element = state.countries[key];
      if (element.ID == countryId) {
        return element.Name;
      }
    }
  }
}

const mapReferrals = (referralId) => {
  for (const key in state.referrals) {
    if (Object.hasOwnProperty.call(state.referrals, key)) {
      const element = state.referrals[key];
      if (element.ID == referralId) {
        return element.Name;
      }
    }
  }
}

const mapCountriesList = (countryCode) => {
  for (const key in state.countriesList) {
    if (Object.hasOwnProperty.call(state.countriesList, key)) {
      const element = state.countriesList[key];
      if (element.abbreviation == countryCode) {
        return element.Name;
      }
    }
  }
}
const checkIsBooksOnly = () => {
  if (state.cartItems) {
    state.onlyBooks = true
    for (const key in state.cartItems.items) {
      if (Object.hasOwnProperty.call(state.cartItems.items, key)) {
        const item = state.cartItems.items[key];
        if (item.type != 'Book') {
          state.onlyBooks = false
        }
      }
    }
  }
}

const dateFormat = (dateInput) => {
  let monthsName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  console.log(dateInput);
  if (dateInput && dateInput.length) {
    let dateArr = dateInput.split("/");
    let year = (dateArr[2].length == 2) ? "20" + dateArr[2] : dateArr[2];
    return dateArr[1] + " " + monthsName[parseInt(dateArr[0]) - 1] + " " + year;
  }

}