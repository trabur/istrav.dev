network-ai
========

rough sketch:
1. Raft consensus between multiple node.js threads
2. markov chain tries to predict the next command that you want to run
3. commands are queued into a folder from the CLI
4. CLI over REST is available for websites and machine to machine communication
5. gulp watches for commands: assigns it to a exec thread with a task to perform
6. gulp watches for ideas: assigns it to a release for the next version of code to be deployed
7. we innovate by writing test cases around the CRUD of our ideas
8. NLP.js is trained to turn test cases into task code
9. geneticjs evolves task's code over time in order to optimize for speed and functionality
10. source code performs rolling updates to github while other machines perform rolling downloads

```bash
# node index.js --help
Usage: network-ai [options] [command]

CLI to network-ai functionality.

Options:
  -V, --version   output the version number
  -h, --help      display help for command

Commands:
  tasks <string>  Run a gulp task from the tasks folder.
  help [command]  display help for command
```
