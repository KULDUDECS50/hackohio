# AutoPatt  

### 🚀 Hack OH I/O Project – Automatic Semi Conductor Calibration Tool

### 🧠 Idea  
AutoPatt is an image processing program that takes two images (a before and an after a movement) image and then calibrates the rotations needed for a servo in order to move a semiconductor to the position within image 1 (the original image).

### 🔑 Key Features  
✅ **Image Processing** – This program applies a Gaussian Blur onto the images in order to heighten the lines of the image for the tool to detect.  
✅ **Pattern Recognition** – AutoPatt recognizes the patterns between the before and after movement images to determine how much movement occured in pixels. 
✅ **Data Visualization** – AutoPatt generates an image with both images side by side and creates lines to show the user which points correlate to each other within the image for the user to understand how it works. 
✅ **Translates to C** – AutoPatt translates the pixels into rotations required for the servo to rotate by translating the pre-existing Python into C in order to efficiently run the Arduino behind the Servo.

### 🛠 Tech Stack  
- **Frontend**: Python, C, C++, and Typescript (for the webapp).
- **Backend**: Cython (C to Python and Python to C).
- **Deployment**: Vercel (work in progress)

### 💡 Why It Matters  
Researchers spend excessive time manually translating and finding the movements a servo may have on a conveyor belt. Especially for Semiconductors which requires absolute precision and alignment to ensure that the percent error is as low
as possible. However, sometimes human error can intervene and cause the semiconductor to not be properly aligned. This is where AutoPatt comes into play in which it removes the human error behind the alignment process 
of creating semiconductors and allows for heavy machinery involved with creating semiconductors to focus on precision rather than worrying about both. 

### 🔜 Next Steps  
- Upgrade the setup from arduinos to Rasberry Pi's due to the software the latest Pi has access to.
- Deploy the webapp onto Vercel.

AutoPatt aims to simplify and ease the pains behind creating semiconductors due to the intense precision required which requires as little human intervention as possible.

[AutoPatt Hack OH I/O Intel Challenge Video](https://youtu.be/oXoAR5Iaw-M)
