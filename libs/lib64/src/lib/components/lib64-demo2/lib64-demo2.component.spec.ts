import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib64Demo2Component } from './lib64-demo2.component';

describe('Lib64Demo2Component', () => {
  let component: Lib64Demo2Component;
  let fixture: ComponentFixture<Lib64Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib64Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib64Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
