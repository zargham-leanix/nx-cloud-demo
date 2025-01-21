import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib97Demo24Component } from './lib97-demo24.component';

describe('Lib97Demo24Component', () => {
  let component: Lib97Demo24Component;
  let fixture: ComponentFixture<Lib97Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib97Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib97Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
