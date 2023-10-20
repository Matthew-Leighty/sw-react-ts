# Welcome to my image gallery!

## General Info

To start the app:
`npm i` 
`npm start`

I wanted to make this as realistic and robust as possible, so expect a good amount of intentional errors to be returned from the mock api when you're performing operations. If you want to make these more or less frequent adjust as needed in `mockApi.ts`.  Also expect some fake delays to show off those 'async' loading states! past these things the app should be a good reflection of the simple wireframe provided. 

when you first load the app, 5 sample images will be seeded. The top app bar contains the search input and an upload button that will toggle a modal to allow you to select and preview your image/name. To delete an image or see its name, hover over any image on the home page. 

This work took me an afternoon - let's call it 4-5hr. I enjoyed this one :) 

##  Screenshots
General Flow:
![sw1](https://github.com/Matthew-Leighty/sw-react-ts/assets/67803638/3e1ea815-d52d-4e6a-94cd-10e6b7a6fdec)
![2](https://github.com/Matthew-Leighty/sw-react-ts/assets/67803638/a0664ac4-1be0-4c3c-8ae3-a95ed2f7bbdb)
![sw3](https://github.com/Matthew-Leighty/sw-react-ts/assets/67803638/27670445-61f5-46e8-a81b-c39ecdc6505b)
![sw4](https://github.com/Matthew-Leighty/sw-react-ts/assets/67803638/17dec725-be8a-4490-9fd2-86ed23df9bcf)
Error handling:
![e1](https://github.com/Matthew-Leighty/sw-react-ts/assets/67803638/5386aa35-7872-4236-a6ec-56ff4994c027)
![e2](https://github.com/Matthew-Leighty/sw-react-ts/assets/67803638/0b025b2e-ed3a-4b42-ae27-0517e1f9dc9b)


## My Wish list
 - I would have liked to make a real back-end and make this a monorepo
   so they can be started together
 - I would have liked to spend time on some caching
   mechanism so images don't have to be totally reloaded as much.
- More style. I think it is functional and looks solid, but I would have enjoyed adding some more transitions and making the modal feel a little more like the home page. custom pallet. 
- debounce the search term, there is a lot of re-renders here in particular
