import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib24Demo2Component } from './lib24-demo2.component';

describe('Lib24Demo2Component', () => {
  let component: Lib24Demo2Component;
  let fixture: ComponentFixture<Lib24Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib24Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib24Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
