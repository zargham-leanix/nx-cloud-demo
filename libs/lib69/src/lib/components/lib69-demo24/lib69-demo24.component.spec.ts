import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib69Demo24Component } from './lib69-demo24.component';

describe('Lib69Demo24Component', () => {
  let component: Lib69Demo24Component;
  let fixture: ComponentFixture<Lib69Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib69Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib69Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
