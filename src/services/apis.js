const BASE_URL_ = process.env.BASE_URL;

// AUTH ENDPOINTS
export const endpoints = {
  SENDOTP_API: `${BASE_URL_}/auth/sendotp`,
  SIGNUP_API: `${BASE_URL_}/auth/signup`,
  LOGIN_API: `${BASE_URL_}/auth/login`,
  RESETPASSTOKEN_API: `${BASE_URL_}/auth/reset-password-token`,
  RESETPASSWORD_API: `${BASE_URL_}/auth/reset-password`,
}

// PROFILE ENDPOINTS
export const profileEndpoints = {
  GET_USER_DETAILS_API: `${BASE_URL_}/profile/getUserDetails`,
  GET_USER_ENROLLED_COURSES_API: `${BASE_URL_}/profile/getEnrolledCourses`,
  GET_INSTRUCTOR_DATA_API: `${BASE_URL_}/profile/instructorDashboard`,
}

// STUDENTS ENDPOINTS
export const studentEndpoints = {
  COURSE_PAYMENT_API: `${BASE_URL_}/payment/capturePayment`,
  COURSE_VERIFY_API: `${BASE_URL_}/payment/verifyPayment`,
  SEND_PAYMENT_SUCCESS_EMAIL_API: `${BASE_URL_}/payment/sendPaymentSuccessEmail`,
}

// COURSE ENDPOINTS
export const courseEndpoints = {
  GET_ALL_COURSE_API: `${BASE_URL_}/course/getAllCourses`,
  COURSE_DETAILS_API: `${BASE_URL_}/course/getCourseDetails`,
  EDIT_COURSE_API: `${BASE_URL_}/course/editCourse`,
  COURSE_CATEGORIES_API: `${BASE_URL_}/course/showAllCategories`,
  CREATE_COURSE_API: `${BASE_URL_}/course/createCourse`,
  CREATE_SECTION_API: `${BASE_URL_}/course/addSection`,
  CREATE_SUBSECTION_API: `${BASE_URL_}/course/addSubSection`,
  UPDATE_SECTION_API: `${BASE_URL_}/course/updateSection`,
  UPDATE_SUBSECTION_API: `${BASE_URL_}/course/updateSubSection`,
  GET_ALL_INSTRUCTOR_COURSES_API: `${BASE_URL_}/course/getInstructorCourses`,
  DELETE_SECTION_API: `${BASE_URL_}/course/deleteSection`,
  DELETE_SUBSECTION_API: `${BASE_URL_}/course/deleteSubSection`,
  DELETE_COURSE_API: `${BASE_URL_}/course/deleteCourse`,
  GET_FULL_COURSE_DETAILS_AUTHENTICATED:
    `${BASE_URL_}/course/getFullCourseDetails`,
  LECTURE_COMPLETION_API: `${BASE_URL_}/course/updateCourseProgress`,
  CREATE_RATING_API: `${BASE_URL_}/course/createRating`,
}

// RATINGS AND REVIEWS
export const ratingsEndpoints = {
  REVIEWS_DETAILS_API: `${BASE_URL_}/course/getReviews`,
}

// CATAGORIES API
export const categories = {
  CATEGORIES_API: `${BASE_URL_}/course/showAllCategories`,
}

// CATALOG PAGE DATA
export const catalogData = {
  CATALOGPAGEDATA_API: `${BASE_URL_}/course/getCategoryPageDetails`,
}
// CONTACT-US API
export const contactusEndpoint = {
  CONTACT_US_API: `${BASE_URL_}/reach/contact`,
}

// SETTINGS PAGE API
export const settingsEndpoints = {
  UPDATE_DISPLAY_PICTURE_API: `${BASE_URL_}/profile/updateDisplayPicture`,
  UPDATE_PROFILE_API: `${BASE_URL_}/profile/updateProfile`,
  CHANGE_PASSWORD_API: `${BASE_URL_}/auth/changepassword`,
  DELETE_PROFILE_API: `${BASE_URL_}/profile/deleteProfile`,
}