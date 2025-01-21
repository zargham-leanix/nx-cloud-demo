import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib81Demo24Component } from './lib81-demo24.component';

describe('Lib81Demo24Component', () => {
  let component: Lib81Demo24Component;
  let fixture: ComponentFixture<Lib81Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib81Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib81Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
