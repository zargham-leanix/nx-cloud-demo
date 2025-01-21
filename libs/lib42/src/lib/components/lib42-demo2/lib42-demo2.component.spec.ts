import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib42Demo2Component } from './lib42-demo2.component';

describe('Lib42Demo2Component', () => {
  let component: Lib42Demo2Component;
  let fixture: ComponentFixture<Lib42Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib42Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib42Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
