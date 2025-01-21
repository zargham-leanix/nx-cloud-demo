import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib81Demo25Component } from './lib81-demo25.component';

describe('Lib81Demo25Component', () => {
  let component: Lib81Demo25Component;
  let fixture: ComponentFixture<Lib81Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib81Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib81Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
