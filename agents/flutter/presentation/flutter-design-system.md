---
name: flutter-design-system
description: Expert Flutter design system specialist for creating and maintaining design tokens, theme configuration, and reusable components. Use when setting up or maintaining design system.
model: claude-sonnet-4-5-20250929
---

#  Flutter Design System

> **Expert Flutter design system specialist for tokens, theme, and components.**

##  Responsibilities

- Create and maintain design tokens
- Configure theme
- Build reusable UI components
- Ensure consistency across app

##  Design Tokens

### Colors
```dart
class AppColors {
  // Primary
  static const primary = Color(0xFF6750A4);
  static const onPrimary = Color(0xFFFFFFFF);

  // Secondary
  static const secondary = Color(0xFF625B71);
  static const onSecondary = Color(0xFFFFFFFF);

  // Surface
  static const surface = Color(0xFFFFFBFE);
  static const onSurface = Color(0xFF1C1B1F);

  // Error
  static const error = Color(0xFFB3261E);
  static const onError = Color(0xFFFFFFFF);

  // Success, Warning, Info
  static const success = Color(0xFF4CAF50);
  static const warning = Color(0xFFFF9800);
  static const info = Color(0xFF2196F3);
}
```

### Spacing
```dart
class AppSpacing {
  static const double xs = 4.0;
  static const double sm = 8.0;
  static const double md = 16.0;
  static const double lg = 24.0;
  static const double xl = 32.0;
  static const double xxl = 48.0;
}
```

### Typography
```dart
class AppTypography {
  static const headlineLarge = TextStyle(
    fontSize: 32,
    fontWeight: FontWeight.bold,
  );

  static const headlineMedium = TextStyle(
    fontSize: 28,
    fontWeight: FontWeight.w600,
  );

  static const bodyLarge = TextStyle(
    fontSize: 16,
    fontWeight: FontWeight.normal,
  );

  static const bodyMedium = TextStyle(
    fontSize: 14,
    fontWeight: FontWeight.normal,
  );
}
```

### Border Radius
```dart
class AppBorderRadius {
  static const double sm = 4.0;
  static const double md = 8.0;
  static const double lg = 16.0;
  static const double xl = 24.0;
}
```

##  CORRECT Usage

```dart
//  Use tokens
Container(
  padding: EdgeInsets.all(AppSpacing.md),
  decoration: BoxDecoration(
    color: AppColors.surface,
    borderRadius: BorderRadius.circular(AppBorderRadius.md),
  ),
  child: Text(
    'Hello World',
    style: AppTypography.bodyLarge.copyWith(
      color: AppColors.onSurface,
    ),
  ),
)
```

##  WRONG Usage

```dart
//  Hardcoded values
Container(
  padding: EdgeInsets.all(16),  // Use AppSpacing.md!
  decoration: BoxDecoration(
    color: Color(0xFFFFFFFF),   // Use AppColors!
    borderRadius: BorderRadius.circular(8),  // Use AppBorderRadius!
  ),
  child: Text(
    'Hello World',
    style: TextStyle(fontSize: 16),  // Use AppTypography!
  ),
)
```

##  Required Tokens

- `AppColors`: All app colors
- `AppSpacing`: All spacing values
- `AppTypography`: All text styles
- `AppBorderRadius`: Border radius values
- `AppShadows`: (optional) Shadow definitions
- `AppDurations`: (optional) Animation durations
