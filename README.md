# proxy-server-grace

INSTRUCTIONS TO CONNECT SERVICE

Step One: server/server.js
  1. Use http-proxy-middleware to add a route for your service's bundle.js
  2. Rewrite the path if necessary (dependent on your service)
Step Two: public/proxy.js
  1. Continue the Ajax chain with a call to your service's route (which you defined in the above)

That's it! Your service should now show up on the proxy. If it's not working, here are some things to note:
- I removed the necessity to have /product/:id on both the proxy and the individual service, so everything should render dynamically with http://localhost:3000/:id. You may need to check how your service is retrieving the :id param and edit accordingly.
- Check to make sure that the middleware route you created is going straight to the bundle.js file, NOT the index.html.
- You can also check if the bundle itself is working correctly by temporarily adding the script to the index.html and seeing if things look how they should. If they don't, then check if the index.html has the correct element you're looking for.