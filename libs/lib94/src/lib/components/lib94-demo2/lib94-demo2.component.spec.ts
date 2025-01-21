import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib94Demo2Component } from './lib94-demo2.component';

describe('Lib94Demo2Component', () => {
  let component: Lib94Demo2Component;
  let fixture: ComponentFixture<Lib94Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib94Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib94Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
