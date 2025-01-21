import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib29Demo17Component } from './lib29-demo17.component';

describe('Lib29Demo17Component', () => {
  let component: Lib29Demo17Component;
  let fixture: ComponentFixture<Lib29Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib29Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib29Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
