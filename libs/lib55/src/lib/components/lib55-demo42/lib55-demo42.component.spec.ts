import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib55Demo42Component } from './lib55-demo42.component';

describe('Lib55Demo42Component', () => {
  let component: Lib55Demo42Component;
  let fixture: ComponentFixture<Lib55Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib55Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib55Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
