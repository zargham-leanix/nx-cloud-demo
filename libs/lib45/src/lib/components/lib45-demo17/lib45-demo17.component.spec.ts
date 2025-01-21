import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib45Demo17Component } from './lib45-demo17.component';

describe('Lib45Demo17Component', () => {
  let component: Lib45Demo17Component;
  let fixture: ComponentFixture<Lib45Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib45Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib45Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
