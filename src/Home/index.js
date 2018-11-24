import React, { Component } from "react";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import { setSearchValue } from "../modules/searchbar";
import { getData } from "../modules/http";

import Searchbar from "../shared/components/Searchbar";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //   fetch latest teams stats
    // this.props.fetch();
  }

  render() {
    const { isLoading, searchValue, setSearchValue, getData } = this.props;

    return (
      <div>
        <Searchbar searchValue={searchValue} setSearchValue={setSearchValue} />
        {/* <AttractSelector
          openCustomModal={openCustomModal}
          attractScreens={attractScreens}
          setSelectedPreAttractState={setSelectedPreAttractState}
          setSelectedPreAttractDatabase={setSelectedPreAttractDatabase}
          selectedPreAttract={selectedPreAttract}
        />

        <AttractPreview
          setActiveStep={setActiveStep}
          selectedPreAttract={selectedPreAttract}
          attractsLoading={attractsLoading}
        />

        <TemplateModal
          isOpen={isOpen}
          closeTemplateModal={closeTemplateModal}
        />
        <CustomDesignModal
          uploadAssets={uploadAssets}
          model={model}
          isOpen={customDesignOpen}
          openTemplateModal={openTemplateModal}
          closeCustomModal={closeCustomModal}
          uploadCompletedPercent={uploadCompletedPercent}
        /> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchValue: state.searchbar.searchValue,
  isLoading: state.http.isLoading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setSearchValue,
      getData
    },
    dispatch
  );

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Home);
