![IMG_3598](https://github.com/farhaannishtar/Focus-Logger/assets/89179469/2cf0d9ec-c3d1-43cc-a947-00dd429a0c30)### Overview
Focus Logger is a backend service designed to integrate with RescueTime, enabling users to log their focus periods through a simple POST request. This service is easily accessible via an Apple Shortcut, streamlining the tracking of productive time.

## Features
Seamless Integration: Connects directly with RescueTime's API.
Apple Shortcut Support: Start or end focus periods with a single tap.
Automated Logging: Automatically logs each focus session into RescueTime.

## Getting Started
Prerequisites
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
```

### Start Focus Session

![IMG_3598](https://github.com/farhaannishtar/Focus-Logger/assets/89179469/c2c220ea-4721-42db-9d30-94dae148e9f4)


### Stop Focus Session

![IMG_6420](https://github.com/farhaannishtar/Focus-Logger/assets/89179469/2f1eac7c-f22c-41a7-a12e-1d65479c7a1e)

## Configuration
Obtain your RescueTime API key from RescueTime API settings.
Configure the Apple Shortcut to connect with the backend service.

Create these Apple Shortcuts.




## Usage
To log a focus period:

Activate the Apple Shortcut.
The backend service will create a POST request to RescueTime, logging the focus period.
