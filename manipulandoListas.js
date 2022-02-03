//Ordenando números.
const Numbers = [8, 5, 10, 5, 2, 4, 4, 3];

const FilteredNumbers = (numbers, b) => {
    const SortNumbers = (Number, b) => {
        return Number - b;
    };
    const FilterNumbers = numbers;
    FilterNumbers.sort(SortNumbers);
    const removeDuplicate = [...new Set(FilterNumbers)];
    return removeDuplicate;

};

console.log(FilteredNumbers(Numbers));