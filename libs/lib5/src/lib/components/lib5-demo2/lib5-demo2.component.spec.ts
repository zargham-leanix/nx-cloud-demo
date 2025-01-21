import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib5Demo2Component } from './lib5-demo2.component';

describe('Lib5Demo2Component', () => {
  let component: Lib5Demo2Component;
  let fixture: ComponentFixture<Lib5Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib5Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib5Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
