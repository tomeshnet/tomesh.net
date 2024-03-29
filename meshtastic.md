---
layout: page
title: Meshtastic Mesh
descriptiveTitle: Toronto Meshtastic mesh
order: 2
parent: Get Involved
---

The Toronto Mesh Meshtastic project hopes to create an innovative communication network powered by the Meshtastic firmware and utilizing LoRa technology. This decentralized network enables communication over long distances without the need for a direct line of sight. By leveraging the low-power, wide-area capabilities of LoRa, the network provides coverage across Toronto.

The network operates at a slower data rate then WiFi. Users can exchange text messages, share GPS coordinates, and track device locations, or report sensor data within the Meshtastic mesh network. Whether it's for outdoor adventures, disaster response, or rural connectivity, the Toronto Mesh Meshtastic Network ensures reliable communication throughout the city without relying on traditional infrastructure.

## Joining the Network

### Hardware/Software required

To get started you need hardware that is capable of joining the Meshtastic LoRa network. You can check out the Meshtastic [Getting Started](https://meshtastic.org/docs/getting-started) site for installation, hardware, and flashing.

### MQTT

Meshtastic nodes can bridge communication over the internet to nodes that cannot hear each other. We use the topic `msh/CA` on the default MQTT server and the default channel.  
