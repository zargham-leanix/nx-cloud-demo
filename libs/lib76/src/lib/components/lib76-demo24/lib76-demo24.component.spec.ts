import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib76Demo24Component } from './lib76-demo24.component';

describe('Lib76Demo24Component', () => {
  let component: Lib76Demo24Component;
  let fixture: ComponentFixture<Lib76Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib76Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib76Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
