const FilterBySpecies = ({ species, handleFilterSpecies, filterSpecie }) => {
  const speciesValue = (ev) => {
    return handleFilterSpecies(ev.target.value);
  };
  const renderSpecies = () => {
    return species.map((specie, index) => {
      return (
        <section key={index}>
          <label htmlFor="specie" className="form__label">
            {specie}
          </label>
          <input
            id="specie"
            type="checkbox"
            value={specie}
            checked={filterSpecie.includes(specie)}
            className="form__input"
            onChange={speciesValue}
          />
        </section>
      );
    });
  };

  return <fieldset className="form__species">{renderSpecies()}</fieldset>;
};
export default FilterBySpecies;