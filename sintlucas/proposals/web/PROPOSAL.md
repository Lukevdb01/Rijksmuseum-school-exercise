# Rijksmuseum Audio Tour App

## Introduction
The Rijksmuseum, one of the most esteemed art museums in the world, houses thousands of masterpieces spanning several centuries. 
To enhance the visitor experience, we propose the development of an Audio Tour App that leverages modern technology to provide a rich, immersive, and accessible tour for all museum guests.

## Objective
The primary objective of this app is to create an interactive, informative, and engaging museum experience. 
By scanning a QR code next to a painting or object, users will receive detailed descriptions in their preferred language, 
alongside an audio narration that enriches their visit.

## User Stories
* M As a **user**, I want to be able to enter the number next to an artwork to access a description of the artwork, so I can understand its significance and context.
* S As a **user**, I want to scan a QR code next to an artwork to access a description of the artwork, so I can understand its significance and context.
* M As a **user**, I want to see a high-quality image of the artwork on my device, allowing me to notice details I might have missed at first glance.
* M As a **user**, I want a description of the artwork under the image, so I can inform myself about the artwork.
* M As a **user**, I would like the option to save my favorite artworks within the app, so I can revisit them later or share them with friends and family.
* C As a **non-Dutch user**, I need the app to be able to show an English description instead of Dutch, ensuring I can fully appreciate the artwork without language barriers.
* S As a **user**, I expect that the description is being read to me, so I can learn about and view the artwork at the same time.
* S As a **user**, I expect the app to load content quickly and efficiently, minimizing waiting times and avoiding disruptions during my tour.

## Technical Requirements
* Web API Integration (webservice): Use of the Rijksmuseum API (https://data.rijksmuseum.nl/object-metadata/api/) to fetch descriptions, audio files, and images.
* QR Code Integration (npm module): Ability to scan QR codes placed next to museum exhibits.
* Browser API Integration (SpeechSynthesis): Utilize the SpeechSynthesis API to read out descriptions to users.
