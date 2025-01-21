import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib54Demo2Component } from './lib54-demo2.component';

describe('Lib54Demo2Component', () => {
  let component: Lib54Demo2Component;
  let fixture: ComponentFixture<Lib54Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib54Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib54Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
