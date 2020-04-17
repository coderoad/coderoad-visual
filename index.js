// tips
const tipWrap = document.querySelectorAll('.tip-wrap')[0]
const tipElement = document.querySelectorAll('.tip')[0]
const closeTipBtn = document.querySelectorAll('.close-tip-btn')[0]

// <a href="https://github.com/coderoad/fcc-learn-npm" target="_blank"

const tips = {
  flowchartTips: [
    'A repo for a tutorial consists of two branches. A master branch and a version branch.', // npm repo
    'The tutorials repo has a list of all the config.json files from each repo.', // tutorials repo
    'The coderoad repo holds all the vscode extension code. It will create all the available tutorials from the list of config.json files.', // coderoad repo
    'You will create a CODEROAD.md file on the master branch (example below). It will be used to generate the config.json file.', // master branch
    'The version branch (e.g. v0.1.0) hold project files for users, testing files, and coderoad files.', // version branch
    'The important part of the project files are the commits used to create them. An individual lesson should have a commit for a test and another for a solution to that test. Click on the commits below to see where they fit in the markdown file.', // project files
    'This is a markdown file you will create to give your lessons instructions.', // coderoad file
    "A script is used to create this file. And it is linked to from the tutorials repo. It's what the coderoad extension uses to generate the tutorials", // config file
  ],
  commitTips: [
    'Initial commit to the v0.1.0 branch. It includes the Code Road set up code. Commit hashes added in the setup area will be loaded when the lesson is loaded.',
    'A commit with a test goes in the "setup" to run against the users code.',
    'A commit for Code Road to run against the tests.',
    'A commit with a test for a new lesson. Added in the "setup" area.',
    'A commit with a solution for this lesson added to the "solution" area.',
    'Another test.',
    'Another solution.',
  ],
  lessonTips: [
    'Overview of the tutorial. Displays a list of the titles and a brief decription of each.',
    'Optional introduction page has no tests. It consists of a title, a snippet for the overview page, and text.',
    'First lesson with a test.',
    'You can add more steps for a single set of instructions.',
    'Last lesson.',
  ],
}

closeTipBtn.addEventListener('click', () => {
  // remove flowchart highlighting
  flowchartElements.forEach(item => {
    item.classList.remove('highlight-flow-item')
  })

  tipWrap.style.visibility = 'hidden'
})

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

// flowchart highlighting
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

// lesson highlighting
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

// Commit highlighting
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
