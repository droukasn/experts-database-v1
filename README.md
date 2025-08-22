# Experts Database

A simple React app for displaying a table of experts with their name, expertise, country, company, and email.

## Features

- Displays expert data in a responsive table
- Email addresses are clickable (`mailto:` links)
- Expert data stored in a local JSON file for easy editing

## File Structure

```
src/
  App.tsx
  components/
    ExpertTable.tsx
    ExpertRow.tsx
  data/
    experts.json
```

## Getting Started

1. **Install dependencies**  
   npm install

2. **Run the app**  
   npm start

3. **Edit expert data**  
   - Update `src/data/experts.json` with your own entries.

## Testing

Basic tests are included for UI rendering.  
Run tests with:
```
npm test
```

## Customization

- Add new expert fields to `experts.json` and update components as needed.
- Style the table further via CSS or inline styles.

## License

MIT
