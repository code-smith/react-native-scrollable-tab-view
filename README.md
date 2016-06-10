## react-native-scrollable-tab-view (lazy load)
This is a feature built into the Awesome [react-native-scrollable-tab-view component](https://github.com/skv-headless/react-native-scrollable-tab-view)

I have it as a fork and made a [pull request 303](https://github.com/skv-headless/react-native-scrollable-tab-view/pull/303),if approved great, else you guys can use it from here.

#Motivation:
I really love the component that's available but there were two performance bottlenecks(may be its just for my use case, but i'm sure many share my pain)

1. Currently when the ScrollableTabView component mounts it mounts all the tabs(children of ScrollableTabView Component). This can get very expensive if there are network calls or other heavylifting involved inside children.
I felt it was not necessary as user only sees initial tab first and content should rather be rendered lazily on demand.
I added changes so that tabs are mounted only when viewed for the first time.Thus when first mounted only initial page is mounted and other tabs are lazily mounted.

2. Similary when ScrollableTabView component updates all the tabs are rendered. This again can get expensive, so made changes to only render tab is being selected/viewed.

Both these changes are well tested on Android and iOS and i'm currently using it in my project.

## Add it to your project
Download from git master branh and use it.
Replace the index.js file in react-native-scrollable-tab-view node modules with the one available here and it will work.
(If my PR is not approved, will release a npm for this)

## Demo
DIY

;x
:x
check examples folder, its almost the same, there are no changes in how you're going to use it.
As Examples provided dont use a custom component to log mouting and redering,I have included a Contianer Component to log mounting and updating as a proof for for lazy loading
#note
Android renders the component 3 times initially(not sure why??) ,so you see one log for mouting initial tab and 2 logs for updating tabs

## Contribution
**Issues** are welcome. Please add a screenshot of bug and code snippet. Quickest way to solve issue is to reproduce it on one of the examples.

**Pull requests** are welcome. 

---

**Use however the fuck you may License**
