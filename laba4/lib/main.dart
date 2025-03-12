import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Лабораторная работа 4',
      theme: ThemeData(
        primarySwatch: Colors.green,
      ),
      home: const HomeScreen(),
    );
  }
}

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  int _likesCount = 0;
  bool _isLiked = false;

  void _toggleLike() {
    setState(() {
      if (!_isLiked) {
        _likesCount++;
        _isLiked = true;
      } else {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Вы уже поставили лайк!')),
        );
      }
    });
  }

  // Функция для открытия ссылки
  Future<void> _launchURL(String url) async {
    if (await canLaunch(url)) {
      await launch(url);
    } else {
      throw 'Не удается открыть ссылку $url';
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Общежития КубГАУ'),
      ),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const SizedBox(height: 16),
              Image.network(
                'https://sun9-40.userapi.com/s/v1/ig2/m8wRvQ70t4diy--ngylsjzqPH0Q0zKd_zXn2MDsAG7jW6_HqWtmFZS9vQ-jA2h6Ybe842VvvBt7WkXUWPvdXymqG.jpg?quality=95&as=32x23,48x34,72x51,108x77,160x114,240x171,360x257,480x343,540x385,640x457,720x514,1080x771,1280x913,1435x1024&from=bu&u=vkdmz6YeWjWtphWD_EJyCAmvnI8spNDZd83OvRNVUpU&cs=604x431',
                width: double.infinity,
                height: 600,
                fit: BoxFit.cover,
                loadingBuilder: (context, child, loadingProgress) {
                  if (loadingProgress == null) return child;
                  return const Center(child: CircularProgressIndicator());
                },
                errorBuilder: (context, error, stackTrace) {
                  return const Center(child: Text('Ошибка загрузки изображения'));
                },
              ),
              const SizedBox(height: 16),

              // Размещение текста и лайка на одном уровне
              Row(
                mainAxisAlignment: MainAxisAlignment.start,
                children: [
                  const Text(
                    'Общежитие №20',
                    style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                  ),
                  const SizedBox(width: 420), 
                  Row(
                    mainAxisAlignment: MainAxisAlignment.end,
                    children: [
                      IconButton(
                        icon: const Icon(Icons.favorite, color: Colors.red),
                        onPressed: _toggleLike,
                      ),
                      Text(
                        '$_likesCount',
                        style: const TextStyle(
                          color: Colors.red,
                          fontSize: 16,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ],
                  ),
                ],
              ),
              const SizedBox(height: 4),
              const Text(
                'Краснодар, ул. Калинина, 13',
                style: TextStyle(fontSize: 16, color: Colors.grey),
              ),
              const SizedBox(height: 16),

              // Кнопки с ссылками
              const SizedBox(height: 16),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  Column(
                    children: [
                      IconButton(
                        icon: const Icon(Icons.call, color: Colors.green),
                        onPressed: () {
                          _launchURL('https://rutube.ru/video/f3b615db135287a64584737e664e1e4b/?ysclid=m84pnmcc7d542664246&utm_referrer=https%3A%2F%2Fyandex.ru%2F');
                        },
                      ),
                      const Text('ПОЗВОНИТЬ', style: TextStyle(color: Colors.green)),
                    ],
                  ),
                  Column(
                    children: [
                      IconButton(
                        icon: const Icon(Icons.directions, color: Colors.green),
                        onPressed: () {
                          _launchURL('https://rutube.ru/video/f3b615db135287a64584737e664e1e4b/?ysclid=m84pnmcc7d542664246&utm_referrer=https%3A%2F%2Fyandex.ru%2F');
                        },
                      ),
                      const Text('МАРШРУТ', style: TextStyle(color: Colors.green)),
                    ],
                  ),
                  Column(
                    children: [
                      IconButton(
                        icon: const Icon(Icons.share, color: Colors.green),
                        onPressed: () {
                          _launchURL('https://rutube.ru/video/f3b615db135287a64584737e664e1e4b/?ysclid=m84pnmcc7d542664246&utm_referrer=https%3A%2F%2Fyandex.ru%2F');
                        },
                      ),
                      const Text('ПОДЕЛИТЬСЯ', style: TextStyle(color: Colors.green)),
                    ],
                  ),
                ],
              ),

              const SizedBox(height: 16),
              const Text(
                'Студенческий городок или так называемый кампус Кубанского ГАУ состоит из двадцати общежитий, в которых проживает более 8000 студентов, что составляет 96% от всех нуждающихся. '
                'Студенты первого курса обеспечены местами в общежитии полностью. В соответствии с Положением о студенческих общежитиях университета, при поселении между администрацией и студентами заключается договор найма жилого помещения. '
                'Воспитательная работа в общежитиях направлена на улучшение быта, соблюдение правил внутреннего распорядка, отсутствия асоциальных явлений в молодежной среде. '
                'Условия проживания в общежитиях университетского кампуса полностью отвечают санитарным нормам и требованиям: наличие оборудованных кухонь, душевых комнат, прачечных, читальных залов, комнат самоподготовки, помещений для заседаний студенческих советов и наглядной агитации. '
                'С целью улучшения условий быта студентов активно работает система студенческого самоуправления - студенческие советы организуют всю работу по самообслуживанию.',
                style: TextStyle(fontSize: 16),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
