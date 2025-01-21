import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib28Demo17Component } from './lib28-demo17.component';

describe('Lib28Demo17Component', () => {
  let component: Lib28Demo17Component;
  let fixture: ComponentFixture<Lib28Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib28Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib28Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
