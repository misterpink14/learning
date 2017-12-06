(ns clojure-noob.core
  (:gen-class))

(defn -main
  "I don't do a whole lot ... yet."
  ([& args]
  (def userName (first args))
  (println (str "Hello " userName "!")))
  ([]
  (println (str "Hello World!"))))
  
