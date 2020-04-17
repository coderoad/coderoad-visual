/* GLOBAL FUNCTIONS */
function updateTip(key, index) {
  let color

  if (key === 'commitTips') {
    color = 'rgb(255, 153, 255)'
  } else if (key === 'lessonTips') {
    color = 'rgb(255, 204, 153)'
  } else {
    color = 'rgb(0, 204, 0)'
  }

  closeTipBtn.style.backgroundColor = color
  tipWrap.style.visibility = 'visible'
  tipElement.innerHTML = tips[key][index]
}

/* TIPS */
const tips = {
  flowchartTips: [
    'A repo for a tutorial consists of two branches. A master branch and a version branch.',
    'The tutorials repo has a list of config.json files, one from each tutorial.',
    'The Code Road repo holds all the vscode extension code. It uses the config.json files from the tutorials repo to create the lessons as shown below. Click them to see what markdown it is using.',
    'You will create a CODEROAD.md file on the master branch (example below).',
    'The version branch (e.g. v0.1.0) holds Code Road set up code, code to start users off with, and all the tests and solutions.',
    'The important part of the project files are the commits used to create them. An individual lesson should have a commit for a test and another for a solution to that test. Click on the commits below to see where they fit in the markdown file.',
    'The markdown file you create describes the structure of the lessons. A script will be used to create the config.json file from it.',
    'This file also lives on the master branch. It will be added to the tutorials repo.',
  ],
  commitTips: [
    'Initial commit to the v0.1.0 branch. It includes the Code Road set up code. Commit hashes added in the setup area will be loaded when the lesson is loaded.',
    'A commit with a test goes in the "setup" to run against the users code.',
    'A solution commit for Code Road to run against the tests.',
    'A commit with a test for a new lesson. Added in the setup area.',
    'A commit with a solution for this lesson added to the solution area.',
    'Test commit for a new lesson.',
    'Solution commit for this lesson.',
  ],
  lessonTips: [
    'Overview of the tutorial. Displays a list of the titles and a brief decription of each. A single "#" in the markdown denotes this lesson.',
    'Optional introduction page has no tests. All the other lessons begin with "##" in the markdown.',
    'First lesson with a test. "### Step" inside a lesson is where you describe tests, solutions, command scripts and set up code.',
    'You can use markdown in your instructions for code blocks and keywords.',
    `It isn't shown here, but you can add multiple steps for a single set of instructions by just adding another "### Step" in the markdown.`,
  ],
}

const tipWrap = document.querySelectorAll('.tip-wrap')[0]
const tipElement = document.querySelectorAll('.tip')[0]
const closeTipBtn = document.querySelectorAll('.close-tip-btn')[0]

closeTipBtn.addEventListener('click', () => {
  // remove flowchart highlighting
  flowchartElements.forEach(item => {
    item.classList.remove('highlight-flow-item')
  })

  // hide tip
  tipWrap.style.visibility = 'hidden'
})

/* FLOWCHART HIGHLIGHTING */
const flowchartElements = [
  document.querySelectorAll('.flow-main-repo')[0],
  document.querySelectorAll('.repo-tutorials')[0],
  document.querySelectorAll('.repo-coderoad')[0],
  document.querySelectorAll('.branch-master')[0],
  document.querySelectorAll('.branch-version')[0],
  document.querySelectorAll('.file-project')[0],
  document.querySelectorAll('.file-coderoad')[0],
  document.querySelectorAll('.file-config')[0],
]

// add click events for flowchart elements
flowchartElements.forEach((el, index) => {
  el.addEventListener('click', () => {
    // update tip
    updateTip('flowchartTips', index)

    // remove old highlighting
    flowchartElements.forEach(item => {
      item.classList.remove('highlight-flow-item')
    })

    // add new highlighting
    el.classList.add('highlight-flow-item')

    switch (index) {
      case 0:
        flowchartElements[3].classList.add('highlight-flow-item')
        flowchartElements[4].classList.add('highlight-flow-item')
        break
      case 1:
        flowchartElements[2].classList.add('highlight-flow-item')
        break
      case 3:
        flowchartElements[6].classList.add('highlight-flow-item')
        flowchartElements[7].classList.add('highlight-flow-item')
        break
      case 4:
        flowchartElements[5].classList.add('highlight-flow-item')
        break
      case 6:
        flowchartElements[7].classList.add('highlight-flow-item')
        break
      case 7:
        flowchartElements[1].classList.add('highlight-flow-item')
        break
      case 2:
      case 5:
      case 8:
      default:
        break
    }
  })
})

/* LESSON HIGHLIGHTING */
const lessonImages = document.querySelectorAll('.lesson-img')
const markdownLessonDivs = [
  document.querySelectorAll('.lesson-1-markdown'),
  document.querySelectorAll('.lesson-2-markdown'),
  document.querySelectorAll('.lesson-3-markdown'),
  document.querySelectorAll('.lesson-4-markdown'),
  document.querySelectorAll('.lesson-5-markdown'),
]

let lessonImgHighlighted = false
let highlightedLessonTextIndex = false

// add click events for lesson images
lessonImages.forEach((img, index) => {
  img.addEventListener('click', () => {
    // update tip
    updateTip('lessonTips', index)

    // remove highlighting from old image
    if (lessonImgHighlighted) {
      lessonImgHighlighted.classList.remove('highlight-lesson-img')
    }

    // add highlighting to new image
    img.classList.add('highlight-lesson-img')

    // set new image to old image
    lessonImgHighlighted = document.querySelectorAll('.highlight-lesson-img')[0]

    // remove old highlighting from markdown
    if (typeof highlightedLessonTextIndex === 'number') {
      markdownLessonDivs[highlightedLessonTextIndex].forEach(highlight => {
        highlight.classList.remove('highlight-lesson-text')
      })
    }

    // highlight new markdown
    markdownLessonDivs[index].forEach(markdownText => {
      markdownText.classList.add('highlight-lesson-text')
    })

    // set index for new markdown highlights
    highlightedLessonTextIndex = index
  })
})

/* COMMIT HIGHLIGHTING */
const commitImgGroup = document.querySelectorAll('.commit-img-group')
const markdownCommitDivs = [
  document.querySelectorAll('.commit-1-markdown'),
  document.querySelectorAll('.commit-2-markdown'),
  document.querySelectorAll('.commit-3-markdown'),
  document.querySelectorAll('.commit-4-markdown'),
  document.querySelectorAll('.commit-5-markdown'),
  document.querySelectorAll('.commit-6-markdown'),
  document.querySelectorAll('.commit-7-markdown'),
]

let commitImgHighlighted = false
let highlightedCommitTextIndex = false

// add click events for commit images
commitImgGroup.forEach((img, index) => {
  img.addEventListener('click', () => {
    // update tip
    updateTip('commitTips', index)

    // remove highlighting from old image
    if (commitImgHighlighted) {
      commitImgHighlighted.classList.remove('highlight-commit-img')
    }

    // add highlighting to new image
    img.classList.add('highlight-commit-img')

    // set new image to old image
    commitImgHighlighted = document.querySelectorAll('.highlight-commit-img')[0]

    // remove old highlighting from markdown
    if (typeof highlightedCommitTextIndex === 'number') {
      markdownCommitDivs[highlightedCommitTextIndex].forEach(highlight => {
        highlight.classList.remove('highlight-commit-text')
      })
    }

    // highlight new markdown
    markdownCommitDivs[index].forEach(markdownText => {
      markdownText.classList.add('highlight-commit-text')
    })

    // set index for new markdown highlights
    highlightedCommitTextIndex = index
  })
})
