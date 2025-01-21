import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib86Demo17Component } from './lib86-demo17.component';

describe('Lib86Demo17Component', () => {
  let component: Lib86Demo17Component;
  let fixture: ComponentFixture<Lib86Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib86Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib86Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
