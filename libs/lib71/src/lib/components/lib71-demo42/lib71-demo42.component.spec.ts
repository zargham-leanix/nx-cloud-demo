import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib71Demo42Component } from './lib71-demo42.component';

describe('Lib71Demo42Component', () => {
  let component: Lib71Demo42Component;
  let fixture: ComponentFixture<Lib71Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib71Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib71Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
