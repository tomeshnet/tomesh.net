---
layout: page
title: Current Projects
descriptiveTitle: Toronto Mesh Projects
order: 1
parent: Get Involved
---

This is a summary of ongoing activities at Toronto Mesh.  
Want to learn more? Come chat with us at {% include icon-matrix.html %} or attend a [meetup](/events/)!

**Node Technology and Mesh Applications**  
- [Meshstream](#meshstream)
- [Prototype Mesh Node](#prototype-mesh-node)
- [Mesh Orange](#mesh-orange)
- [Mapping & Monitoring Tools](#monitoring)

**Collaboration Tools**
- [Toronto Mesh Website](#website)
- [Meshbot](#meshbot)
- [Toronto Mesh Infrastructure](#infrastructure)
- [IPFS Live Streaming](#ipfs-live-streaming)

**Community Networks and Outreach**
- [Test Deployments](#test-deployments)
- [Building the Peer-to-Peer Internet Workshop](#p2p-workshop)


# Node Technology and Mesh Applications
---

{:#meshstream}

### Meshstream

Meshstream is a collection of software and hardware demonstrating peer-to-peer and multimedia applications running over a wireless mesh network that is completely isolated from the Internet.

Meshstream demonstrates:
- Live video streaming over content addressable storage ([IPFS](https://ipfs.io/))
- Sharing multimedia content over a peer-to-peer social network ([SSB](https://github.com/ssbc/secure-scuttlebutt))
- Mesh networking over long-range wireless links using open hardware ([LibreRouter](https://librerouter.org/))

**Status**: Alpha  
Demo-quality software tested on LibreRouter prototype hardware.

**Skills**  
Flashing routers, OpenWrt, network configuration, programming peer-to-peer applications, shell scripts, web applications, WebSockets, JavaScript, single-board computers, technical documentations, web design, User Experience.

{% include icon-github.html username='tomeshnet/meshstream' %}

{:#prototype-mesh-node}

### Prototype Mesh Node

The Prototype Mesh Node started as an installation script used to set network interfaces in mesh mode and install a variety of software to experiment with  [cjdns](https://github.com/cjdelisle/cjdns) routing and peer-to-peer applications on Raspberry Pis.

The Prototype Node now supports many single-board computers (SBCs) for similar use cases, and it offers a convenient way to install:
- [cjdns](https://github.com/cjdelisle/cjdns)
- [InterPlanetary File System](https://ipfs.io/) (IPFS)
- [Secure Scuttlebutt](https://github.com/ssbc/secure-scuttlebutt) (SSB)
- Network monitoring and configuration tools ([Grafana](https://grafana.com/) and [Prometheus](https://prometheus.io/), among others) 

**Status:** Always in Beta  
This project will keep being actively developed to support ongoing research work and experimentation. It has been forked by many groups for their own single-board computer mesh network projects.

**Skills**  
Single-board computers, shell scripts, technical documentation, Debian systems, network configuration, test automation on ARM devices, cjdns, peer-to-peer applications.

{% include icon-github.html username='tomeshnet/prototype-cjdns-pi' %}

{:#mesh-orange}

### Mesh Orange

Mesh Orange is a small Debian-based operating system image that runs on single-board computers (SBCs), turning them into easily configurable mesh nodes.

The custom build system allows us to create custom images for workshops, and we expect this to become the base operating system for production mesh nodes, with features such as over-the-air updates and reliable long-term operation.

**Status:** Alpha  
Mesh Orange gets new features as new use cases come up. Raspberry Pi and Orange Pi Zero boards are supported (board support is not as extensive as with the Prototype Mesh Node).

**Skills**  
Single-board computers, shell scripts, technical documentation, Debian systems, network configuration, test automation on ARM devices, building operating systems for embedded targets.

{% include icon-github.html username='tomeshnet/mesh-orange'%}

{:#monitoring}

### Mapping & Monitoring Tools

Software that runs on a Raspberry Pi and can be provisioned for cloud providers to monitor real-time status of the mesh network.

The monitored data includes geolocation mapping on a web interface with real-time information reported from nodes, and showing the topology of a mesh network on a geographical map. This will be packaged in a way that makes it very easy for other mesh networks to adapt to their own monitoring needs.

**Status:** Concept  
Lead required to further develop proof-of-concept work.

**Skills**  
DevOps, Terraform, Docker, DevOps, Prometheus, mapping, data visualization, networking, web design, Google Maps, Open Street Maps, shell scripts, python, cjdns.

{% include icon-github.html username='tomeshnet/monitoring' %}

# Collaboration Tools
---

{:#website}

### Toronto Mesh Website

The primary digital space for people to learn about Toronto Mesh. It represents the current focus of our organization and aims to be accessible to diverse audiences.

**Status:** Production (live)  
Work is ongoing in order to integrate provisioning tools and serve the website through decentralized protocols such as [cjdns](https://github.com/cjdelisle/cjdns), [IPFS](https://ipfs.io/), and [Dat](https://datproject.org/).

**Skills**  
Web design, user research, JavaScript, Terraform, peer-to-peer hosting, HTML, CSS, Ruby, DevOps.

{% include icon-github.html username='tomeshnet/tomesh.net' %}  

{:#meshbot}

### Meshbot

The chatbot our Matrix [chat](https://chat.tomesh.net/#/room/#tomesh:tomesh.net) uses to send event reminders and answer basic questions about the mesh.

**Status:** Production (live)

**Skills**  
Programming, user research, technical documentation

{% include icon-github.html username='tomeshnet/meshbot' %}

{:#infrastructure}

### Toronto Mesh Infrastructure

Our tools and infrastructure, such as the Matrix chat and website, are available for other groups to adapt and use to support their own mesh network.

**Status:** Production (live)  
**Need experienced DevOps lead.**

**Skills**  
Terraform, Docker, DevOps.

Visit the [Tools Transfer Guide](https://github.com/tomeshnet/documents/blob/master/governance/tools-transfer.md) for an overview of our infrastructure assets.

{:#ipfs-live-streaming}

### IPFS Live Streaming

A live streaming solution built with [IPFS](https://ipfs.io/) that uses [Terraform](https://www.terraform.io/) to spin up a cluster on [Digital Ocean](https://www.digitalocean.com/).

Work on this project began with Toronto Mesh members experimenting with HTTP Live Streaming on the [IPFS](https://ipfs.io/) network. This evolved into a production setup in order to support the live stream at [Our Networks 2018](https://ournetworks.ca/2018). The repository now contains documentation and all the necessary software to live stream a small conference, complete with authenticated publishing to a [Real-Time Messaging Protocol](https://en.wikipedia.org/wiki/Real-Time_Messaging_Protocol) endpoint and embeddable video players tested on desktop and mobile browsers.

**Status:** Production

**Skills**  
Live video streaming, FFmpeg, Terraform, shell scripts, DevOps, web design.

{% include icon-github.html username='tomeshnet/ipfs-live-streaming'%}

# Community Networks and Outreach
---

{:#test-deployments}

### Test Deployments

The primary driver for Toronto Mesh is to empower people to create spaces in which they can make decisions about the way they create, share, and access information. We are building the tools and know-how for people looking to build a community network.

**Status:** Planning  
We are setting up our first few permanent test nodes.

**Required Skills**  
Network planning, radios, network configurations, community outreach, mechanical design, electrical expertise, working with building management.

Visit our chat {% include icon-matrix.html %} or attend a [meetup](/events/) to find out more!

{:#p2p-workshop}

### Building The Peer-to-Peer Internet Workshop

An open-source syllabus that aims to provide hands-on training and social context of decentralized systems, including mesh networks and peer-to-peer applications.  
Each session in the syllabus can be offered as a stand-alone module.

We have completed one full series at the Toronto Public Library. 

**Status:** Beta  
Efforts are underway to improve reproducibility and packaging.

**Skills**  
Curriculum development, moderating and facilitating discussions, wired and wireless networks, hardware sourcing.

{% include icon-github.html username='tomeshnet/p2p-internet-workshop' %}