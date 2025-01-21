import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib27Demo2Component } from './lib27-demo2.component';

describe('Lib27Demo2Component', () => {
  let component: Lib27Demo2Component;
  let fixture: ComponentFixture<Lib27Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib27Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib27Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
