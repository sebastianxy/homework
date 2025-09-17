import { useState } from "react";
import { DoubleLinkedList } from "../listas/DoublyLinkedList";

const DoubleLinkedPage = () => {
  const [history] = useState(() => {
    const list = new DoubleLinkedList();
    list.append("google.com");
    list.append("youtube.com");
    list.append("github.com");
    list.append("icetex.com");
    list.append("warhammer.com");
    list.append("capcom.com");
    list.append("twitch.com");
    list.append("docs.google.com");
    list.append("archive.org");
    return list;
  });

  const [currentPage, setCurrentPage] = useState(history.head);

  const nextPage = () => {
    if (currentPage?.next) setCurrentPage(currentPage.next);
  };

  const prevPage = () => {
    if (currentPage?.prev) setCurrentPage(currentPage.prev);
  };

  return (
    <div>
      <h2>🌐 Double Linked List - Historial</h2>
      <p>Pagina visitada: {currentPage?.value || "No page"}</p>
      <button onClick={prevPage}>⬅️ Anterior</button>
      <button onClick={nextPage}>➡️ Siguiente</button>
    </div>
  );
};

export default DoubleLinkedPage;
