## Overview 
Focus Logger is a backend service designed to integrate with [RescueTime](https://www.rescuetime.com/), enabling users to log their focus periods through a simple POST request. This service is easily accessible via an Apple Shortcut, streamlining the tracking of productive time.

## Features
Seamless Integration: Connects directly with RescueTime's API.
Apple Shortcut Support: Start or end focus periods with a single tap.
Automated Logging: Automatically logs each focus session into RescueTime.

## Getting Started
Prerequisites:
A RescueTime account.
Apple device with Shortcuts app installed.

Installation
Clone the repository:
bash
```
git clone https://github.com/farhaannishtar/Focus-Logger
```
Navigate to the project directory:
```
cd focus-logger-rescuetime
npm i
npm run dev
```

## Configuration
Obtain your RescueTime API key from RescueTime API settings.
Configure the Apple Shortcut to connect with the backend service.


## Copy these Apple shortcuts to your apple device.

### Start Focus Session

<img width="354" alt="Screenshot 2023-11-18 at 5 57 01 PM" src="https://github.com/farhaannishtar/Focus-Logger/assets/89179469/436c3332-1f85-415b-b453-f763260a4837">


### Stop Focus Session

<img width="346" alt="Screenshot 2023-11-18 at 5 53 45 PM" src="https://github.com/farhaannishtar/Focus-Logger/assets/89179469/f6d97dbc-852f-405c-92a7-44bbec00a097">


## Usage
To log a focus period:
Activate the Apple Shortcut with a voice command or via shortcuts app.
The backend service will create a POST request to RescueTime, creating / discontinuing a focus session.
