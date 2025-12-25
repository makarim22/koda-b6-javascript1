# homework kamis

## nilai truthy dan falsy

Truthy dan falsy merupakan sebuah sebutan bagi nilai non-boolean yang dievaluasi menjadi boolean karena sifat automatic type conversion, atau coersion, dari JavaScript. Nilai truthy merupakan nilai non-boolean yang dievaluasi menjadi nilai true di JavaScript. Sementara nilai falsy merupakan nilai non-boolean yang dievaluasi menjadi nilai false di JavaScript (medium)

## switch case

switch case akan mengeksekusi satu ATAU lebih dari satu ekspresi apabila sesuai dengan kondisi. digunakan sebagai alternatif if..else dalam javascript.

contoh syntax: 

switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}

break digunakan untuk menghentikan eksekusi program setelah mencapai blok yang sesuai.

```mermaid
flowchart TD
    A@{ shape: circle, label: "Start" } --> B

    B@{ shape: lean-r, label: "Initialize Counter" } --> C
    C@{ shape: diamond, label: "Counter < Limit?" } -->|TRUE| D
    C -- FALSE --> Z1[End For Loop]

    D@{ shape: lean-r, label: "Execute Loop Body" } --> E
    E@{ shape: lean-r, label: "Update Counter" } --> C

    Z1 --> L[Stop]

```


```mermaid
flowchart TD
    A@{ shape: circle, label: "Start" } --> B

    B@{ shape: lean-r, label: "Initialize Variables" } --> C
    C@{ shape: diamond, label: "Condition True?" } -->|TRUE| D
    C -- FALSE --> Z2[End While Loop]

    D@{ shape: lean-r, label: "Execute Loop Body" } --> C

    Z2 --> L[Stop]
```

```mermaid
flowchart TD
    A@{ shape: circle, label: "Start" } --> B

    B@{ shape: lean-r, label: "Initialize Variables" } --> C
    C@{ shape: lean-r, label: "Execute Loop Body" } --> D
    D@{ shape: diamond, label: "Condition True?" } -->|TRUE| C
    D -- FALSE --> Z3[End Do-While Loop]

    Z3 --> L[Stop]


```
