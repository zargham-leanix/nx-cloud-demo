import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib24Demo24Component } from './lib24-demo24.component';

describe('Lib24Demo24Component', () => {
  let component: Lib24Demo24Component;
  let fixture: ComponentFixture<Lib24Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib24Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib24Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
