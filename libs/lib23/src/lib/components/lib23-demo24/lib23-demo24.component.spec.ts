import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib23Demo24Component } from './lib23-demo24.component';

describe('Lib23Demo24Component', () => {
  let component: Lib23Demo24Component;
  let fixture: ComponentFixture<Lib23Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib23Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib23Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
