# Restaurant-Ionic

This project was generated with [Ionic CLI] version 3.19.1.

## Build json-server

Open baseurl.ts in the folder "shared", and change the localhost in the following line to the IP address of your computer:

~~~~
export const baseURL = "http://<Your Machine's IP Address>:3000/";
~~~~

For example, if your IP address is 192.168.1.121, then the above line should be as follows:

~~~~
export const baseURL = "http://192.168.1.121:3000/";
~~~~


Run "json-server --watch db.json -d 2000" in the folder "json-server" to get resources.

  

## Development server

Run `ionic serve` for a dev server. Navigate to `http://localhost:8100/`. The app will automatically reload if you change any of the source files.

You can also navigate to `http://localhost:8100/ionic-lab` to operate it in the view of mobile device.

