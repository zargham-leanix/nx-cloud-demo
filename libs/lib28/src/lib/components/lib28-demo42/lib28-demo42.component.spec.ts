import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib28Demo42Component } from './lib28-demo42.component';

describe('Lib28Demo42Component', () => {
  let component: Lib28Demo42Component;
  let fixture: ComponentFixture<Lib28Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib28Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib28Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
