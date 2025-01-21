import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib81Demo46Component } from './lib81-demo46.component';

describe('Lib81Demo46Component', () => {
  let component: Lib81Demo46Component;
  let fixture: ComponentFixture<Lib81Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib81Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib81Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
