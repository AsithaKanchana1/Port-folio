# My Android Development Journey with Java

When I started learning Android development, the ecosystem felt overwhelming. But sticking through it has been one of the most rewarding experiences of my coding journey so far.

## Where It Started

I picked up Android development as part of a university project. The goal was to build something real — not just a "Hello World" app — so I decided to create **Hidden Sri Lanka**, an app that suggests hidden travel destinations based on the user's current location.

## The Tech Stack

For the app, I chose:

| Technology | Purpose |
|------------|---------|
| Java | Primary programming language |
| Android SDK | UI and device APIs |
| Firebase Firestore | Database and real-time sync |
| Firebase Auth | User authentication |
| Google Maps SDK | Location and mapping |

## Key Challenges

### 1. Location Permissions on Android

Modern Android is strict about location permissions. I had to handle:

```java
// Request fine location at runtime
if (ContextCompat.checkSelfPermission(this, 
    Manifest.permission.ACCESS_FINE_LOCATION) 
    != PackageManager.PERMISSION_GRANTED) {
    
    ActivityCompat.requestPermissions(this,
        new String[]{Manifest.permission.ACCESS_FINE_LOCATION},
        LOCATION_REQUEST_CODE);
}
```

The `ACCESS_BACKGROUND_LOCATION` permission requires an extra step starting from Android 10.

### 2. Firebase Real-time Queries

Querying Firebase with GeoFire for location-based searches was tricky at first. The key insight was using GeoHash to efficiently query nearby locations:

```java
GeoFirestore geoFirestore = new GeoFirestore(
    FirebaseFirestore.getInstance().collection("locations")
);

GeoQuery query = geoFirestore.queryAtLocation(
    new GeoPoint(userLat, userLon), 
    radiusInKm
);
```

### 3. RecyclerView with Async Image Loading

Loading images from Firebase Storage asynchronously while scrolling smoothly was a challenge. I ended up using **Glide** for this:

```java
Glide.with(context)
    .load(imageUrl)
    .placeholder(R.drawable.placeholder)
    .error(R.drawable.error_image)
    .centerCrop()
    .into(imageView);
```

## Lessons Learned

1. **Read the docs.** Android documentation is actually quite good. When I hit a wall, going back to the official docs saved me hours of Stack Overflow scrolling.

2. **Understand the Activity lifecycle.** So many bugs I encountered were because I didn't understand when `onCreate`, `onResume`, `onPause`, and `onDestroy` fire.

3. **Don't underestimate UI work.** Making the app look good and feel smooth took more time than the actual logic.

4. **Test on real devices early.** The emulator lies. Behavior on a real phone with real GPS is very different.

## What I'd Do Differently

If I were starting over:
- I'd consider **Jetpack Compose** for the UI (the modern Android UI toolkit)
- I'd set up proper error handling from day one instead of adding it later
- I'd write unit tests as I go, not at the end

## The Result

The app was completed and submitted as a university project. It's open source on GitHub if you want to check it out.

> **Pro tip:** Building a real project — not just following tutorials — is the fastest way to learn Android development.

---

*Published on July 10, 2025*
