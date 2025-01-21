import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib66Demo35Component } from './lib66-demo35.component';

describe('Lib66Demo35Component', () => {
  let component: Lib66Demo35Component;
  let fixture: ComponentFixture<Lib66Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib66Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib66Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
