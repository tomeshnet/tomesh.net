---
layout: page
title: "State of Our Networks 2017 <br /> Mini-Conference"
text: 'We are hosting a one-day hands-on conference about the past, present, and future of building our own network infrastructures to access the internet in our city.'
location: Semaphore Demo Room, BL 417, Claude T. Bissell, 140 St. George St  
locationLink: http://osm.org/go/ZX6Bw~WNh--?m=
date: 2017-01-14
startTime: '9:00'
endTime: '18:00'
order: 0
---

<div class="event-time-location">
  <div class="event-meta">
    <i class="icon fa fa-ticket" aria-hidden="true"></i>
    <p class="event-cost event-meta-item">$10 suggested donation, <a href="#registration">register below</a>
    </p>
  </div>
  <div class="event-meta">
    <i class="icon fa fa-calendar-o" aria-hidden="true"></i>
    <p class="event-time event-meta-item">{{ page.date | date: "%-d %B %Y"}}, <strong>{{page.startTime | date:"%-I:%M%P "}}</strong> – <strong>{{page.endTime | date:"%-I:%M%P"}}</strong>, <a href="#schedule">schedule below</a></p>
  </div>
  <div class="event-meta">
    <i class="icon fa fa-map-marker" aria-hidden="true"></i>
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

Brought to you by Toronto Mesh, '**State of our Networks**' is a one-day, hands-on conference about the past, present, and future of building our own network infrastructures to communicate and access the internet in our city.

On {{ page.date | date: '%B %d, %Y' }} from {{page.startTime | date:"%-I:%M%P "}} to {{page.endTime | date:"%-I:%M%P "}} join us for a one-day hands-on conference to:

- learn and participate in hands on workshops led by current networking projects in the city of Toronto
- hear about the history of community networks in our city
- discuss how we can build a resilient network that addresses barriers in the future

Toronto Mesh welcomes people from all backgrounds and technical skill levels and aims to provide a harassment-free environment. This event has a [Code of Conduct]({{ site.baseurl }}/code-of-conduct/).

We are also [hosting a social]({{ site.baseurl }}/2017-01-13/social/) at A3 Napoli on {{ page.date | date: '%B %d, %Y' }}, all are welcome to attend and get to know the members of Toronto Mesh!

This page will be updated with [full schedule](#schedule) closer to the event date.

## Registration

Register by email, **$10** suggested donation at the door, no one turned away for lack of funds.

<div style="text-align: center;">
  <a class="button" href="mailto:{{ site.email }}?subject=State of Our Networks Registration" role="link"><i class="fa fa-ticket" aria-hidden="true"></i>&nbsp;&nbsp;Register Now</a>
</div>

<br />

## Location

Event and registration will be in the **Semaphore Demo Room, BL 417** on the fourth floor of the {% if page.locationLink %} <a href="{{page.locationLink}}" target="_blank">Claude T. Bissell building, 140 St. George St</a><!--_-->{% else %} Claude T. Bissell building, 140 St. George St{% endif %}.

The closest TTC Subway stop is St. George (at Bloor Street and St. George Street) and Streetcar stop is Spadina Ave at Sussex Street.

<iframe width="100%" height="250px" frameBorder="0" src="https://a.tiles.mapbox.com/v4/dcwalk.27eme78b/attribution,zoompan.html?access_token=pk.eyJ1IjoiZGN3YWxrIiwiYSI6ImNpZ3NzaWljdzA1ajdzeGtudTNzM3NnanYifQ.kA_-f8oD-sPwjPXfqcv1og"></iframe>

The venue is an accessible space, for more details please see the <a href="http://www.ace.utoronto.ca/website/accessibility/building_data/bl.pdf" target="_blank">building information sheet</a>.<!--_-->


## Schedule

| Start Time | Session |
| --- | --- | --- |
| 9:00 | **REGISTRATION OPENS** |
| 9:15 &ndash; 9:45 | _Welcome_: Intro to mesh and community wireless |
| 9:45 &ndash; 13:00 | _Workshops and Demos_ |
| 13:00 | **LUNCH** |
| 14:00 &ndash; 15:30 | _Presentation and Panel_ |
| 15:30 | **AFTERNOON BREAK** |  |
| 16:00 &ndash; 17:30 | _Interactive Discussion_ |
| 17:30 &ndash; 18:00 | _Closing_: Wrap up and deployment steps |  

<br />

***

For more information, or if you are interested in volunteering, email us at [{{ site.email }}](mailto:{{ site.email }})!
