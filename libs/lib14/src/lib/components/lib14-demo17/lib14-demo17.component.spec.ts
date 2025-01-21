import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib14Demo17Component } from './lib14-demo17.component';

describe('Lib14Demo17Component', () => {
  let component: Lib14Demo17Component;
  let fixture: ComponentFixture<Lib14Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib14Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib14Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
