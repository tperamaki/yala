import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

const SwaggerUi = () => (
  <div className="dark:hue-rotate-180 dark:invert dark:filter">
    <SwaggerUI url="/swagger.json" />
  </div>
);

export default SwaggerUi;
