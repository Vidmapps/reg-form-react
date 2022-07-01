# Registration form

![image](https://user-images.githubusercontent.com/58663418/176723934-12cc132f-b889-4747-971b-672289820016.png)

## About The Project

React.js remake of my old [Vue.js project](https://github.com/Vidmapps/Registration-form).

Add the details of the customers to the `Customers registration form` to show their details in the `Customers list`, see their coordinates based on the address and edit them anytime.

- Click `Add Customer` to add the customer to the registration form;
- Click `Load location` to get the coordinates of the customer based on their address in hyper link that redirects to Google Maps;
- Click `Edit` to enable editing;
- Click `Save` to update the edited customer details;
- Click `Delete` to delete the customer.

### In progress

- `Cancel` edit mode button;
- Disable `Add Customer` if some fields left empty;

### Installation

- npm install
- assign your own Google maps [API key](https://developers.google.com/maps/documentation/javascript/get-api-key) to `const apiKey` in `coordinatesCheck.js`.
- npm start

### Built With

- React.js v18.2.0
