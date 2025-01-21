import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib22Demo2Component } from './lib22-demo2.component';

describe('Lib22Demo2Component', () => {
  let component: Lib22Demo2Component;
  let fixture: ComponentFixture<Lib22Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib22Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib22Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
