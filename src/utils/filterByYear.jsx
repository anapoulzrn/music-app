export default function filterByYear(a, b, filterValue) {
    if (filterValue === 'oldest') {
        return Date.parse(a.release_date) - Date.parse(b.release_date)
    }

    if (filterValue === 'newest') {
        return Date.parse(b.release_date) - Date.parse(a.release_date)
    }

    if (filterValue === 'default') {
        return 0;
    } 
}
