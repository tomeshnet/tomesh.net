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

|      Start Time     |                                                                                                           Session                                                                                                            |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 9:00                | **REGISTRATION OPENS**                                                                                                                                                                                                       |
| 9:15 &ndash; 9:45   | Introduction to mesh and community wireless                                                                                                                                                                                  |
| 9:45 &ndash; 11:00  | [DIY Low Power Networks](https://github.com/tomeshnet/mini-conf-2017/blob/master/sessions/session-b.md) <br /> _Workshop led by [Udit Vera](#udit)_                                                                          |
| 11:00 &ndash; 12:30 | [Build a Mesh Node](https://github.com/tomeshnet/mini-conf-2017/blob/master/sessions/session-c.md) <br /> _Workshop led by [ansuz](#ansuz) and [Benedict Lau](#benhylau)_                                                    |
| 12:30 &ndash; 13:00 | MeshISP <br /> _Demo_                                                                                                                                                                                                        |
| 13:00               | **LUNCH**                                                                                                                                                                                                                    |
| 14:00 &ndash; 15:30 | [A History of Toronto's Networks](https://github.com/tomeshnet/mini-conf-2017/blob/master/sessions/session-e.md) <br /> _Panel Session with [Dr. Catherine Middleton](#catherine), [Dr. Karen Louise Smith](#karen), [Lee MacNeill](#lee), [Dr. Zbigniew Stachniak](#zbigniew), and members of the [TAO Collective](#tao)_ |
| 15:30               | **AFTERNOON BREAK**                                                                                                                                                                                                          |
| 16:00 &ndash; 17:30 | [Building the Networks We Want](https://github.com/tomeshnet/mini-conf-2017/blob/master/sessions/session-f.md) <br /> _Interactive Discussion with [Toronto Community Networks](#tcn), XXX, and XXX_                         |
| 17:30 &ndash; 18:00 | Wrap Up and Moving Forward                                                                                                                                                                                                   |

<br />

***

## Speakers

**ansuz**{:#ansuz} is a Toronto-based hacker temporarily stuck in Paris.

<ul class="bio-sm-list">
  <li class="bio-sm-list-item"><a href="https://transitiontech.ca/" target="_blank"><i class="fa fa-link" aria-hidden="true"></i>&nbsp;transitiontech.ca</a></li>
  <li class="bio-sm-list-item"><a href="https://twitter.com/fc00ansuz" target="_blank"><i class="icon fa fa-twitter" aria-hidden="true"></i>&nbsp;@fc00ansuz</a></li>
  <li class="bio-sm-list-item"><a href="https://github.com/ansuz" target="_blank"><i class="icon fa fa-github" aria-hidden="true"></i>&nbsp;ansuz</a></li>
</ul>

**Benedict Lau**{:#benhylau} is a Toronto-based engineer who believes in knowledge sharing and appropriate technology principles. He enjoys building things that fascinate him, which on rare occasions turn out useful for other people. Lately he's been spending much time on mobile software and exploring the wonderful world of distributed systems.

<ul class="bio-sm-list">
  <li class="bio-sm-list-item"><a href="http://www.groundupworks.com/" target="_blank"><i class="fa fa-link" aria-hidden="true"></i>&nbsp;groundupworks.com </a></li>
  <li class="bio-sm-list-item"><a href="https://twitter.com/LauBenedict" target="_blank"><i class="icon fa fa-twitter" aria-hidden="true"></i>&nbsp;@LauBenedict</a></li>
  <li class="bio-sm-list-item"><a href="https://github.com/benhylau" target="_blank"><i class="icon fa fa-github" aria-hidden="true"></i>&nbsp;benhylau</a></li>
</ul>

**Catherine Middleton**{:#catherine} is a Professor at the Ted Rogers School of Management. Dr. Middleton holds a Canada Research Chair in Communication Technologies in the Information Society and was named to the inaugural cohort of the Royal Society of Canada's College of New Scholars, Artists and Scientists in 2014. Her research focuses on the development and use of new communication technologies, with specific interests in mobile devices and fixed and wireless broadband networks. She is also interested in how Canadians use (or don't use) the internet in their daily lives.

<ul class="bio-sm-list">
  <li class="bio-sm-list-item"><a href="http://www.ryerson.ca/~cmiddlet/" target="_blank"><i class="fa fa-link" aria-hidden="true"></i>&nbsp;ryerson.ca/~cmiddlet/</a></li>
</ul>

**Karen Louise Smith**{:#karen} is an Assistant Professor in Communication, Popular Culture & Film at Brock University. Her research explores the tensions between openness, privacy, and participation in technologically mediated culture.

<ul class="bio-sm-list">
  <li class="bio-sm-list-item"><a href="http://karenlouisesmith.net/" target="_blank"><i class="fa fa-link" aria-hidden="true"></i>&nbsp;karenlouisesmith.net</a></li>
  <li class="bio-sm-list-item"><a href="https://twitter.com/smithisgeneric" target="_blank"><i class="icon fa fa-twitter" aria-hidden="true"></i>&nbsp;@smithisgeneric</a></li>
</ul>

**Lee MacNeill**{:#lee} is a Director and President of <a href="http://www.torfree.net/" target="_blank">Toronto Free-Net</a>.

<ul class="bio-sm-list">
  <li class="bio-sm-list-item"><a href="http://www.torfree.net/" target="_blank"><i class="fa fa-link" aria-hidden="true"></i>&nbsp;torfree.net</a></li>
</ul>

**TAO Collective**{:#tao}, or OAT ("Organizing Autonomous Telecomms"), is an anarchist and radical online service provider, offering free email and web hosting to activists.

<ul class="bio-sm-list">
  <li class="bio-sm-list-item"><a href="http://tao.ca/" target="_blank"><i class="fa fa-link" aria-hidden="true"></i>&nbsp;tao.ca</a></li>
</ul>

**Toronto Community Networks**{:#tcn} is a not-for-profit, grassroots organization that creates local networks in order to increase access to technology and information for communities across the GTHA. These networks provide a platform for communities to generate and share knowledge collaboratively, identify and address local problems, and increase economic well-being. TCN aspires to build the capacity of community members, so that they have the literacies required to maintain and scale their local networks, and succeed in the 21st century. We believe in building relationships and creating engagement through efforts that utilize research, co-creation, and empathy building to reach out to disengaged youth.

**Udit Vira**{:#udit} is an engineer and maker living in Toronto where he contributes to Steam Link Toronto and the Toronto Mesh project.

<ul class="bio-sm-list">
  <li class="bio-sm-list-item"><a href="https://github.com/uditvira" target="_blank"><i class="icon fa fa-github" aria-hidden="true"></i>&nbsp;uditvira</a></li>
</ul>

**Zbigniew Stachniak**{:#zbigniew} is an Associate Professor in the Department of Electrical Engineering and Computer Science at York University, Toronto. His main research areas are artificial intelligence, history of computing, and history of mathematics. He has published extensively in these fields. He is the founder and the curator of <a href="http://www.cs.yorku.ca/museum/" target="_blank">York University Computer Museum (YUCoM)</a>.

<ul class="bio-sm-list">
  <li class="bio-sm-list-item"><a href="http://www.cse.yorku.ca/~zbigniew/" target="_blank"><i class="fa fa-link" aria-hidden="true"></i>&nbsp;cse.yorku.ca/~zbigniew/</a></li>
  <li class="bio-sm-list-item"><a href="http://www.cs.yorku.ca/museum/" target="_blank"><i class="fa fa-link" aria-hidden="true"></i>&nbsp;cs.yorku.ca/museum/ (YUCoM)</a></li>
</ul>

***

For more information, or if you are interested in volunteering, email us at [{{ site.email }}](mailto:{{ site.email }})!
