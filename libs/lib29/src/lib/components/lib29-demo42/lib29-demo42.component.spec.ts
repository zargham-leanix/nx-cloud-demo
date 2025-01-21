import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib29Demo42Component } from './lib29-demo42.component';

describe('Lib29Demo42Component', () => {
  let component: Lib29Demo42Component;
  let fixture: ComponentFixture<Lib29Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib29Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib29Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
