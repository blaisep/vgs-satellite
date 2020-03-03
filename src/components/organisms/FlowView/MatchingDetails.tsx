import * as React from 'react';
import MatchingRoutesList from './MatchingRoutesList';
import Icon from 'src/components/atoms/Icon/Icon';
import { ILog, ILogFilters } from 'src/redux/interfaces/logs';
import { IRoute } from 'src/redux/interfaces/routes';
import { mapMatchingFilters } from 'src/redux/utils/utils';

interface IMatchingDetailsProps {
  log: ILog;
  matchingRoutes: IRoute[];
  logFilters?: ILogFilters;
  showSpinner: boolean;
  activePhase: string;
}

const MatchingDetails: React.SFC<IMatchingDetailsProps> = (props) => {
  const { log, matchingRoutes, logFilters, showSpinner, activePhase } = props;

  const hasMatchedFilters = () =>
    logFilters && logFilters.filters && !!logFilters.filters.length;

  const matchingFilters = () => mapMatchingFilters(matchingRoutes, logFilters);
  const hasValidFilters = () => matchingFilters().length;
  const outdated = () => hasMatchedFilters() && !hasValidFilters();

  const hasFilters = () =>
    matchingRoutes &&
    !!matchingRoutes.reduce((total, single) => {
      const entries = single ? single.entries.length : 0;
      return total + entries;
    },                      0);

  return (
    <div className="matching-details mx-3">
      <h3 className="my-2">Match Information</h3>
      {showSpinner ? (
        <div className="text-center my-5">
          <Icon name="spinner" animation="pulse" />
        </div>
      ) : (
        <>
          {log.routes.data.length ? (
            <MatchingRoutesList
              logRoutes={log.routes.data}
              logRouteType={log.route_type === 'reverse' ? 'inbound' : 'outbound'}
              matchingRoutes={matchingRoutes}
              matchingFilters={matchingFilters()}
              matchingOperations={logFilters ? logFilters.operations : []}
              hasFilters={hasFilters()}
              outdated={outdated()}
              activePhase={activePhase}
            />
          ) : (
            <p className="text-text-light">Nothing matched</p>
          )}
        </>
      )}
    </div>
  );
};

export default MatchingDetails;
