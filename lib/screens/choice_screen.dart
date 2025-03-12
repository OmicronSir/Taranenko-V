import 'package:flutter/material.dart';

class ChoiceScreen extends StatelessWidget {
  const ChoiceScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Выбор')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            ElevatedButton(
              onPressed: () => Navigator.pop(context, 'Да'),
              child: const Text('Да'),
            ),
            ElevatedButton(
              onPressed: () => Navigator.pop(context, 'Нет'),
              child: const Text('Нет'),
            ),
          ],
        ),
      ),
    );
  }
}