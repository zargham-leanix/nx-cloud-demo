import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib66Demo4Component } from './lib66-demo4.component';

describe('Lib66Demo4Component', () => {
  let component: Lib66Demo4Component;
  let fixture: ComponentFixture<Lib66Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib66Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib66Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
