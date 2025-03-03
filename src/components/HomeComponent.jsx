const HomeComponent = ({ searchQuery }) => {
    const items = ["Dashboard", "Reports", "Analytics"];
    const filteredItems = items.filter((item) =>
      item.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    return (
      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  };
  
  export default HomeComponent;
  
