import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib79Demo32Component } from './lib79-demo32.component';

describe('Lib79Demo32Component', () => {
  let component: Lib79Demo32Component;
  let fixture: ComponentFixture<Lib79Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib79Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib79Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
