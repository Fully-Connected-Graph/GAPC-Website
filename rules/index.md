---
title: Rules
thumbnail: /GAPC-2024/assets/thumbnails/looking-at-papers.jpeg
---

## Rules

### Definitions

- GAPC: The Groningen Algorithm Programming Contest 2023
- Organisation: The event is organised by the members of Fully Connected Graph, the programming committee of the study association Cover
- Website: The website is maintained by the organisation and available at https://fully-connected-graph.github.io/GAPC-2024/
- Discord: The GAPC discord mentioned <a href="https://discord.com/invite/JfzxyBHPsH" target="_blank">FCG Discord</a>.
- Jury: The group responsible for creating the problem set and checking the solutions submitted by the participants.
- Technical staff: The group of people responsible for the system (the digital environment, jury system, printing, etc.).
- Runners: Volunteers responsible for answering questions and other tasks supervised by the organisation.
- Crew: Organisation, Jury, Technical staff and Runners.
- Participant: Member of a participating team that competes in the GAPC.

## Contact

For any questions related to the contest, please contact the organiser either by sending a message on the GAPC discord or by sending an email to programming_committee@svcover.nl.

## Participation

### Introduction

- Participation is recommended to be done in teams of 2 or 3 persons, but participating alone is also an option.

### Teams

This is an open contest to all students from a university within the Benelux region. Regarding registration, the teams formed with students from the University of Groningen or Hanze University of Applied Sciences are considered local teams. Teams that have in composition at least one member who is not a student at the before mentioned universities, will be regarded as external teams. There is a limit of 15 external teams.

All the teams:

- Participate for free.
- Participate in the teams' pool for the title “Winner of the Groningen Algorithm Programming Contest 2023”.

### Photos and videos

There will be 1 or more people that will capture digital content (photo, video etc). The materials will be made publicly available afterwards. If you do not want to appear in the photos or want to be removed from them afterwards, please contact the organisation.

## Contest

### Introduction

- The language of the contest is English. All written contest materials will be in English.
- The contest lasts for 4 hours.
- From the beginning until one hour before the end of the GAPC, the scores are displayed.
- A team is allowed a dictionary from English to their native language. The dictionary should have no notes written in them.

### Problems

- At least six problems will be posted. The jury intends to develop problems with minimal dependence on detailed knowledge of a particular application area or a particular contest language.
- A contestant may submit a claim of ambiguity or error for a problem statement by submitting a clarification request to a judge. If the judges agree that an ambiguity or error exists, a clarification will be issued to all contestants.
- The jury has the right to change or withdraw problems during the contest before informing all teams.

## System

- A solution for a problem has to be written in C99, C++ (version 14 or later will be available), Python (versions 3 will be available), Java (version 11 or later) or Haskell (ghc version 9.0.2), unless problem statement explicitly states otherwise.
- A team is disqualified if they submit a harmful code that disrupts the contest.
- A submission can use the standard library of the language, which means that libraries such as "numpy" are not available.
- Each team will use at most one laptop that is brought by the team.
- There will be access to the internet. However, it is forbidden to communicate through the internet with other people in any way (sending messages, posting on forums, etc.). Actions like searching for syntax problems or algorithms are allowed. Moreover, the usage of any tools powered by AI that generates code is forbidden, including, but not limited to, chatGPT, GitHub Copilot, Blackbox. If you have any similar extensions on your device, you must deactivate them before the start of the contest.

## Judgement

- Each run is judged as accepted or rejected by the judging system, and the team is notified of the results.
- For each problem, the jury has a correct solution and test data.
- The winner of the pool is decided by (in order):
  - The team with the most solved problems.
  - The team with the least total time. The total time is the sum of the time elapsed from the beginning of the contest to the submission of the accepted run, plus 20 penalty minutes for every rejected run for that problem regardless of the submission time. Time is not consumed when the problem is not solved.
  - The team that first submitted its last accepted problem is ranked higher. When a tie still remains, the team that first submitted its second-last accepted problem is ranked higher, and so on. When this does not resolve the tie, the ranks will be determined by chance.
