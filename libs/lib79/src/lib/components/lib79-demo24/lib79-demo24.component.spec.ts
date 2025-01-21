import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib79Demo24Component } from './lib79-demo24.component';

describe('Lib79Demo24Component', () => {
  let component: Lib79Demo24Component;
  let fixture: ComponentFixture<Lib79Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib79Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib79Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
