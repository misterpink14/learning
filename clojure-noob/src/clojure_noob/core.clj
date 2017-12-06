(ns clojure-noob.core
  (:gen-class))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (def userName
    (if (> 0 (count args))
      "World"
      (first args)))
  (println (str "Hello " userName "!")))
