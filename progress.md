26=03=2026 - Static Site setup
- made aws static site
- errors encountered: css and js not being linked to the html file
- fix to error: name of css file was incorrect in the html file
- workarounds tried: deleted buckets, recreated new ones, with bucket policies and accesses, all new


27-03-2026 - CloudFront Setup
- linked static site to cloudfront with domain name :- https://d2d7vnvvs94x7c.cloudfront.net/
- Entered the Get Started wizard in CloudFront.
- Added a Distribution name (leenata-site-cdn) — required in this flow.
- Selected the S3 website endpoint as the origin (not the bucket endpoint).
- Left Origin path blank since files are at root.
- Used recommended origin and cache settings for S3.
- Configured Viewer protocol policy → Redirect HTTP to HTTPS.
- Allowed only GET and HEAD methods (sufficient for static sites).
- Left Alternate domain names (CNAMEs) empty (no custom domain purchased).
- Used CloudFront’s default SSL certificate for free HTTPS.
- Created the distribution and waited for deployment.
- Accessed the CloudFront domain (e.g., https://d2d7vnvvs94x7c.cloudfront.net/).
- Confirmed the site loads securely with HTTPS and padlock icon.
- Verified HTTP requests redirect to HTTPS.
- Cache Invalidation
- Learned how to clear CloudFront cache when updating files:
- Go to CloudFront → Distributions → Invalidations → Create invalidation.
- Enter /* to clear all cached files.
- Refresh site to see updated content instantly.

