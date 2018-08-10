---
layout: page
title: Current Projects
descriptiveTitle: Toronto Mesh Projects
order: 1
parent: Get Involved
---

---
Node Technology and Mesh Applications

---

### Meshstream

Meshstream is a collection of software and hardware that aims to show what can be accomplished with peer-to-peer applications running over a wireless mesh network that is completely isolated from the Internet.

Meshstream demonstrates:
- Live video streaming over content addressable storage ([IPFS](https://ipfs.io/))
- Sharing multimedia content over a peer-to-peer social network ([SSB](https://github.com/ssbc/secure-scuttlebutt))
- Mesh networking over long-range wireless links using open hardware ([LibreRouter](https://librerouter.org/))

**Status**: Alpha  
Demo-quality software tested on LibreRouter prototype hardware.

**Skills**  
Flashing routers, OpenWrt, network configuration, programming peer-to-peer applications, shell scripts, web applications, web sockets, javascript, single-board computers, technical documentations, web design, user story design.

[Meshtream GitHub page](https://github.com/tomeshnet/meshstream)

### Prototype Node

The Prototye Node started as an installation script used to set network interfaces in mesh mode and install a variety of software to experiment with  [cjdns](https://github.com/cjdelisle/cjdns) routing and peer-to-peer applications on Raspberry Pis.

The Prototype Node now supports many single-board computers (SBCs) for similar use cases, and it offers a convenient way to install:
- cjdns
- Interplanetary Filesystem (IPFS)
- Secure Scuttlebutt (SSB)
- Network monitoring and configuration tools ([Grafana](https://grafana.com/) and [Prometheus](https://prometheus.io/), among others) 

**Status:** Always in Beta  
This project will keep being actively developed to support ongoing research work and experimentation. It has been forked by many groups for their own single-board computer mesh network projects.

**Skills**  
Single-board computers, shell scripts, technical documentation, Debian systems, network configuration, test automation on ARM devices, cjdns, peer-to-peer applications.

[Prototype Node GitHub page](https://github.com/tomeshnet/prototype-cjdns-pi)

### Mesh Orange

Mesh Orange is a small Debian-based operating system image that runs on single-board computers (SBCs), turning them into easily configurable mesh nodes.

The custom build system allows us to create custom images for workshops, and we expect this to become the base operating system for production mesh nodes, with features such as over-the-air updates and reliable long-term operation.

**Status:** Alpha  
Mesh Orange gets new features as new use cases come up. Raspberry Pi and Orange Pi Zero boards are supported (board support is not as extensive as with  Prototype Node).

**Skills**  
Single-board computers, shell scripts, technical documentation, Debian systems, network configuration, test automation on ARM devices, building operating systems for embedded targets.

[Mesh Orange GitHub page](https://github.com/tomeshnet/mesh-orange)

### Mapping & Monitoring Tools

Software that runs on a Raspberry Pi and can be provisioned for cloud providers to monitor real-time status of the mesh network.

The Monitored data includes geolocation mapping on a web interface with real-time information reported from nodes, and plotting logical mesh topology on a geographical map. This will be packaged in a way that makes it very easy for other mesh networks to adapt to their own monitoring needs.

**Status:** Concept  
Lead required to further develop proof-of-concept work.

**Skills**  
Devops, Terraform, Docker, devops, Prometheus, mapping, data visualization, networking, web design, Google Maps, Open Street Maps, shell scripts, python, cjdns.

[Monitoring GitHub page](https://github.com/tomeshnet/monitoring)

---
Collaboration and Outreach Tools

---

### Toronto Mesh Website

The primary digital space for people to learn about Toronto Mesh. It must represent the current focus of our organization and remain accessible to diverse audiences.

**Status:** Production (live)  
Need to be spun up with provisioning tools and served over cjdns, IPFS, DAT, etc.

**Skills**  
Web design, user research, javascript, Terraform, peer-to-peer hosting.

[Toronto Mesh Website GitHub page](https://github.com/tomeshnet/tomesh.net)

### Meshbot

The chat bot our Matrix chat uses to send event reminders and answer basic questions about the mesh.

**Status:** Production

**Skills**  
Programming, user research, technical documentation

[Meshbot GitHub page](https://github.com/tomeshnet/meshbot)

### Mesh Community Assets

Our tools and infrastructure, such as the Matrix chat and website, are available for other groups to adapt and easily deploy their own mesh network.

**Status:** Production  
**Need experienced devops lead.**

**Skills**  
Terraform, Docker, devops.

Visit the [Tools Transfer Guide](https://github.com/tomeshnet/documents/blob/master/governance/tools-transfer.md) for an overview of our community assets.

### IPFS Live Streaming

A  live streaming solution built with IPFS that uses [Terraform](https://www.terraform.io/) to spin up a cluster on [Digital Ocean](https://www.digitalocean.com/).

Work on this project began with Toronto Mesh members experimenting with HTTP Live Streaming on the IPFS network. This evolved into a production setup in order to support the live stream at [Our Networks 2018](https://ournetworks.ca/). The repository now contains documentation and all the necessary software to live stream a small conference, complete with authenticated publishing to an RTMP endpoint and embeddable video players tested on desktop and mobile browsers.

**Status:** Production
This solution was used at Our Networks 2018.

**Skills**  
Live video streaming, ffmpeg, Terraform, shell scripts, devops, web design.

[IPFS Live Streaming GitHub page](https://github.com/tomeshnet/ipfs-live-streaming)

---
Community Networks and Outreach

---

### Toronto Meshnet

All deployment efforts and governance for a physical mesh network in Toronto.

**Status:** Planning  
We are setting up our first few permanent links.

**Required Skills**  
Network planning, radios, network configurations, community outreach, mechanical design, electrical expertise, working with building management.

Visit our [chat](https://chat.tomesh.net/#/room/#tomesh:tomesh.net) or attend a [meetup](https://tomesh.net/events/) to find out more!

### Building The Peer-to-Peer Internet Workshop

An open-source syllabus that aims to provide hands-on training and social context of decentralized systems, including mesh networks and peer-to-peer applications.

We have completed one full series at the Toronto Public Library; modular sessions are run at conferences and adopted into other curriculums.

**Status:** Beta  
Efforts are underway to improve reproducibility and packaging.

**Skills**  
Curriculum development, moderating and facilitating discussions, wired and wireless networks, hardware sourcing.

[P2P Internet Workshop GitHub page](https://github.com/tomeshnet/p2p-internet-workshop)
