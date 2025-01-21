import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib27Demo24Component } from './lib27-demo24.component';

describe('Lib27Demo24Component', () => {
  let component: Lib27Demo24Component;
  let fixture: ComponentFixture<Lib27Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib27Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib27Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
