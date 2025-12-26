```mermaid
flowchart TD

A@{ shape: circle, label: "Start" } --> B

B@{ shape: lean-r, label: "Input: \"IS_FEATURE_ACTIVE, num\"" }  --> C


C@{ shape: diamond, label: "IS_FEATURE_ACTIVE == TRUE" }

D@{ shape: rect, label: "Output: \"Hello\" " }

E@{ shape: rect, label: "Output: \"Hi\" " }

F@{ shape: diamond, label: "num === 100" }

G@{ shape: rect, label: "Output: num" }

H@{ shape: rect, label: "Output: \"Bonjour!\" " }

Z@{ shape: circle, label: "Stop" } 

C -- TRUE --> D
C -- FALSE --> E

D --> F
E --> F

F -- TRUE --> G
F -- FALSE --> H

G --> Z
H --> Z











```