import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib81Demo8Component } from './lib81-demo8.component';

describe('Lib81Demo8Component', () => {
  let component: Lib81Demo8Component;
  let fixture: ComponentFixture<Lib81Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib81Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib81Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
