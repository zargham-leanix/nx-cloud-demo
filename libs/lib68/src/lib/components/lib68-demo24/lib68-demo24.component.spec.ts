import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib68Demo24Component } from './lib68-demo24.component';

describe('Lib68Demo24Component', () => {
  let component: Lib68Demo24Component;
  let fixture: ComponentFixture<Lib68Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib68Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib68Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
