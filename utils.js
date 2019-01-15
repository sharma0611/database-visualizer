// Get the summary statistics we need from a given db connection & variable name
const getSummary = (variable, conn) => {
    return new Promise(function(resolve, reject) {
        const sql =
            'SELECT DISTINCT ?? as value, count(??) as count, round(avg(age), 1) as averageAge FROM census_learn_sql GROUP BY ?? ORDER BY count DESC;'
        const inserts = [variable, variable, variable]
        conn.query(sql, inserts, function(error, results, fields) {
            if (error) reject(error)
            const result = {
                data: results.slice(0, Math.min(results.length, 100)),
                omitted: Math.max(results.length - 100, 0)
            }
            resolve(JSON.stringify(result))
        })
    })
}

module.exports = {
    getSummary
}
