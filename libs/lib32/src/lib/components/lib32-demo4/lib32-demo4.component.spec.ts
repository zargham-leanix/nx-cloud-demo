import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib32Demo4Component } from './lib32-demo4.component';

describe('Lib32Demo4Component', () => {
  let component: Lib32Demo4Component;
  let fixture: ComponentFixture<Lib32Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib32Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib32Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
