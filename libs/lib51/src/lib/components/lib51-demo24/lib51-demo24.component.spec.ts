import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib51Demo24Component } from './lib51-demo24.component';

describe('Lib51Demo24Component', () => {
  let component: Lib51Demo24Component;
  let fixture: ComponentFixture<Lib51Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib51Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib51Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
