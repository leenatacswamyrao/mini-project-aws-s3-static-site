# AWS S3 Static Website Hosting

## 📌 Overview
This project demonstrates hosting a static website using **Amazon S3**.  
It is part of my multi-cloud learning journey to showcase hands-on skills.

---

## 🛠️ Tools & Services Used
- AWS S3 (Simple Storage Service)
- AWS Free Tier account

---

## ⚙️ Steps to Reproduce
1. Create an S3 bucket (`leenata-static-site`).
2. Upload `index.html` file.
3. Enable **Static Website Hosting** in bucket properties.
4. Configure bucket policy for public read access.
5. Access the website via the S3 endpoint URL.

---

## 📊 Architecture Diagram
![Architecture Diagram](diagrams/architecture_s3.png)

---

## 🚀 Outcomes
- Successfully hosted a static website on AWS S3.
- Learned how to configure bucket policies and enable static hosting.
- This project demonstrates my ability to deploy simple workloads on AWS.

---

## Screenshots
- S3 --> Properties Tab --> Static Site Hosting enabled ![S3_Properties](diagrams/s3-properties.png)
- S3 --> Working static site ![S3_Static_Site](diagrams/s3-site.png)
- CDN --> Distributions enabled ![CDN_Distributions](diagrams/cdn-distributions.png)
- CDN --> Working site ![CDN_Site](diagrams/cdn-site.png)

## Live Demo
My static website is hosted here:  
[View Website](http://leenata-static-site.s3-website.ap-south-1.amazonaws.com)
