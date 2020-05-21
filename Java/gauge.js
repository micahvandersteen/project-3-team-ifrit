def sentiment_form(): 
  
  print('Enter some text ')
  x = input()

def sentiment_value():
  import nltk
  
  from nltk.sentiment.vader import SentimentIntensityAnalyzer

  analyser = SentimentIntensityAnalyzer()
  result = analyser.polarity_scores(x)
  score = result['compound']
  return round(score,1)

sentiment_value(sentiment_form)  

