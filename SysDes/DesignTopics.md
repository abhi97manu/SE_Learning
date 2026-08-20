##Event Driven Architecture##

**What is Event Driven Architecture?

For basic understanding, lets start with simple example of booking a seat. In this we have three services UserServices, BookingServices and the PayementServices.
Now user will login and make payment to book a seat. So the UserServices will command the PaymentService and once it is successfull the Payment 