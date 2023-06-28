const rowCards = document.getElementById('row-cards')
const colCards = document.getElementById('col-cards')

const svgCol = document.getElementById('svg-col')
const svgRow = document.getElementById('svg-row')

const toColumns = () => {
    svgCol.classList.add('stroke-accent-2')
    svgCol.classList.remove('stroke-gray')
    svgRow.classList.remove('stroke-accent-2')
    svgRow.classList.add('stroke-gray')
    colCards.classList.remove('hidden')
    colCards.classList.add('flex')
    rowCards.classList.add('hidden')
    rowCards.classList.remove('flex')
}

const toRow = () => {
    svgCol.classList.remove('stroke-accent-2')
    svgCol.classList.add('stroke-gray')
    svgRow.classList.add('stroke-accent-2')
    svgRow.classList.remove('stroke-gray')
    colCards.classList.add('hidden')
    colCards.classList.remove('flex')
    rowCards.classList.remove('hidden')
    rowCards.classList.add('flex')
}