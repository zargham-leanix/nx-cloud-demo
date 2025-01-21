import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib38Demo24Component } from './lib38-demo24.component';

describe('Lib38Demo24Component', () => {
  let component: Lib38Demo24Component;
  let fixture: ComponentFixture<Lib38Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib38Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib38Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
