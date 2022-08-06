# Google Tasks Parser

## Google Tasks JSON format

```json
// The json representing a Task has the following format:
{
  "kind" : "",
  "items" : [ {
    "kind" : "",
    "id" : "",
    "title" : "",
    "updated" : "",
    "selfLink" : "",
    "items" : [ {
      "kind" : "",
      "id" : "",
      "title" : "",
      "updated" : "",
      "selfLink" : "",
      "status" : "",
    } ]
  } ]
}

// https://developers.google.com/tasks/reference/rest/v1/tasks?hl=en

// notes - Notes describing the task. Optional.
// due - Due date of the task (as a RFC 3339 timestamp). Optional. The due date only records date information; the time portion of the timestamp is discarded when setting the due date. It isn't possible to read or write the time that a task is due via the API.
// kind - Type of the resource. This is always "tasks#taskList". This is always "tasks#task".
// completed - Completion date of the task (as a RFC 3339 timestamp). This field is omitted if the task has not been completed.
// title - Title of the task.
// status - "needsAction" or "completed"

title notes: due: completed:
// 335 title - 325 tasks#task, 10 tasks#tasks
// 255 due
// 283 completed
```
