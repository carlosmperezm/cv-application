
export const generalInfoFields = [
  { name: 'Name', type: 'text', id: crypto.randomUUID() },
  { name: 'Email', type: 'email', id: crypto.randomUUID() },
  { name: 'Phone number', type: 'tel', id: crypto.randomUUID() },
];
export const educationalExpFields = [
  { name: 'School name', type: 'text', id: crypto.randomUUID() },
  { name: 'Title of study', type: 'text', id: crypto.randomUUID() },
  { name: 'Date of study', type: 'date', id: crypto.randomUUID() },
];
export const practicalExpFields = [
  { name: 'Company name', type: 'text', id: crypto.randomUUID() },
  { name: 'Position title', type: 'text', id: crypto.randomUUID() },
  { name: 'Main responsabilities', type: 'textarea', id: crypto.randomUUID() },
  { name: 'Start date', type: 'date', id: crypto.randomUUID() },
  { name: 'End date', type: 'date', id: crypto.randomUUID() }
];
