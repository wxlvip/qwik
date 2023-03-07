import { component$, useSignal } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';

interface ItemProps {
    name?: string;
    quantity?: number;
    description?: string;
    price?: number;
 }
 
 export default component$((props: ItemProps) => {
  // Declare local state
  const count = useSignal(0);

  // Returns JSX
  return (
    <>
      <span>
        Hello, {props.name} {count.value}
      </span>
      <div>Times: {count.value}</div>
      <button
        onClick$={() => {
          // This will update the local state and cause a re-render.
          // Reactivity is at Qwik's core!
          count.value++;
        }}
      >
        Increment
      </button>
    </>
  );
});

export const head: DocumentHead = {
    title: 'Qwik AAA',
  };