# React Design Patterns

- Layout Components
  - **Layout components** are used to define the structure and layout of a page or a section of an application. They often include wrappers and containers that manage spacing, alignment, and positioning of child components. The primary focus is on how components are arranged visually rather than on their functionality.
- Container Components
  - **Container components** (or Smart components) are responsible for managing state and business logic. They handle data fetching, state management, and pass necessary data and functions down to presentational components (also known as Dumb components). Container components do not concern themselves with how things are rendered; instead, they focus on how things work. 
- Controlled and Uncontrolled Components
  - **Controlled components** are those where form data is handled by the React component. The state of the form elements is kept in the component's state and updated via event handlers (e.g., `onChange`).
  - **Uncontrolled components** store their own state internally and rely on the DOM to manage the form data. They use refs to access the form values directly from the DOM elements. 
- Higher-Order Components
  - **Higher-Order Components** are functions that take a component and return a new component with additional props, state, or behavior. HOCs are commonly used for cross-cutting concerns like authentication, logging, or connecting to a Redux store. They provide a way to reuse component logic.
- Custom Hooks
  - **Custom Hooks** allow you to extract and reuse stateful logic across multiple components. They are functions that start with `use` and can call other hooks inside them. Custom hooks help in keeping components clean and making the logic more reusable and shareable.
- Functional Programming
  - **Recursive components:** Use pure functions to render nested structures by calling themselves with modified props until a base condition is met. This is particularly useful for rendering hierarchical data like trees, folders, or nested comments.
  - **Component composition:** Build complex UIs by combining smaller, stateless functional components, promoting reusability and separation of concerns.
  - **Partially Applied Components:** Create higher-order components or specialized versions of components by pre-filling some props, enhancing code readability and reducing duplication.
