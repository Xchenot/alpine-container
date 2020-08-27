# script in development

#set local modules
import sys
sys.path.append('/root/app/src/libs')

import irc

host = 'irc.root-me.org'
Port = '6667'
irc_channel = '#root-me_challenge'
bot = 'candy'
message = '!ep1'

irc = IRC()
irc.connect(host, port, irc_channel, bot)

irc.send(irc_channel, message)
text = irc.get_response()
print(text)