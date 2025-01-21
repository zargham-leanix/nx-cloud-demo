import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib76Demo17Component } from './lib76-demo17.component';

describe('Lib76Demo17Component', () => {
  let component: Lib76Demo17Component;
  let fixture: ComponentFixture<Lib76Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib76Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib76Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
