## Front end Todos
---

#### Home Page
- [] Add filler text
- [] Add background image
---

#### Sign Up Page


**User details form**
- [] Add repeat password field
- [] Add validation
- [] Show error messages if something goes wrong
- [] Show success messages if submit was ok

**Personal details form**
- [] Add validation
- [] Show error messages if something goes wrong
- [] Show success messages if submit was ok
- [] Fix phone numbers field
---

#### Services
- [] Refactor services to be normal instead of classes
---

#### Patient services
- [] Fix routing maybe turn links in to a new menu?
##### Appointments
- [] Only dates after the booking date should be available
- [] Time should be in increment of 30 minutes starting from 8:00 and ending at 20:00 (e.g 10:00, 12:30, 16:30 etc)
- [] Fix the way a patient books a date 
(currently Submit button fetches an available doctor and Confirm button books the appointment)
- [] Display success message with appointment date and time and the doctor who was appointed when appointment is successfully booked
- [] Fix routing
- [] Provide option to redirect to Home/Services pages when booking is complete

##### Edit Details
- [x] Add validation to the form
- [x] Remove role field
- [x] Display error messages when something goes wrong
- [x] Add repeat password field
- [] Display success message if update was successful
- [] Provide option to redirect to Home/Services pages when edit is complete
- [] Add styling similar to login form
- [] Refactor using useField hook from Formik

---
#### About Page
- [] Add about page

---
#### Footer
- [] Add footer