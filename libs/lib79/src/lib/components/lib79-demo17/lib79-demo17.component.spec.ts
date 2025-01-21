import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib79Demo17Component } from './lib79-demo17.component';

describe('Lib79Demo17Component', () => {
  let component: Lib79Demo17Component;
  let fixture: ComponentFixture<Lib79Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib79Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib79Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
