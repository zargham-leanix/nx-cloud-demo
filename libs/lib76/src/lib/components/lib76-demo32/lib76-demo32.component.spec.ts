import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib76Demo32Component } from './lib76-demo32.component';

describe('Lib76Demo32Component', () => {
  let component: Lib76Demo32Component;
  let fixture: ComponentFixture<Lib76Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib76Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib76Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
