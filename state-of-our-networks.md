---
layout: page
title: "State of Our Networks 2017 <br /> Mini-Conference"
excerpt: 'A one-day hands-on conference about the past, present, and future of building our own network infrastructures to access the internet in our city.'
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

Brought to you by Toronto Mesh, '**State of our Networks**' is a one-day, hands-on conference about the past, present, and future of building our own network infrastructures to communicate and access the internet in our city. Join us for:

- hands-on workshops* to build mesh nodes and learn about low-power networks
- talks about a history of Toronto's internet
- planning how to build resilient and accessible communications networks and connections to the internet

Please see our [schedule below](#schedule) for more details.

*_Note: Workshops require a laptop (any operating system), but attendees are also welcome to bring [Raspberry Pis](https://en.wikipedia.org/wiki/Raspberry_Pi) or other [single-board computers](https://en.wikipedia.org/wiki/Single-board_computer) pre-flashed with Linux._

We are also [hosting a social]({{ site.baseurl }}/2017-01-13/social/) at A3 Napoli on January 13, 2017, all are welcome to attend and get to know the members of Toronto Mesh!

Toronto Mesh welcomes people from all backgrounds and technical skill levels and aims to provide a harassment-free environment. This event has a [Code of Conduct]({{ site.baseurl }}/code-of-conduct/).

***

## Registration

Register by email, **$10** suggested donation at the door, no one turned away for lack of funds.

<a class="button button-primary" href="mailto:{{ site.email }}?subject=State of Our Networks Registration" role="link"><i class="fa fa-ticket" aria-hidden="true"></i>&nbsp;&nbsp;Register Now</a>

***

## Location

Event and registration will be in the **Semaphore Demo Room, BL 417** on the fourth floor of the {% if page.locationLink %} <a href="{{page.locationLink}}" target="_blank">Claude T. Bissell building, 140 St. George St</a><!--_-->{% else %} Claude T. Bissell building, 140 St. George St{% endif %}.

The closest TTC Subway stop is St. George (at Bloor Street and St. George Street) and Streetcar stop is Spadina Ave at Sussex Street.

<iframe width="100%" height="250px" frameBorder="0" src="https://a.tiles.mapbox.com/v4/dcwalk.27eme78b/attribution,zoompan.html?access_token=pk.eyJ1IjoiZGN3YWxrIiwiYSI6ImNpZ3NzaWljdzA1ajdzeGtudTNzM3NnanYifQ.kA_-f8oD-sPwjPXfqcv1og"></iframe>

The venue is an accessible space, for more details please see the <a href="http://www.ace.utoronto.ca/website/accessibility/building_data/bl.pdf" target="_blank">building information sheet</a>.<!--_-->

***

## Schedule

| Start Time | Session |
| --- | --- | --- |
| 9:00 | **REGISTRATION OPENS** |
| 9:15 &ndash; 9:45 | _Welcome_: Intro to mesh and community wireless |
| 9:45 &ndash; 13:00 | _Workshops and Demos_* |
| 13:00 | **LUNCH** |
| 14:00 &ndash; 15:30 | _Presentation and Panel_ |
| 15:30 | **AFTERNOON BREAK** |  |
| 16:00 &ndash; 17:30 | _Interactive Discussion_ |
| 17:30 &ndash; 18:00 | _Closing_: Wrap up and deployment steps |  

<br />

*_Note: Workshops require a laptop (any operating system), but attendees are also welcome to bring [Raspberry Pis](https://en.wikipedia.org/wiki/Raspberry_Pi) or other [single-board computers](https://en.wikipedia.org/wiki/Single-board_computer) pre-flashed with Linux._

***

For more information, or if you are interested in volunteering, email us at [{{ site.email }}](mailto:{{ site.email }})!
