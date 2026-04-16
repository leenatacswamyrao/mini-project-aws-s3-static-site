# 📘 Project 1 Documentation: AWS S3 Static Website Hosting

## 🎯 Objective
Host a simple static website (`index.html`) on AWS S3 and make it publicly accessible via a website endpoint.

---

## 🛠️ Steps Taken

### 1. GitHub Preparation
- Created a new repository: `mini-project-aws-s3-static-site`.
- Added:
  - `README.md` → documented project purpose and steps.
  - `index.html` → simple “Hello World” webpage.
  - `.gitattributes` → normalized line endings.
- Committed and pushed files to GitHub.

---

### 2. AWS Account Setup
- Signed up for an AWS account.
- Logged into the **AWS Management Console**.

---

### 3. Create S3 Bucket
- Navigated to **S3 service**.
- Clicked **Create bucket**.
- Entered bucket name (e.g., `leenata-static-site`).
- Selected region: **Asia Pacific (Mumbai) – ap-south-1**.
- Left defaults → clicked **Create bucket**.

---

### 4. Upload Website Files
- Opened the bucket.
- Clicked **Upload** → added `index.html`.

---

### 5. Enable Static Website Hosting
- Went to **Properties tab**.
- Scrolled to **Static website hosting**.
- Enabled hosting.
- Set `index.html` as the default document.

---

### 6. Configure Permissions
- Opened **Permissions tab**.
- Disabled **Block Public Access**.
- Added bucket policy:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::leenata-static-site/*"
    }
  ]
}
```

- Saved changes successfully.

---

### 7. Access Website
- Copied the **Endpoint URL** from Static Website Hosting section:

  http://leenata-static-site.s3-website-ap-south-1.amazonaws.com
 
- Opened in browser → saw the hosted `index.html`.

---

## ✅ Outcome
- Successfully hosted a static website on AWS S3.  
- Learned how to configure bucket policies, enable static hosting, and manage permissions.  
- Demonstrated ability to deploy a simple workload on AWS.

---

## 📂 Repo Structure

mini-project-aws-s3-static-site/
│── README.md
│── index.html
│── .gitattributes
│── diagrams/
    └── architecture.png
