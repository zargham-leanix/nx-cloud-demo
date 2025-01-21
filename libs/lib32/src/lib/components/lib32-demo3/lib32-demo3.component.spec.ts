import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib32Demo3Component } from './lib32-demo3.component';

describe('Lib32Demo3Component', () => {
  let component: Lib32Demo3Component;
  let fixture: ComponentFixture<Lib32Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib32Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib32Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
