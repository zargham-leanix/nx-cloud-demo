import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib6Demo24Component } from './lib6-demo24.component';

describe('Lib6Demo24Component', () => {
  let component: Lib6Demo24Component;
  let fixture: ComponentFixture<Lib6Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib6Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib6Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
