import { useHref } from 'react-router-dom';
import SearchTicketInput from './search_ticket_input';
import TabSelector from './tabs/tab_selector';

function Header() {
  const currentPage = useHref();

  return (
    <div className="flex flex-col">
      <TabSelector selectedPage={currentPage} />
      {(currentPage == '/' || currentPage.split('/')[1] == 'tickets') && (
        <SearchTicketInput />
      )}
    </div>
  );
}

export default Header;
