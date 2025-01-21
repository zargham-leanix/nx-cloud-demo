import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib55Demo43Component } from './lib55-demo43.component';

describe('Lib55Demo43Component', () => {
  let component: Lib55Demo43Component;
  let fixture: ComponentFixture<Lib55Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib55Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib55Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
