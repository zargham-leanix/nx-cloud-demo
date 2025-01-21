import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib63Demo42Component } from './lib63-demo42.component';

describe('Lib63Demo42Component', () => {
  let component: Lib63Demo42Component;
  let fixture: ComponentFixture<Lib63Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib63Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib63Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
