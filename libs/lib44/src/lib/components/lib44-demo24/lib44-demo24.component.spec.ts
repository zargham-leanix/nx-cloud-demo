import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib44Demo24Component } from './lib44-demo24.component';

describe('Lib44Demo24Component', () => {
  let component: Lib44Demo24Component;
  let fixture: ComponentFixture<Lib44Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib44Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib44Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
