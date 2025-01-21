import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib5Demo17Component } from './lib5-demo17.component';

describe('Lib5Demo17Component', () => {
  let component: Lib5Demo17Component;
  let fixture: ComponentFixture<Lib5Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib5Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib5Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
