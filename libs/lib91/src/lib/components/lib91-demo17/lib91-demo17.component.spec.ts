import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib91Demo17Component } from './lib91-demo17.component';

describe('Lib91Demo17Component', () => {
  let component: Lib91Demo17Component;
  let fixture: ComponentFixture<Lib91Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib91Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib91Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
