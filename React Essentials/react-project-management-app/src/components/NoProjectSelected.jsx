import noProjectImage from '../assets/no-projects.png';
import Button from './Button.jsx';
import Heading from './Heading.jsx';
import Paragraph from './Paragraph.jsx';

export default function NoProjectSelected({ onStartAddProject }) {
    return (
        <div className="mt-24 text-center w-2/3">
            <img src={noProjectImage} alt='An empty task list' className='w-16 h-16 object-contain mx-auto' />
            <Heading>No Project Selected</Heading>
            <Paragraph>Select a project or get started with a new one</Paragraph>
            <p className="mt-8">
                <Button onClick={onStartAddProject}>Create new project</Button>
            </p>
        </div>
    );
}