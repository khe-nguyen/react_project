# Next.js Button Counter
This is a simple counter app built with Next.js (App Router).  
It lets you increase/decrease the count. Also let you reset it, and change how much it goes up or down each time.

## Features
- Two counters on the home page:
  - Default: starts at 0 with step 1
  - Custom: starts at 5 with step 2
- Buttons for +1, -1, and Reset
- Number input to change the step (minimum 1)
- Basic accessibility with aria-live updates and labeled buttons

## How to Run
Install dependencies:
Start the app:
Open [http://localhost:3000](http://localhost:3000)

## Build for Production

## Notes
I used `useState` for both count and step, and disabled the minus button if the count would go below 0.
