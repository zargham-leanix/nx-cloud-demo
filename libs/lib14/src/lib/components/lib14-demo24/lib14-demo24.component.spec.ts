import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib14Demo24Component } from './lib14-demo24.component';

describe('Lib14Demo24Component', () => {
  let component: Lib14Demo24Component;
  let fixture: ComponentFixture<Lib14Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib14Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib14Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
