import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Инкремент',
      theme: ThemeData(
        primarySwatch: Colors.green,
      ),
      home: const MyHomePage(title: 'Инкремент'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});
  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  void _decrementCounter() {
    setState(() {
      _counter--;
    });
  }

  void _resetCounter() {
    setState(() {
      _counter = 0;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Text(
              'Значение инкремента:',
              style: TextStyle(fontSize: 18),
            ),
            Text(
              '$_counter',
            style: Theme.of(context).textTheme.headlineMedium,
            ),
            const SizedBox(height: 20),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                IconButton(
                  icon: const Icon(Icons.remove),
                  onPressed: _decrementCounter,
                  tooltip: 'Уменьшить',
                ),
                IconButton(
                  icon: const Icon(Icons.add),
                  onPressed: _incrementCounter,
                  tooltip: 'Увеличить',
                ),
              ],
            ),
            TextButton(
              style: TextButton.styleFrom(
                foregroundColor: Colors.grey,
                backgroundColor: Colors.transparent,
              ),
              onPressed: _resetCounter,
              child: const Text('Сбросить'),
            ),
          ],
        ),
      ),
    );
  }
}