---
layout: page
title: Timeline
order: 1
parent: About
---

<div class="timeline">
  <ul>
    {% assign timeline = site.timeline | reverse %}
    {% for post in timeline %}
    <li class="timeline-item-container">
      <section class="timeline-item">
        <time datetime="{{post.date | date: "%Y-%m-%d"}}">{{post.date | date: "%B %-d, %Y"}}</time>
        <h2>{{ post.title }}</h2>
        {% if post.image_path %}
          <img src="{{ post.image_path}}" alt="{{ post.image_name }}">
        {% endif %}
        {{ post.content }}
      </section>
    </li>
    {% endfor %}
  </ul>
</div>
