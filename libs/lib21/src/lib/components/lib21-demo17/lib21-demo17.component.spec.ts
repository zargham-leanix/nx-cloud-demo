import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib21Demo17Component } from './lib21-demo17.component';

describe('Lib21Demo17Component', () => {
  let component: Lib21Demo17Component;
  let fixture: ComponentFixture<Lib21Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib21Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib21Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
