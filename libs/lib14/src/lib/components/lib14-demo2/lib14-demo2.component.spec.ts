import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib14Demo2Component } from './lib14-demo2.component';

describe('Lib14Demo2Component', () => {
  let component: Lib14Demo2Component;
  let fixture: ComponentFixture<Lib14Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib14Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib14Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
