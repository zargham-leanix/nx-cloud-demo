import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib85Demo17Component } from './lib85-demo17.component';

describe('Lib85Demo17Component', () => {
  let component: Lib85Demo17Component;
  let fixture: ComponentFixture<Lib85Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib85Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib85Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
