import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib59Demo17Component } from './lib59-demo17.component';

describe('Lib59Demo17Component', () => {
  let component: Lib59Demo17Component;
  let fixture: ComponentFixture<Lib59Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib59Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib59Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
