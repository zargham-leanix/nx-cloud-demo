import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib63Demo17Component } from './lib63-demo17.component';

describe('Lib63Demo17Component', () => {
  let component: Lib63Demo17Component;
  let fixture: ComponentFixture<Lib63Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib63Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib63Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
