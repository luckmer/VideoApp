import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { SetLikedMovie, SetDeleteMovie } from "../../reducers/MovieSlice";

const ApiFunctionality = (setFilterResult) => {
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState({
    modal: "",
  });

  const state = useSelector((state) => state.movie.movies);
  const likes = useSelector((state) => state.movie.liked);
  const filters = useSelector((state) => state.buttonPanel.filterType);
  const type = useSelector((state) => state.buttonPanel.type);

  const dispatch = useDispatch();

  const handleSave = (id, color) => {
    dispatch(SetLikedMovie({ like: id, color: color }));
  };

  const handleDelete = (id) => {
    dispatch(SetDeleteMovie({ movie: id }));
  };

  useEffect(() => {
    let FilterS = state.slice();
    const date = new Date();

    date.setFullYear(date.getFullYear() - 1);

    if (filters.favorite) {
      FilterS = FilterS.filter((item) => likes.includes(item.id));
    }

    if (filters.data) {
      FilterS = FilterS.sort(function (a, b) {
        return new Date(b.published) - new Date(a.published);
      });
    } else {
      FilterS = FilterS = FilterS.sort(function (a, b) {
        return new Date(a.published) - new Date(b.published);
      });
    }

    setFilterResult(FilterS);
  }, [state, filters, likes, setFilterResult]);

  const toggle = () => setModal(!modal);

  const handleSetupModal = (data) => {
    const modal = data.embedHtml;

    if (modal) setModalData({ modal });
    setModal(true);
  };

  const CustomStyle = {
    display: "flex",
    paddingTop: "20px",
    justifyContent: "center",
  };

  const CustomBody = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexFlow: " row wrap",
  };

  const PROPS = {
    CustomStyle,
    likes,
    handleSave,
    handleDelete,
    type,
    modalData,
    CustomBody,
    handleSetupModal,
    toggle,
    modal,
  };

  return PROPS;
};

export default ApiFunctionality;
