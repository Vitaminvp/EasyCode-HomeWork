const categories = [
    { name: 'tech', parent: null },
    { name: 'hot_right_now', parent: 'tech' },
    { name: 'upcomming_releases', parent: 'tech' },
    { name: 'gadgets', parent: 'tech' },
    { name: 'news', parent: null },
    { name: 'social', parent: 'startups' },
    { name: 'europe', parent: 'news' },
    { name: 'asia', parent: 'news' },
    { name: 'events', parent: 'news' },
    { name: 'startups', parent: null },
    { name: 'funding', parent: 'startups' },
    { name: 'unicorns', parent: 'startups' },
    { name: 'venture_capital', parent: 'funding' },
    { name: 'crowdfunding', parent: 'funding' },
    { name: 'usa', parent: 'news' }
]

const arrangeCategories = (categories, parent = null) => {
    let result = {}
    categories.filter(category => category.parent === parent)
    .forEach(category => {
        result[category.name] = arrangeCategories(categories, category.name)
    })

    return result
}

console.log(arrangeCategories(categories));
