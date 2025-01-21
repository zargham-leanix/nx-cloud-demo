import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib32Demo48Component } from './lib32-demo48.component';

describe('Lib32Demo48Component', () => {
  let component: Lib32Demo48Component;
  let fixture: ComponentFixture<Lib32Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib32Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib32Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
