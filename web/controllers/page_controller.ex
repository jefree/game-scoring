defmodule GamesRanking.PageController do
  use GamesRanking.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
