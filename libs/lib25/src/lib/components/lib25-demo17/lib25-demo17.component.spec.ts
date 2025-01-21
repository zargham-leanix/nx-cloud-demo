import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib25Demo17Component } from './lib25-demo17.component';

describe('Lib25Demo17Component', () => {
  let component: Lib25Demo17Component;
  let fixture: ComponentFixture<Lib25Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib25Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib25Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
