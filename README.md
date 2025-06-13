## Thought Process

I started by structuring the project around **reusable components** to ensure maintainability and scalability. Wherever possible, I made the content **dynamic and data-driven**, reducing code redundancy and improving flexibility for future changes. The layout is built using **Tailwind CSS** (v4.1), which enabled rapid styling using utility classes.

I integrated **Framer Motion** for smooth, declarative animations. This added interactivity and helped improve the user experience in a modern, performant way.

## Animation Library Used

- Framer Motion — for animating components with intuitive and declarative syntax.

## Challenges

One challenge I faced was ensuring **layout responsiveness**, especially when Tailwind's responsive classes (`sm:`, `md:`, etc.) clashed with `Framer Motion`'s animation transforms. With more time, I would:
- Further decouple layout and animation logic.
- Optimize motion transitions for smaller screens.
- Add breakpoints like `xs:` for improved responsiveness on smaller devices.

