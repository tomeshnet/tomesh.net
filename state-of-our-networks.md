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

*_Note: Workshops require a laptop (any operating system), but attendees are also welcome to bring a [Raspberry Pi](https://en.wikipedia.org/wiki/Raspberry_Pi) (pre-flashed with Raspbian Jessie Lite) or other [single-board computers](https://en.wikipedia.org/wiki/Single-board_computer) (pre-flashed with some Debian-based distro)._

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
| 9:15 &ndash; 9:45 | Introduction to mesh and community wireless |
| 9:45 &ndash; 11:00 | [DIY Low Power Networks](https://github.com/tomeshnet/mini-conf-2017/blob/master/sessions/session-b.md) _Workshop_ |
| 11:00 &ndash; 12:30 | [Build a Mesh Node](https://github.com/tomeshnet/mini-conf-2017/blob/master/sessions/session-c.md) _Workshop_ |
| 12:30 &ndash; 13:00 | MeshISP _Demo_ |
| 13:00 | **LUNCH** |
| 14:00 &ndash; 15:30 | [A History of Toronto's Networks](https://github.com/tomeshnet/mini-conf-2017/blob/master/sessions/session-e.md) _Panel Session_ |
| 15:30 | **AFTERNOON BREAK** |  |
| 16:00 &ndash; 17:30 | [Building the Networks We Want](https://github.com/tomeshnet/mini-conf-2017/blob/master/sessions/session-f.md) _Interactive Discussion_ |
| 17:30 &ndash; 18:00 | Wrap Up and Moving Forward |

<br />

***

## Speakers

**ansuz** is a Toronto-based hacker temporarily stuck in Paris.

<div class="row">
  <div class="one-third column"><a href="https://transitiontech.ca/" target="_blank"><i class="fa fa-link" aria-hidden="true"></i>
  <span class="website">transitiontech.ca</span>
  </a></div>
  <div class="one-third column"><a href="https://twitter.com/fc00ansuz" target="_blank">
    <i class="icon fa fa-twitter" aria-hidden="true"></i>
    <span class="username">@fc00ansuz</span>
  </a></div>
  <div class="one-third column"><a href="https://github.com/ansuz" target="_blank">
    <i class="icon fa fa-github" aria-hidden="true"></i>
    <span class="username">ansuz</span>
  </a></div>
</div>
<br />

**Benedict Lau** is a Toronto-based engineer who believes in knowledge sharing and appropriate technology principles. He enjoys building things that fascinate him, which on rare occasions turn out useful for other people. Lately he's been spending much time on mobile software and exploring the wonderful world of distributed systems.

<div class="row">
  <div class="one-third column"><a href="http://www.groundupworks.com/" target="_blank"><i class="fa fa-link" aria-hidden="true"></i>
  <span class="website">groundupworks.com</span>
  </a></div>
  <div class="one-third column"><a href="https://twitter.com/LauBenedict" target="_blank">
    <i class="icon fa fa-twitter" aria-hidden="true"></i>
    <span class="username">@LauBenedict</span>
  </a></div>
  <div class="one-third column"><a href="https://github.com/benhylau" target="_blank">
    <i class="icon fa fa-github" aria-hidden="true"></i>
    <span class="username">benhylau</span>
  </a></div>
</div>
<br />

**Udit Vira** is an engineer and maker living in Toronto where he contributes to Steam Link Toronto and the Toronto Mesh project.

<div class="row">
  <div class="one-third column"><a href="https://github.com/uditvira" target="_blank">
    <i class="icon fa fa-github" aria-hidden="true"></i>
    <span class="username">uditvira</span>
  </a></div>
  <div class="one-third column"></div>
  <div class="one-third column"></div>
</div>

***

For more information, or if you are interested in volunteering, email us at [{{ site.email }}](mailto:{{ site.email }})!
