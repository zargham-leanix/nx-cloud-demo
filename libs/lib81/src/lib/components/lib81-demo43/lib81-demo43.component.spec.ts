import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib81Demo43Component } from './lib81-demo43.component';

describe('Lib81Demo43Component', () => {
  let component: Lib81Demo43Component;
  let fixture: ComponentFixture<Lib81Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib81Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib81Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
