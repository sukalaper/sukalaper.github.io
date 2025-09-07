+++
date = '2025-09-08T00:24:15+07:00'
title = 'Post 1'
+++

# Heading 1
Ini adalah paragraf pertama berisi *lorem ipsum* untuk mengetes format Markdown.

## Heading 2
Lorem ipsum dolor sit amet, consectetur adipiscing elit.  
Vivamus viverra, nunc id tincidunt dictum, lectus felis feugiat purus, ut dictum erat sem a neque.

### Heading 3
Contoh list:
- Item 1
- Item 2
- Item 3

---

## Sample Complex C++ Code

```cpp
#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

class Student {
public:
    std::string name;
    int score;

    Student(const std::string &n, int s) : name(n), score(s) {}
};

int main() {
    std::vector<Student> students = {
        {"Alice", 85},
        {"Bob", 92},
        {"Charlie", 78},
        {"Diana", 88},
        {"Evan", 95}
    };

    std::cout << "Original List:" << std::endl;
    for (const auto &s : students) {
        std::cout << s.name << " - " << s.score << std::endl;
    }

    std::sort(students.begin(), students.end(),
              [](const Student &a, const Student &b) {
                  return a.score > b.score;
              });

    std::cout << "\nSorted by Score (Descending):" << std::endl;
    for (const auto &s : students) {
        std::cout << s.name << " - " << s.score << std::endl;
    }

    return 0;
}
