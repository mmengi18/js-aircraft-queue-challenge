/*
=============== JS Aircraft Queue Challenge ==================
GOAL: Read each question and write code to complete each task
    given. Do not change starter code or function names.
      
TEST: To test run the commands `npm run test` in your terminal
    at the root of this directory.(js-aircraft-queue-challenge)
    Don't worry about capitalization.
*/

/*
Question 1

We have been contracted to write a software subsystem for an air traffic control
system. This software manages a queue of aircraft's and prioritizes the orders of
take offs and landings based on the aircraft's type and size. Write a
constructor function, `ATCQueue`, that creates and manages the aircraft queue.
    // the aircrafts are lined up and prioritazed for takeoff and landing by at least two factors
        // their type and size
            // the aircrats can be a passanger type or a cargo type - one determination factor
            // the aircracfts can ba small or large - another determination factor

Aircraft's are represented by objects that have at least, but are not limited to,
the following properties.
    // aircrafts - objects {}
    // one aircraft object can have type(passenger or cargo)property but not size property 

| Property | Value |
| - | - |
| `type` | `passenger` or `cargo` |
| `size` | `small` or `large` |

The aircraft queue should implement the following interface.
| Method | Parameters | Return | Notes |
| - | - | - | - |
| `aircraftCount()` | None | Integer | Count the number of aircraft's in the queue. |
| `enqueue()` | Aircraft | None | Add an aircraft to the queue. |
| `dequeue()` | None | Aircraft | Remove an aircraft from the queue and return it. |
// the aircraftCount() function counts the number of aircrafts that are lined up
// the enqueue() function add an aircraft to the line up if the type and size is what we are looking for
// the dequeue function() remove aircraft from the queue if the type and size is now what we are looking for
The process that manages the aircraft queue satisfies the following conditions.
-   There is no limit on the size of the aircraft queue. 
-   Aircraft's are dequeued according to their priority.
    -   Passenger aircraft's have higher priority than cargo aircraft's.
    -   If two aircraft's have the same type but different sizes, then the large
        aircraft has a higher priority.
    -   If there is more than one aircraft with the same type and size, then the
        aircraft that was enqueued earlier has higher priority.
*/
const ATCQueue = function () {
	this.aircraftQueue = []
}

ATCQueue.prototype.aircraftCount = function () {
// this function will count the number of aircraft 
    return this.aircraftQueue.length
    // this function will return the number of air craft from the que from the array
}

ATCQueue.prototype.enqueue = function (aircraft) {
// aircrafts are added to the que
this.aircraftQueue.push(aircraft)
// this function will push a new aircraft to the array everytime
}

ATCQueue.prototype.dequeue = function () {
    // aircrafts are dequeued
    // find the first aircraft/index 0 from the array with the type and size -find()
    // return aircraft  if aircraft type and size === 'passenger' and 'large'
    // return aircraft  if aircraft type and size === 'passenger' and 'small'
    // return aircraft  if aircraft type and size === 'cargo' and 'small'
    // this three aircraft option returns have less of a priority
    // for the aircrafts that have priority
        // they must have a lot of passenger
        // big cargo, small passenger
        // small cargo
        //  big cargo
    // then we get this we will remove these aircrafts using pop()
}

// DO NOT MODIFY
module.exports = ATCQueue