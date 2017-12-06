(ns clojure-noob.core
  (:gen-class))
(use '[clojure.string :only (join split)])

(defn -main
  "I don't do a whole lot ... yet."
  ([& args]
  (def userName (join ", " args))
  (println (str "Hello " userName "!")))
  ([]
  (-main "World")))
  
