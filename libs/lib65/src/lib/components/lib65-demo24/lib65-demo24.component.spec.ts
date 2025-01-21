import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib65Demo24Component } from './lib65-demo24.component';

describe('Lib65Demo24Component', () => {
  let component: Lib65Demo24Component;
  let fixture: ComponentFixture<Lib65Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib65Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib65Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
