import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib12Demo42Component } from './lib12-demo42.component';

describe('Lib12Demo42Component', () => {
  let component: Lib12Demo42Component;
  let fixture: ComponentFixture<Lib12Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib12Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib12Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
