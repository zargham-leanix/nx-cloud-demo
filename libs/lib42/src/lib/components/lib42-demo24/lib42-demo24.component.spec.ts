import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib42Demo24Component } from './lib42-demo24.component';

describe('Lib42Demo24Component', () => {
  let component: Lib42Demo24Component;
  let fixture: ComponentFixture<Lib42Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib42Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib42Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
