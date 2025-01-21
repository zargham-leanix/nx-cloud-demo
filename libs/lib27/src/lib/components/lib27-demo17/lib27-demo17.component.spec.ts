import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib27Demo17Component } from './lib27-demo17.component';

describe('Lib27Demo17Component', () => {
  let component: Lib27Demo17Component;
  let fixture: ComponentFixture<Lib27Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib27Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib27Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
