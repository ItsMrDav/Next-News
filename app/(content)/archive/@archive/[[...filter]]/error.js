'use client';

export default function FilterError({ error }) {
  console.log('NEWS LIST');
  return (
    <div id="error">
      <h2>An error occured!</h2>
      <p>{error.message}</p>
    </div>
  );
}