- The problem set is the responsibility of the jury.
- The jury must be contacted through a “Clarification Request”.

## Judging system

- As a judging system, we will be using DomJudge. After making a submission to the judging system, the possible messages that can be received per submission are:

  - CORRECT The submission passed all tests: you solved this problem! Correct submissions do not incur penalty time.
  - COMPILER-ERROR There was an error when compiling your program. Note that when compilation takes more than 30 seconds, it is aborted and this counts as a compilation error. Compilation errors do not incur penalty time.
  - TIMELIMIT Your program took longer than the maximum allowed time for this problem. Therefore it has been aborted. This might indicate that your program hangs in a loop or that your solution is not efficient enough.
  - RUN-ERROR There was an error during the execution of your program. This can have a lot of different causes like division by zero, incorrectly addressing memory (e.g. by indexing arrays out of bounds), trying to use more memory than the limit, etc. Also check that your program exits with exit code 0!
  - NO-OUTPUT Your program did not generate any output. Check that you write to standard out.
  - OUTPUT-LIMIT Your program generated more output than the allowed limit. The output was truncated and considered incorrect.
  - WRONG-ANSWER The output of your program was incorrect. This can happen simply because your solution is not correct, but remember that your output must comply exactly with the specifications of the judges.
  - TOO-LATE Bummer, you submitted after the contest ended! Your submission is stored but will not be processed anymore.

- A link to the documentation of the judging system is <a  href="https://www.domjudge.org/docs/team-manual.pdf" target="_blank">here </a>. As a side note, not all the aspects presented in the link apply to this contest.

## Score and Leaderboard

- The winner of the pool is decided by (in order):
  - The team with most correctly solved problems (CORRECT).
  - The team with the least total time. The total time is the sum of the time elapsed from the beginning of the contest to the submission of the accepted run plus 20 penalty minutes for every rejected run for that problem regardless of the submission time. There is no time consumed for a problem that is not solved.
  - The team that first submitted its last accepted problem is ranked higher. In case a tie still remains, the team that first submitted its second-last accepted problem is ranked higher, and so on. In the event that this does not resolve the tie, the ranks will be determined by chance.

## Special Rules

- A team may be disqualified by the organisation or jury for any activity that jeopardises the contest, such as dislodging extension cords, unauthorised modification, unintended use of contest materials, using a forbidden function or library calls, or distracting behaviour.
- The participants don’t have access to their phones or any other device besides the laptop that the team is using, during the contest.
- The organisation has the right to stop the contest, extend the contest time, temporarily block submissions for all teams, or change the scores in exceptional conditions.
- In situations where no rule applies, or there is ambiguity about the rules, the organisation decides the outcome.
- If necessary, the organisation can make changes and exceptions to these rules.

## Contest machine

The contest machine is brought by the team members and used only by their team members.

## Languages and compilers

The following languages and compilers are available, note not all languages are accepted as submit languages.

- C: gcc 9.3.0
- C++: g++ 9.3.0
- Java: javac 11.0.11 (openjdk)
- Python: Python 3.7.12 (pypy3 7.3.9, gcc 9.3.0)
- Haskell (ghc 9.0.2)

### Aliases

The following aliases are available for your convenience. The following list of aliases help to compile your programs. Since similar compiler flags are used by DOMjudge using these aliases ensures compiling is done the same locally as on DOMjudge.

- my_gcc='gcc -g -O2 -std=gnu11 -static ${files} -lm'
- my_g++='g++ -g -O2 -std=gnu++2a -static ${files}'
- my_javac='javac -encoding UTF-8 -sourcepath . -d . ${files}'

The following aliases help to run your compiled programs. The run_java aliases on your machines actually refer to shell scripts. The difference between the shell scripts and the listed aliases is that the commands are actually run by taskset -c 0 [COMMAND]. This ensures your program is pinned to a single processor core (core #0). As is the case when your programs are run on DOMjudge.

- run_java='java -Dfile.encoding=UTF-8 -XX:+UseSerialGC -Xss64m -Xms1920m -Xmx1920m $1
- run_python='pypy3 ${files}'
