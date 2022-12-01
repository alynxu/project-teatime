# CS 5610 Project Proposal - Teatime
Forked from previous team repo. Xiyou(Alyn) Xu will continue this project individually since iteration 1. (by Mon Nov 28th) 
- Currently it is for iteration 2, frontend and backend are successfully connected. The routes and api for User part is done. Once the user sign up, the user data will be saved into database. Then the user will be able to update their profile at the Profile page of the website. (first CRUD achieved)

## Progress in iteration2 updated by Wed Nov 30th: 
1. Great news: the website is successfully deployed.

- Deployed website URL: https://teatime.onrender.com
<img width="1277" alt="WechatIMG270" src="https://user-images.githubusercontent.com/113411833/204982113-1b1dec8b-1de4-4eb5-9c59-d9cc5316940f.png">
<img width="1456" alt="WechatIMG271" src="https://user-images.githubusercontent.com/113411833/204982520-b67004e1-88b0-4f86-a6da-db022b391e57.png">

- GitHub Repo Link(used for deployment): https://github.com/alynxu/project-teatime

2. Successfully connected with Mongodb database through Auth0 authenciation. 
- Once the user sign up, it will automatically create the user profile.(please use standard sign-up, sometimes the google associated sign-up/sign-in doesn't work but it works well using the standard sign-up/sign-in)
- After sign-up/sign-in, when user click "Profile" in the dropdown menu at the top right corner, the users are able to update their profile by clicking the "Update the Profile" button.
- After sign-up/sign-in, when user click "Orders" in the dropdown menu at the top right corner, the users able to read the list of all the orders that the user has been placed.
- In shopping cart page(click the shopping cart button in the top), the user can edit quantity of items in the cart or delete the items in the cart.(data saved in localStorage only for now, not in database). Once the user click "Continue to Checkout", the order will be created and saved in the database. The users can track their orders later on.

3. User identity verification added.
- The user has to log in before the user can add produst to the cart.
- The user has to log in before the suer can continue to checkout. (In case the user added items into cart then logged out.)

4. Manged products pages.
- Products are mapped into 4 different categoies. Each category page contains all the products of that specific category.
- Single product detail page added for each product. In this page, it shows the product image, product name, and product price. The user is able to click the "add to card" button and items in the shopping cart will automatically be counted and showing as number in red badge.

## Plans for iteration3:
1. Clarified with Neda that I will include "edit/delete" feature either in switching the data on ShoppingCart page from localStorage to save it into database, or I will have an admin user identity verification and then allow the admin user to edit/delete the current products.
- Haven't decided which one will go, but confirmed with Neda that either one would be fine to fulfill the "CRUD" requirement on main functionality.

2. Adjust profile pages to include more property of more specific user infomration(for example, split location into Province, City, Street)

3. Have a better formatted Contact page, using an external API(Google Map).

4. Complete search feature on homepage and the search results page.

5. Styling all pages to follow the UI sketch styles.

Eveything should be done in iteration3. If I have more time, will include another collection of "favorites" so that the user can create/delete their favorite prodcut in the favorites collection.












# Below this line is previous stage 
----------------------------------------------------------------------------------------
# Project Proposal, with iteration 1 summary 
## Clarify your target audience (Jieyu)
### What are your application users' needs and pain points?
Our application's target users are people who love tea and have a preference for tea drinks with caffeine or milk. 

Users’ Needs:
- Users want the drink stores to have delivery services so that they can order the drinks they like online from the drinks stores directly,  easily, and smoothly. A web application that enables them to place orders, track orders, and have favorites.
- Users want to have a clear layout in this web application so that they can easily browse different kinds of drinks and the details about each drink. The customers, especially those who are on a diet, may need to know specific info such as ingredients and nutrition.
- Users want to save money. Most customers would love to have a promotion when they buy products and also it would be better if there is a reward mechanism provided to loyalty customers.

Pain Points:
The customers will actually have to pay much more to place orders through food delivery apps than they buy drinks at stores in person. Many drinks stores do not provide food delivery service directly, so the users will have to place orders through third party platforms such as UberEats and DoorDash. However, those food delivery apps usually charge 20-30% service fee from the Merchant and 10% service fee from the Customer. Most merchants will raise the product price to cover the 20-30 service fee that is charged by the food delivery Apps, which results in more cost for customers.

### What problem/task(s)/need does the application help the users address?
To solve the needs as mentioned above, we develop an online website for the owner of a drinks store. Our application provides owners with these features:

- The straightforward style of website layout. Customers can get the category and search bar on the home page at first glance. They can browse the website to view each product and click that product to jump to a subpage with its related info, e.g. nutrition. Or they can use the search bar to find the desired product quickly.
- Quickly placing an online order. Once logged in, the customer can choose different kinds of add-ons, sugar levels, ice levels and quantities on each product's page. Then the users can add it to the shopping cart and proceed to payment.
- Membership management. The customer can create an account on the website. Account holders can save their favourite products, rank stars and write reviews on each product. The owner can provide promotions to loyal customers, such as buy 10 get one free.

## Do some competitor research to see what other people have done to solve similar problems and explain how your group application proposes to improve existing solutions - at least one feature should be either completely new OR an improvement on similar feature(s) of similar existing web applications. (Yichen)

An increasing number of people are considering opening their own independent drinks Stores. We aim to help these small business owners develop their own drinks  websites to compete with large franchise drink stores and manage the ordering system without using third-party food delivery platforms such as UberEats and DoorDash.
We found the websites of three major franchise drink sellers in the Greater Vancouver Area and compared their features with ours as below:

<img width="597" alt="WechatIMG190" src="https://user-images.githubusercontent.com/113411833/203226131-ee310977-2bfd-42ab-9156-23315d46708e.png">

Through comparisons, we found that all major competitors do not put product search and category functions in their homepage, only displaying them when users get to their online ordering pages. We understand they have plenty of drinking products and thus they’d like to display all products only on the menu page. However, as most independent sellers will focus on developing their signature drinks, we will integrate product search and category functions with the homepage so that customers can quickly find the products and purchase them online. In addition, we are strong believers that you are what you eat, which means we will add product calories to each drinking product and let users choose what they’d like to enjoy. However, due to the limited time we have for the development, we will only integrate a static store location page and not include product filters (product ranking) with this Beta version.

## Sketch the main pages and interactions between the user and the web application. (Xiyou)
### Homepage before sign in/register:
<img width="565" alt="WechatIMG158" src="https://user-images.githubusercontent.com/113411833/203226336-6d1a2733-571b-4fba-bf69-238c79846fca.png">

### Sign In Page:
<img width="579" alt="WechatIMG174" src="https://user-images.githubusercontent.com/113411833/203226360-7e2570aa-6b0c-4b47-b364-58c97eb918e9.png">

### Homepage after sign in/register(fours selections while clicking user icon at top right):
<img width="583" alt="WechatIMG180" src="https://user-images.githubusercontent.com/113411833/203226443-386674c3-24e4-4c47-9b45-d2bb2adb706f.png">

### User Profile Page:
<img width="653" alt="WechatIMG176" src="https://user-images.githubusercontent.com/113411833/203226468-8c2ae573-ec10-4c16-b16e-cb330a05ad19.png">

### Orders Page:
<img width="806" alt="WechatIMG191" src="https://user-images.githubusercontent.com/113411833/203226502-115d801b-c2e3-47af-83b3-471a05623932.png">

### Order Detail Page:
<img width="580" alt="WechatIMG184" src="https://user-images.githubusercontent.com/113411833/203226548-f9fd9170-0d1f-4a77-b78d-7c6ce1be3293.png">

### User’s  Rewards Page(Once 10 stars are lighten up, user can redeem 1 free drink):
<img width="693" alt="WechatIMG179" src="https://user-images.githubusercontent.com/113411833/203226591-d7bd5fb8-171a-4c10-8b3c-3776978d42cc.png">

### User’s Favorites Page:
<img width="669" alt="WechatIMG177" src="https://user-images.githubusercontent.com/113411833/203226626-79923bf0-a440-40df-8d46-2d4768a8c294.png">

### Menu page - Categories: 
<img width="742" alt="WechatIMG160" src="https://user-images.githubusercontent.com/113411833/203226650-4c38a173-1641-42e5-85d1-900cec2540a3.png">

### Categories Page - Tea:
<img width="538" alt="WechatIMG164" src="https://user-images.githubusercontent.com/113411833/203226685-14e834a5-7283-4f21-ac86-610f075e9aaa.png">

### Product Detail Page - Oolong tea:
<img width="536" alt="WechatIMG165" src="https://user-images.githubusercontent.com/113411833/203226704-832c8cfc-fd9c-406b-ad66-c71e1240d126.png">

### Shopping Cart Page - Checkout Step 1/2:
<img width="608" alt="WechatIMG166" src="https://user-images.githubusercontent.com/113411833/203226733-2c801112-c438-4eed-a704-703985e3557c.png">

### Shopping Cart Page - Checkout Step 2/2:
<img width="663" alt="WechatIMG167" src="https://user-images.githubusercontent.com/113411833/203226784-24257866-ed2d-45ee-9cf1-110b6326dcfc.png">

### Order Summary Page:
<img width="728" alt="WechatIMG168" src="https://user-images.githubusercontent.com/113411833/203226816-b6acd9f3-ed46-4338-98c5-4aefeb7ffe7a.png">

### Contact Page: 
<img width="687" alt="WechatIMG169" src="https://user-images.githubusercontent.com/113411833/203226835-5bb39543-e1d7-4e5b-a2d3-0128fd59c40b.png">




# Iteration 1 Summary:

In the Iteration, our group has developed the majority fo the frontend work of our website. However, we failed to connect the frontend to the backend server by the time we submitted our code.

##Contributions:

Xiyou Xu:
Xi'you(Alyn) Xu, refer to any commits made by author "alynxu" or "Xiyou Xu"

For the frontend, completed the whole structure of our web, including these components: Header, Navbar, Searchbar, Maincontent, Category, ProductCard, Cart. Built homepage, Cart page, Menu page based on previous components. For backend, wrote db.js to connect Mongo database and created userModel as schema of user data for the database. However, couldn't help much on routes setting on backend. Due to the lack of backend routes, failed to deploy the website. Tried to use Auth0 platform to connect custom database(MongoDB) but failed to pass user info to MongoDB after login.

Yichen Wang:
Yichen helped with the contact page and user profile page design. However, Yichen was stuck with setting up the product and user routers and failed the connect the backend with frontend.


Jieyu Bu:
Jieyu helped with connect user login to mongodb, deploy website and started a not preplan task on create and edit product. 
