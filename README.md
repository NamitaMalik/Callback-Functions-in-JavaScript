Callback-Functions-in-JavaScript
================================

Few years back, I went to a restaurant named as 'The Inefficients'. Keeping up with their names, they had maintained following way working:

 1. There were 10 tables in the restaurant, with around 6 being occupied.

 2. First, Mr Berry came and occupied table no.1 and then Mrs Polly came and occupied table no.2. Similarily table no.3,4 and 5 got occupied by Baker, Sharma and Kardashian families respectively. I occupied table no.7.

 3. Mrs Polly called waiter 'John' and ordered a chicken sandwich.

 4. John went to chef Jack and waited there for around 20 mins till Jack prepared sandwich. Once sandwich was ready, John came out of the kitchen and served sandwiches to Mrs Polly.

 5. Now, Mr Berry called 'John' and ordered a 'Tomato Soup' and some 'Veg Sandwiches'. John went back to the kitchen and passed on the order slip to Jack and kept on waiting in the kitchen till the order got prepared.
  Meanwhile, there was other waiter at 'The Inefficients' , whose name was Jerry. Jerry noted down the orders from Baker family and passed on the order to chef Tom. He also waited there till the whole order was ready to be served.
  While the orders from Bakers and Mr Berry was getting ready, Sharma and Kardashian family and offcourse me waited patiently.

  Few months later...

  I got to know that 'The Inefficients' had closed down due to poor business. A restaurant named as 'The Smarts' opened adjacent to 'The Inefficients' which was said to be the cause of 'The Inefficients' shutting the shop. Out of curiosity, I went to 'The Smarts'. This is what I experienced:

  1. There were 20 tables, out of which 10 were occupied.

  2. There were two waiters - Jill and Bill.

  3. A guy at table no.1 called Bill and ordered something and another guy asked Jill to bring Fish Curry.

  4. Jill and Bill went straight to the kitchen and passed the order slips to chef Jack and Tom and came back to the dining area and then took orders from the guests at the other tables and then headed back to the kitchen.

By now, you must be thinking how all this is at all linked to JavaScript?

Well..The reason to share this experience was to explain the benefit of **asynchronous execution**. This basically means doing things in the background. Or you can say a process operating irrespective of other processes.

Suppose there are processes A,B and C and following happens in these processes:

1. In process A --> Milk is boiled
2. In process B --> Tea leaves are added to the boiling water and this liquid is poured in cups
3. In process C --> Boiled Milk is added to the cups containing tea

Now, we know that process C would complete only when process A and B complete. So there can be two ways of doing:

1. First boiling the milk and then boiling water and tea leaves.
2. Boil milk and boiling water on the two different gas burners in parallel.

I found the second way efficient as process A and B could be executed independently of each other.

Now coming to **JavaScript**, we know that **JavaScript** is a **synchronous** language. But it does facilitates **asynchronous behavior** which is through **callback** functions.
