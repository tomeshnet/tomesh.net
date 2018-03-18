---
layout: page
title: Building the Peer-to-Peer Internet
excerpt: Workshop series at the Toronto Public Library
location: Toronto Public Library, Fort York branch
locationLink: https://www.torontopubliclibrary.ca/detail.jsp?Nr=p_cat_branch_name:Fort%20York
startDate: 2018-04-10
endDate: 2018-05-15
startTime: '18:30'
endTime: '20:00'
order: 0
---

<div class="event-time-location">
  <div class="event-meta">
    {% include_absolute _icons/calendar-o.svg class:icon %}
    <p class="event-time event-meta-item">{{ page.startDate | date: "%-d %B %Y"}} to {{ page.endDate | date: "%-d %B %Y"}}, <strong>{{page.startTime | date:"%-I:%M%P "}}</strong> – <strong>{{page.endTime | date:"%-I:%M%P"}}</strong></p>
  </div>
  <div class="event-meta">
    {% include_absolute _icons/map-marker.svg class:icon %}
    <p class="event-location event-meta-item">
    {% if page.locationLink %}
      <a href="{{page.locationLink}}" target="_blank">{{ page.location }}</a> <!--_-->
    {% else %}
      {{ page.location }}
    {% endif %}
    </p>
  </div>
</div>

***

Toronto Mesh will be running the workshop series **{{ page.title }}** each Tuesday from April 10 to May 15, 2018 at the [{{ page.location }}]({{ page.locationLink }}).

Participants will learn about community networks, wireless mesh networks, distributed applications, and train their pet Raspberry Pi to do networking things. While this course assumes no technical expertise, all sessions contain a technical hands-on component and a reflection activity to explore the role of technologies on our society. A socially-minded tinkerer who enjoys a collaborative learning experience will be the ideal participant.

The course will cover the following topics:

* Tue Apr 10 - *What is mesh?*
* Tue Apr 17 - *Setting up your first node*
* Tue Apr 24 - *Building nodes (hardware)*
* Tue May 01 - *Planning a network*
* Tue May 08 - *Measuring networks*
* Tue May 15 - *Living on a decentralized network*

You can find the [full syllabus](https://github.com/tomeshnet/tpl-workshop) here.

Capacity is limited and each class builds upon one another. To enrol in this free workshop series, you must [register through the Library website](https://www.torontopubliclibrary.ca/detail.jsp?Entt=RDMEVT23011&R=EVT23011) before the first workshop on April 10.
