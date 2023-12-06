import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  const [projectsState, setProjectsState] = useState({
    currentAction: 'nothing-selected', // currentAction -> adding, selected-project, nothing-selected
    selectedProjectId: undefined, // Undefined -> Doing nothing
    projects: [],
    tasks: []
  });

  function handleAddTask(text) {
    setProjectsState(prevState => {

      const taskId = Math.random();

      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id)
      };
    });
  }

  function handleSelectProject(id) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,
        currentAction: 'selected-project'
      };
    });
  }

  function handleStartAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null, // Null -> Adding a new project
        currentAction: 'adding'
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined, // Null -> Adding a new project
        currentAction: 'nothing-selected'
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState(prevState => {

      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        currentAction: 'nothing-selected',
        projects: [...prevState.projects, newProject]
      };
    });
  }

  function handleDeleteSelectedProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined, // Null -> Adding a new project
        currentAction: 'nothing-selected',
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId)
      };
    });
  }

  function handleDeleteProject(id) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined, // Null -> Adding a new project
        currentAction: 'nothing-selected',
        projects: prevState.projects.filter((project) => project.id !== id)
      };
    });
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteSelectedProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectsState.tasks}
    />
  );

  if (projectsState.currentAction === 'adding') {
    content = <NewProject onAddProject={handleAddProject} onCancel={handleCancelAddProject} />;
  } else if (projectsState.currentAction === 'nothing-selected') {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
        onDelete={handleDeleteProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;