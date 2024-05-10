---
title: Software Delivery
template: blog-post
date: 2022-10-01
slug: /software-delivery
featuredImage: /assets/continuous-delivery-cycle.png
description: image to showcase continous delivery
---
The thing that excites me most in my work is figuring out how to build and maintain better systems to delivery software updates.<br>

Below is a Quote from the DevOps Handbook from a case study highlighting the importance of understanding the changes that we make.<br>
>In 2004, Gene Kim, Kevin Behr and George Spafford note that high-performing organizations recognize that<br>
> 80% of all outages are caused by change<br>
> and 80% of MTTR is spent trying to determine what changed.<br>

## 1. Automation at Scale
Automation at scale means when we know a fix is available, we are primarily focused on delivering that fix to All Customers and Environments.<br>
Applying a specific minor update to an individual customer in an adhoc way is also valuable, and there is a place for transformational Self Service however the Ultimate focus for every organization is automation at scale.<br>
Embracing automation means that we will seek to eliminate as much toil (manual work that is repeatable) to focus energy more closely on automation.

## 2. Standardization across Applications
Standardization whether in the form of naming conventions, configuration, workflows, technologies or frameworks is important.<br>
Requiring standards like only allowing certain naming conventions in production services or even lower environments  means you won't have automation break and there won't be special snowflakes to handle manually via toil.<br>
Without consolidation of frameworks you end up supporting 3 different types of drivers, OS's, or frameworks.<br>
Applying a very rigid standard across all elements of customers allows anomaly detection and the ability to understand immediately if a service belongs or not.<br>
Most companies pay for services to be running because they don't know if they can turn it off or if they know they can turn it off they just don't know how to because of technical debt.<br>
Standardization across applications allows for automation at scale.<br>

## 3. Continuous Feedback Loop
In the DevOps Handbook, "The Second Way" describes the principles of creating fast and continuous feedback loops from operations to development.<br>
By doing this, we shorten and amplify feedback loops so that we can see problems as they occur and radiate this information to everyone in the value stream.<br>
This allows us to quickly find and fix problems earlier in the software development life cycle, ideally long before they cause a catastrophic failure.<br>

## 4. Error Budgets
Not all services are equally performant, some have a much older code base which is more large and complicated while others might be more green field and have fewer dependencies.<br>
Services should be evaluated based on the number of issues that occur throughout the lifecycle of their release, customer impact (outages/degradation of service) is one of the most valuable measures to determining impact.<br>
By better understanding the risk and challenges with each service delivered (and by breaking down monolithic apps into microservices) we can provide better Gating as to which services will be released and which ones will require more work.<br>
Error budgets are also a great way determine if engineering should have a clear runway for new features or if code quality requires more robust testing.<br>

## 5. Test in a Lower Environment First
This one almost seems too obvious to be in the list, however one might be surprised how many production services get deployed and run for customers without a lower environment first.<br>
Always include lower environment testing and deployment prior to delivering (or even troubleshooting) in production first.<br>

## 6. Errors should be captured and improved
Every error is important. Often in software engineering a benign error will go overlooked and continuously be logged or returning a non 200 HTTP response.<br>
Even if the error is "known" or could be classified as non-impactful (red herring in troubleshooting), that error still takes up space in the minds of engineers, in the logs/metrics/traces and ultimately makes an application less observable.<br>

## 7. Break up deployments to enable faster delivery
By breaking up deployments into small batches to deliver updates more quickly and regularly we can reduce risk of big issues showing up across multitudes of customers, correcting issues as they are found in the wild.<br>
Feature Flags are a valuable way to deliver more modular updates of components in which we can deliver deliberate updates of increasing surface area to customers as we gain confidence in the updates before the entirety is delivered.<br>

## 8. Data Driven Decision-making
Embracing telemetry to build observability into our updates help us understand the changes we are introducing into production.<br>
We can test the code that is being cut by development pre and post update for quality and provide that data upstream.<br>
We can also test our deployment pipeline to determine if any environmental issues or deployment issues happen pre and post update on the side of operations.<br>

## 9. Decommission apps, environments and frameworks
Letting applications, frameworks and environments run when they are not needed is incredibly expensive.<br>
It is much easier to deploy new services than to know when and how we can turn off old services, or to understand if they are still needed.<br>
By creating a central software delivery and deployment mechanism we can more assuredly understand what applications may be running but could be flagged for decommisioning.<br>

## 10. Continuous Delivery to Continuous Deployment
Making use of all the tools and experiences to mitigate risk, monitor quality and improve software delivery speed we eventually get to the place of continuous deployment.<br>
Continuous deployment is where each change committed to version control is integrated, tested and deployed into production.<br>
Jez Humble defines continuous deployment as the following.

> When all developers are working in small batches on trunk, or everyone is working off trunk in short-lived feature branches that get merged to trunk regularly, and when trunk is always kept in a releasable state, and when we can release on demand at the push of a button during normal business hours, we are doing continuous delivery.
> Developers get fast feedback when they introduce any regression errors, which include defects, performance issues, security issues, usability issues, etc.
> When these issues are found, they are fixed immediately so that trunk is always deployable.
<br>
> In addition to the above, when we are deploying good builds into production on a regular basis through self-service (being deployed by dev or by ops)—which typically means that we are deploying to production at least once per day per developer, or perhaps even automatically deploying every change a developer commits—this is when we are engaging in continuous deployment.
<br>