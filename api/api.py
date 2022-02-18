import time
from flask import Flask, request 
from wordle.game import Game
from wordle.guess import Guess 
import json 

app = Flask(__name__)
g = Game()

def init_game():
    g.api_init("wordle-answers-alphabetical.txt", "wordle-allowed-guesses.txt")
    print(len(g.full_word_list))
    print(g.data)

@app.route('/words')
def get_words():
    init_game()
    return json.dumps(list(g.data.words))

@app.route('/filter', methods=['GET'])
def filter_words():
    guess = request.args['text'].lower()
    mask = request.args['mask']
    gg = Guess(g.full_word_list)
    g.data.words = gg.have_a_guess(guess, mask, g.data.words)
    return json.dumps(list(g.data.words))
