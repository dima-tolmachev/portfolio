import { observer } from 'mobx-react-lite';
import { ReactNode } from 'react';
import { appStore } from '../../stores/app-store';

const Details = () => {
  const { projectsList, projectID } = appStore;
  if (!(projectID - 1 in projectsList)) window.location.reload();
  const project = projectsList[projectID - 1];

  return (
    <div className={'details'}>
      <label
        style={{
          fontSize: '20px',
          borderBottom: '2px',
          borderBottomColor: 'white',
          cursor: 'pointer',
          color: 'white',
          float: 'right',
        }}
        onClick={() => {
          appStore.projectID = 0;
        }}
      >
        Go back
      </label>
      <h2>{project.title}</h2>
      <p>
        {project.stack.map((el) => {
          return (
            <img
              src={el.picPath}
              alt={el.title}
              width="25px"
              style={{ marginRight: '10px' }}
            />
          );
        })}
      </p>
      {project.description.map(
        (text: string, index: number): ReactNode => (
          <p key={index}>{text}</p>
        ),
      )}

      {project.links?.length ? (
        <>
          <hr />
          {project.links.map(
            (content: any, index: number): ReactNode => (
              <label>
                {index + 1 + '. '}
                <a key={index} href={content.url}>
                  {content.label}
                  <br />
                </a>
              </label>
            ),
          )}

          <br />
        </>
      ) : null}

      {project.images.map(
        (link: string, index: number): ReactNode => (
          <img
            key={index}
            style={{ maxWidth: '95%', border: '1px solid gray' }}
            alt="dummy"
            src={link}
          ></img>
        ),
      )}

      <br />
    </div>
  );
};

export default observer(Details);
