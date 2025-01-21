import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib81Demo44Component } from './lib81-demo44.component';

describe('Lib81Demo44Component', () => {
  let component: Lib81Demo44Component;
  let fixture: ComponentFixture<Lib81Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib81Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib81Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
