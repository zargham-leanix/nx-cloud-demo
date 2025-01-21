import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib57Demo42Component } from './lib57-demo42.component';

describe('Lib57Demo42Component', () => {
  let component: Lib57Demo42Component;
  let fixture: ComponentFixture<Lib57Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib57Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib57Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
