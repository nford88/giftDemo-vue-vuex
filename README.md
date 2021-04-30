# giftDemo


This is demo application titles "giftDemo". Purpose of this application is to consume an API containing gifts and display them to the customer. It is a SPA application which incorporates Vue, VueX state management and unit testing. 


Features include:

- Loading spinner when awaiting API to return
- Filter results by Price or Reviews
- Sort order by ASC and DESC
- Search within results for a name match
  - Handles diacritics (accents etc) by converting them to english for the search.
  - Type `dél` or `del` will show a result for either
- Border and event name change to orange on hover.


I had a bit of difficulty getting the Foundation GRUB up and running so I went with Boostrap CDN for convenience. I also have no spent too much time on styling and focussed on functionality. Notable filtering tool and test took the most amount of time. I have spent approximately 10 hours on this, so I have to prioritise a MVP. 


Any question, send me a message


## Project setup


```
yarn install
```

#### Compiles and hot-reloads for development
```
yarn serve
```

#### Compiles and minifies for production
```
yarn build
```

#### Lints and fixes files
```
yarn lint
```
