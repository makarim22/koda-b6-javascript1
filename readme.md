## task 1

```mermaid
flowchart TD

A@{ shape: circle, label: "start"} --> B

B@{ shape: lean-r, label: "Input: jariLingkaran" } --> H

H@{ shape : diamond, label: "is jariLingkaran % 7 == 0?"}

H -- TRUE --> T
H -- FALSE --> R

T@{ shape: rect, label: "phi = 22/7"} --> U
R@{ shape: rect, label: "phi = 3.14"} --> C

C@{ shape: rect, label: "LuasLingkaran = 3.14 * r * r" } --> F

F@{ shape: rect, label: "KelilingLingkaran = 2* 3.14 * r" } --> K

U@{ shape: rect, label: "LuasLingkaran = 22/7 * r * r" } --> I

I@{ shape: rect, label: "KelilingLingkaran = 2* 22/7 * r" } --> O

K@{ shape: lean-r, label: "Output: \"keliling lingkaran adalah\"  KelilingLingkaran" } --> L

L@{ shape: lean-r, label: "Output: \"luas lingkaran adalah\"  LuasLingkaran" } --> J

O@{ shape: lean-r, label: "Output: \"keliling lingkaran adalah\"  KelilingLingkaran" }  --> P

P@{ shape: lean-r, label: "Output: \"luas lingkaran adalah\"  LuasLingkaran" } --> J

J@{ shape: circle, label: "Stop" }

```
