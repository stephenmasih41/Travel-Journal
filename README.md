# 🌍 My Travel Journal 🗺️  

## 🚀 About This Project  
This project is a simple **React application** that I built to practice and understand **props** in React. Props (short for "properties") allow components to receive data from their parent components, making them **dynamic and reusable**.  

## 📌 What I Learned  
- **How to use props** 🏗️ – I passed data from a parent component to the `Entry` component, enabling it to display unique information dynamically.  
- **Component structure** 🔄 – I structured the project into different components, keeping the code **modular and maintainable**.  
- **Passing objects as props** 🏷️ – Instead of passing separate values, I passed an object (`props.img`) to provide an image’s source and alternative text together.  
- **Using external images in React** 🖼️ – I learned how to correctly **import images** inside React components, ensuring that assets load properly.  
- **Clickable links with props** 🔗 – I used `props.googleMapsLink` to dynamically generate a **clickable link** that opens Google Maps in a new tab.  

## 🏗️ Project Breakdown  

### 1️⃣ **Header Component**  
- This component displays a **title** and an **image** (a globe icon) to give the app a thematic appearance.  
- I learned how to correctly **import images** from the `assets` folder in React.  
- The **header provides branding** for the travel journal.  

### 2️⃣ **Entry Component**  
- This component is responsible for rendering a **single journal entry**.  
- It receives **props** that contain information like:
  - 🌄 An **image** representing the location.  
  - 🗺️ A **country name** and a **map marker icon**.  
  - 🔗 A **link** to view the place on **Google Maps**.  
  - 🏕️ The **title** of the trip.  
  - 📅 The **travel dates**.  
  - 📝 A **description** of the trip.  
- Instead of **hardcoding the content**, I passed the data dynamically through props, making this component reusable for multiple entries.  

## 🛠️ Challenges & Fixes  
- **Image import errors** ❌ – I initially faced an issue where images weren’t loading. I learned that assets must be correctly imported relative to the component’s location.  
- **Incorrect prop usage** 🔄 – At first, I tried to access the image source as `props.img` instead of `props.img.src`, which caused an error. Fixing this improved my understanding of **how to pass and access nested objects in props**.  

## 🎯 Conclusion  
This project was a **fun and insightful** learning experience! 🎉 It deepened my understanding of **React components, props, and modularity**. Now, I feel more confident in passing data dynamically and structuring my applications better. 🚀  
